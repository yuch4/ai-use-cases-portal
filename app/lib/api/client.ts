import axios from 'axios';
import { config } from './config';

// APIバージョンなどの定数
const API_VERSION = '2023-06-01';
const AI_MODEL = 'claude-3-sonnet-20241022'; // このモデル名は変更禁止

// Anthropic API用クライアント設定
export const anthropicClient = axios.create({
  baseURL: 'https://api.anthropic.com',
  headers: {
    'Content-Type': 'application/json',
    'anthropic-version': API_VERSION,
    'x-api-key': config.ANTHROPIC_API_KEY,
  },
});

// AI入力用型定義
export interface MessageRequest {
  model: string;
  max_tokens: number;
  messages: Array<{
    role: 'user' | 'assistant';
    content: string;
  }>;
  system?: string;
  temperature?: number;
}

// AI出力用型定義
export interface MessageResponse {
  id: string;
  type: string;
  role: string;
  content: Array<{
    type: string;
    text: string;
  }>;
  model: string;
  stop_reason: string;
  stop_sequence: string | null;
  usage: {
    input_tokens: number;
    output_tokens: number;
  };
}

// AIメッセージ送信関数
export async function sendMessage(content: string, systemPrompt?: string): Promise<string> {
  try {
    const request: MessageRequest = {
      model: AI_MODEL,
      max_tokens: 1000,
      messages: [
        {
          role: 'user',
          content,
        },
      ],
      temperature: 0.7,
    };

    if (systemPrompt) {
      request.system = systemPrompt;
    }

    const response = await anthropicClient.post<MessageResponse>('/v1/messages', request);
    return response.data.content[0].text;
  } catch (error) {
    console.error('AI API Error:', error);
    throw new Error('AIモデルとの通信に失敗しました');
  }
}

// 会話履歴を含めたメッセージ送信関数
export async function sendConversation(
  messages: Array<{ role: 'user' | 'assistant'; content: string }>,
  systemPrompt?: string
): Promise<string> {
  try {
    const request: MessageRequest = {
      model: AI_MODEL,
      max_tokens: 1000,
      messages,
      temperature: 0.7,
    };

    if (systemPrompt) {
      request.system = systemPrompt;
    }

    const response = await anthropicClient.post<MessageResponse>('/v1/messages', request);
    return response.data.content[0].text;
  } catch (error) {
    console.error('AI API Error:', error);
    throw new Error('AIモデルとの通信に失敗しました');
  }
}

// 指定したモデル名の取得関数
export function getModelName(): string {
  return AI_MODEL;
}

// APIバージョンの取得関数
export function getApiVersion(): string {
  return API_VERSION;
}
