# Usage

To run this template locally:

```bash
cd template
npm install
npx expo start --tunnel
```

Scan the QR code printed by Expo or open the tunnel URL in Expo Go to preview the app.

Notes:
- The `dev` script in package.json runs `expo start --tunnel --url-only` so the VibeSDK sandbox can extract the preview URL.
- For production builds, follow Expo build docs.
