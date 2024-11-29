# Luxe Beauty Clinic Website

## 專案概述
這是一個使用 Next.js 14 建立的現代化美容診所網站，採用了最新的 React Server Components 架構，並整合了多個現代化的 UI 組件和功能。

## 技術棧
- **框架**: Next.js 14
- **語言**: TypeScript
- **樣式**: Tailwind CSS
- **UI 組件**: shadcn/ui
- **圖標**: Lucide React
- **表單處理**: React Hook Form + Zod
- **狀態管理**: TanStack React Query
- **認證**: NextAuth.js

## 檔案結構
Website/
├── app/
│ ├── api/
│ │ └── swagger.json # API 文檔配置
│ ├── globals.css # 全局樣式
│ ├── layout.tsx # 根布局組件
│ └── page.tsx # 首頁組件
│
├── components/
│ ├── home/
│ │ ├── hero-section.tsx
│ │ ├── services-section.tsx
│ │ └── booking-section.tsx
│ ├── layout/
│ │ ├── footer.tsx
│ │ ├── logo.tsx
│ │ └── navigation.tsx
│ └── ui/ # shadcn/ui 組件
│
├── lib/
│ ├── data/
│ │ ├── footer.ts # 頁腳數據
│ │ ├── navigation.ts # 導航數據
│ │ └── time-slots.ts # 預約時段數據
│ └── utils.ts # 工具函數
│
├── docs/
│ └── api/
│ ├── README.md # API 文檔
│ └── postman-collection.json
│
├── public/ # 靜態資源
│
└── config/
├── components.json # shadcn/ui 配置
└── tailwind.config.ts # Tailwind 配置



## 主要功能模塊

### 1. 布局組件
- `app/layout.tsx`: 全局布局
- `components/layout/navigation.tsx`: 響應式導航欄
- `components/layout/footer.tsx`: 網站頁腳

### 2. 首頁模塊
- `app/page.tsx`: 首頁主組件
- `components/home/hero-section.tsx`: 主視覺區域
- `components/home/services-section.tsx`: 服務展示
- `components/home/booking-section.tsx`: 預約系統

### 3. UI 組件庫
完整的 shadcn/ui 組件集成，包括：
- Accordion
- Alert
- Button
- Card
- Dialog
- Form
- Sheet
- Table
等基礎組件

### 4. API 集成
- 完整的 REST API 文檔
- Swagger 配置
- Postman 集合


## 安全性考慮
- HTTPS 加密
- JWT 認證
- 密碼要求規範
- CORS 配置
- 請求大小限制

## 性能優化
- React Server Components
- 圖片優化
- 代碼分割
- 靜態資源 CDN

## 貢獻指南
1. Fork 專案
2. 創建特性分支
3. 提交更改
4. 推送到分支
5. 創建 Pull Request