import { AntDesign } from '@expo/vector-icons';
import { Text } from 'react-native';

const getColor = (focused: boolean) => (focused ? 'green' : 'gray');

export const TabBarIcon = ({
	focused,
	name,
}: {
	focused: boolean;
	name: React.ComponentProps<typeof AntDesign>['name'];
}) => {
	return (
		<AntDesign
			name={name}
			size={24}
			color={getColor(focused)}
		/>
	);
};

export const TabBarLabel = ({
	focused,
	label,
}: {
	focused: boolean;
	label: string;
}) => {
	return <Text style={{ color: getColor(focused) }}>{label}</Text>;
};
