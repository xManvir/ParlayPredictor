# ParlayPredictor

Parlay predictor is a personal project that lets you track NFL parlays and predict the probability of it hitting using real data and machine learning. 
The goal is simple: make it easy to monitor player props, view progress live, and explore how stats can be used to estimate probability.

## Project Overview
This project started as a small tool to follow my cousin's parlays without needing to use a sportsbook app.
Overtime, I want it to grow into a system that can anaylize player stats, weather, and matchups, to estimate the likelihood of a parlay hitting.

## MVP Goals
- Add parlays manually (player + stat + line + over/under)
- Display each leg's progress with mock or static data
- Save parlays locally so they presist on refresh
- Simple, clean UI

## Future Goals
- Integrate real NFL data
- Use machine learning to estimate per leg hit probabilities
- Combine leg probabilities to estimate parlay hit rate
- Add charts and visuals

## Tech Stack
| Area | Tool |
|------|------|
| Frontend | React + TypeScript |
| Styling | TailwindCSS |
| State Management | Zustand |
| Data (Future) | FastAPI or Node backend |
| ML (Future) | scikit-learn / XGBoost |
| Storage | LocalStorage (MVP), PostgreSQL (later) |

## Roadmap
- [x] Create GitHub repo & planning docs  
- [ ] Build mock UI (parlay + legs)  
- [ ] Add local saving  
- [ ] Display mock stats  
- [ ] Draft ML plan for probability predictions  
- [ ] Integrate real data sources

## Why I’m Building This
I love NFL parlays and data-driven predictions.  
This project combines coding, data, and sports into something that’s fun to build and practical to use.

## Example Concept (future)
> **CeeDee Lamb — Over 74.5 Receiving Yards**  
> Model predicts: **58% hit chance**  
> Parlay total hit rate: **18% (fair odds: +450)**

## Setup (coming soon)
```bash
npm install
npm run dev
