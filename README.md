# Reown Counter Example

<div align="center">

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Anchor](https://img.shields.io/badge/Anchor-0.28.0-blue)](https://www.anchor-lang.com/)
[![Reown AppKit](https://img.shields.io/badge/Reown_AppKit-latest-green)](https://github.com/your-repo/reown-appkit)

A Counter dApp example using Reown AppKit on Solana blockchain.

</div>

## 📚 Overview

- DEMO: https://reown-counter.vercel.app

This project is a Counter dApp example implemented using Reown AppKit on the Solana blockchain. It is built with the Anchor framework, and the frontend is developed using Next.js and React, enhanced with react-query for state management and GSAP for smooth animations.

## 🚀 Key Features

- Counter increment
- Real-time transaction status monitoring
- Smooth animation effects
- Easy state management using Reown AppKit

## 🔍 Detailed Features

- Auth Guard HOC (`/src/hocs/withAuthGuard.tsx`)
  - Page navigation based on authentication status
  - Protects routes from unauthorized access
- Custom Anchor Program Hook (`/src/hooks/useAnchorProvider.ts`)
  - Sets up Anchor Provider for Solana program interactions
  - Manages program connection and context
- AppKit Provider (`/src/configs/appkit.ts`)
  - AppKit configuration
  - Project metadata setup
  - Network configuration
  - Feature settings
- Counter Custom Hook (`/src/containers/Count/hooks/useCounter.ts`)
  - Handles counter initialization
  - Manages increment function calls
  - Maintains counter state

## 🛠 Technologies Used

- [Anchor](https://www.anchor-lang.com/) - Solana smart contract framework
- [Reown AppKit](https://github.com/your-repo/reown-appkit) - Solana dApp development kit
- [React Query](https://tanstack.com/query/latest) - Server state management
- [GSAP](https://greensock.com/gsap/) - Animation library

## 💻 Installation

```bash
git clone https://github.com/your-username/reown-counter-example
cd reown-counter-example
pnpm install
```

## ⚙️ Configuration

Set the following environment variables in your `.env` file. Please enter your AppKit project ID.

```plaintext
NEXT_PUBLIC_PROGRAM_ID=your_program_id
```
