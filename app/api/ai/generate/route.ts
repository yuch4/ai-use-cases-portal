import { NextRequest, NextResponse } from 'next/server';
import { sendMessage } from '@/app/lib/api/client';
import { SYSTEM_PROMPTS } from '@/app/lib/api/config';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { prompt, systemPrompt = 'GENERAL', maxTokens } = body;
    
    if (!prompt) {
      return NextResponse.json(
        { error: 'プロンプトが必要です' },
        { status: 400 }
      );
    }
    
    // システムプロンプトを選択
    const selectedSystemPrompt = SYSTEM_PROMPTS[systemPrompt as keyof typeof SYSTEM_PROMPTS] || SYSTEM_PROMPTS.GENERAL;
    
    // AIにリクエスト送信
    const result = await sendMessage(prompt, selectedSystemPrompt);
    
    return NextResponse.json({ result });
  } catch (error) {
    console.error('AI生成エラー:', error);
    return NextResponse.json(
      { error: 'AIモデルとの通信中にエラーが発生しました' },
      { status: 500 }
    );
  }
}
