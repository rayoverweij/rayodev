import './styles/globals.css';
import { serif } from "./styles/fonts";


export const metadata = {
	title: "Rayo Verweij",
	description: "Personal website and blog of Rayo Verweij"
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang="en">
			<body className={`${serif.className}`}>
				{ children }
			</body>
		</html>
	);
};

export default RootLayout;
