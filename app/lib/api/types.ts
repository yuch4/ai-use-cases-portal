// データベースモデルに対応する型定義

export interface Company {
  id: number;
  name: string;
  domain?: string | null;
  logo?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  id: number;
  email: string;
  name?: string | null;
  role: 'ADMIN' | 'USER';
  companyId: number;
  company?: Company;
  createdAt: Date;
  updatedAt: Date;
}

export interface Category {
  id: number;
  name: string;
  description?: string | null;
  icon?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface UseCase {
  id: number;
  title: string;
  description: string;
  content: string;
  categoryId: number;
  category?: Category;
  companyId: number;
  company?: Company;
  userId: number;
  user?: User;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Prompt {
  id: number;
  title: string;
  description?: string | null;
  content: string;
  categoryId: number;
  category?: Category;
  userId: number;
  user?: User;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Bookmark {
  id: number;
  userId: number;
  user?: User;
  useCaseId?: number | null;
  useCase?: UseCase | null;
  promptId?: number | null;
  prompt?: Prompt | null;
  createdAt: Date;
}

// API リクエスト/レスポンス用型定義

export interface UseCaseListResponse {
  useCases: UseCase[];
  total: number;
  page: number;
  limit: number;
}

export interface PromptListResponse {
  prompts: Prompt[];
  total: number;
  page: number;
  limit: number;
}

export interface PaginationParams {
  page?: number;
  limit?: number;
}

export interface UseCaseFilterParams extends PaginationParams {
  categoryId?: number;
  companyId?: number;
  search?: string;
  published?: boolean;
}

export interface PromptFilterParams extends PaginationParams {
  categoryId?: number;
  search?: string;
  published?: boolean;
}

export interface CreateUseCaseRequest {
  title: string;
  description: string;
  content: string;
  categoryId: number;
  published?: boolean;
}

export interface UpdateUseCaseRequest {
  title?: string;
  description?: string;
  content?: string;
  categoryId?: number;
  published?: boolean;
}

export interface CreatePromptRequest {
  title: string;
  description?: string;
  content: string;
  categoryId: number;
  published?: boolean;
}

export interface UpdatePromptRequest {
  title?: string;
  description?: string;
  content?: string;
  categoryId?: number;
  published?: boolean;
}

// AI関連の型定義

export interface AiPromptRequest {
  userInput: string;
  systemPrompt?: string;
  promptTemplate?: string;
  maxTokens?: number;
  temperature?: number;
}

export interface AiPromptResponse {
  result: string;
  tokenUsage?: {
    input: number;
    output: number;
    total: number;
  };
}

export interface AiPromptAnalysisRequest {
  promptContent: string;
}

export interface AiPromptAnalysisResponse {
  analysis: {
    clarity: number; // 1-10の評価
    specificity: number; // 1-10の評価
    contextProvided: number; // 1-10の評価
    effectiveness: number; // 1-10の評価
    summary: string;
    improvementSuggestions: string[];
  };
}

export interface AiUseCaseAnalysisRequest {
  useCaseContent: string;
}

export interface AiUseCaseAnalysisResponse {
  analysis: {
    businessValue: number; // 1-10の評価
    implementation: number; // 1-10の評価
    innovation: number; // 1-10の評価
    applicability: number; // 1-10の評価
    summary: string;
    strengths: string[];
    improvementAreas: string[];
  };
}
