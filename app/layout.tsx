import './globals.css';


export const metadata = {
	title: "Rayo Verweij",
	description: "Personal website and blog of Rayo Verweij"
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang="en">
			<body>
				{ children }
			</body>
		</html>
	);
};

export default RootLayout;
