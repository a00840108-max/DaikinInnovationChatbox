<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/699849b5-5181-4970-85ff-055f85c5bd65

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GROQ_API_KEY` in [.env.local](.env.local) to your Groq API key
3. Run the app:
   `npm run dev`

## Deploy

Set `GROQ_API_KEY` in your hosting provider's server environment variables.

- Vercel: the app can use `api/chat.ts` as the public serverless endpoint.
- Render/Railway/Fly: use `npm run build` as the build command and `npm run start` as the start command.

If the frontend and backend are hosted on different domains, set `VITE_API_BASE_URL` to the public backend URL before building the frontend.
