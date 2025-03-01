import { NextRequest, NextResponse } from 'next/server';
import { sendMessage } from '@/app/lib/api/client';

// プロンプト分析用のシステムプロンプト
const PROMPT_ANALYSIS_SYSTEM_PROMPT = `あなたはプロンプトの品質と効果を分析する専門家です。
与えられたプロンプトを以下の観点から1〜10のスケールで評価し、改善点を提案してください：

1. 明確さ (Clarity): 指示が明確で曖昧さがないか
2. 具体性 (Specificity): 具体的な要求や条件が示されているか
3. コンテキスト提供 (Context): 必要な背景情報が含まれているか
4. 効果性 (Effectiveness): 目的を達成するための構成になっているか

また、プロンプト全体に対する簡潔な分析と、具体的な改善提案を3〜5点リストアップしてください。
分析結果は以下のJSON形式で返してください：

{
  "clarity": 数値（1-10）,
  "specificity": 数値（1-10）,
  "contextProvided": 数値（1-10）,
  "effectiveness": 数値（1-10）,
  "summary": "全体的な分析の要約",
  "improvementSuggestions": [
    "改善提案1",
    "改善提案2",
    "改善提案3"
  ]
}

レスポンスは必ずこのJSON形式のみで返し、追加の説明は含めないでください。`;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { promptContent } = body;
    
    if (!promptContent) {
      return NextResponse.json(
        { error: '分析するプロンプト内容が必要です' },
        { status: 400 }
      );
    }
    
    // AIにプロンプト分析リクエストを送信
    const result = await sendMessage(
      `以下のプロンプトを分析してください：\n\n${promptContent}`,
      PROMPT_ANALYSIS_SYSTEM_PROMPT
    );
    
    // 結果がJSON形式で返ってくることを期待
    try {
      const analysisResult = JSON.parse(result);
      return NextResponse.json({ analysis: analysisResult });
    } catch (parseError) {
      // JSONとして解析できない場合はテキストのまま返す
      return NextResponse.json({ 
        analysis: {
          summary: result,
          clarity: 5,
          specificity: 5,
          contextProvided: 5,
          effectiveness: 5,
          improvementSuggestions: []
        }
      });
    }
  } catch (error) {
    console.error('プロンプト分析エラー:', error);
    return NextResponse.json(
      { error: 'プロンプト分析中にエラーが発生しました' },
      { status: 500 }
    );
  }
}
