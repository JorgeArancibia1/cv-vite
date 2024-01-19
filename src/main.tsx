import { NextUIProvider } from '@nextui-org/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './config/i18n.config.ts';

createRoot(document.getElementById('root') as HTMLElement).render(
	<StrictMode>
		<NextUIProvider>
			<App />
		</NextUIProvider>
	</StrictMode>
);