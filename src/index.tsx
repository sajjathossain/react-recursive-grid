import { createRoot } from 'react-dom/client';
import { Main } from './main';
import './index.css';

const container = document.querySelector('#root');
const root = createRoot(container as Element);

root.render(<Main />);
