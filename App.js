import 'react-native-reanimated';
import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Screens/HomeScreen';
import SearchScreen from './Screens/SearchScreen';
import TimeScreen from './Screens/TimeScreen';
import ProfileScreen from './Screens/ProfileScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import NotificationScreen from './Screens/NotificationScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerScreen from './Screens/DrawerScreen';
import StudentRegistrationScreen from './Screens/StudentRegistration';
import StudentLoginScreen from './Screens/StudentLogin';
import CenterRegistrationScreen from './Screens/CenterRegistration';
import CenterLoginScreen from './Screens/CenterLogin';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const width = Dimensions.get('window').width;

function MyTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size, focused }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = 'home';
                    } else if (route.name === 'Search') {
                        iconName = 'search';
                    } else if (route.name === 'Notification') {
                        iconName = 'bell';
                    } else if (route.name === 'Time') {
                        iconName = 'clock-o';
                    } else if (route.name === 'Profile') {
                        iconName = 'user';
                    }

                    if (route.name === 'Plus') {
                        return (
                            <View style={styles.plusIconContainer}>
                                <Icon name="plus" size={32} color="#ffffff" />
                            </View>
                        );
                    }

                    return (
                        <View style={{ alignItems: 'center' }}>
                            <Icon name={iconName} size={size} color={color} />
                            <Text style={{ color: focused ? '#1177ff' : 'gray', fontSize: 12 }}>
                                {route.name}
                            </Text>
                        </View>
                    );
                },
                tabBarActiveTintColor: '#1177ff',
                tabBarInactiveTintColor: 'gray',
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 25,
                    left: 10, // Margin from left
                    right: 10, // Margin from right
                    width: width - 20, // Width of the tab bar
                    elevation: 0,
                    backgroundColor: '#ffffff',
                    borderRadius: 13,
                    height: 90,
                    ...styles.shadow
                },
                headerShown: false,
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Search" component={SearchScreen} />
            <Tab.Screen
                name="Notification"
                component={NotificationScreen}
                options={{
                    tabBarButton: (props) => (
                        <TouchableOpacity
                            {...props}
                            style={{
                                top: -30,
                                justifyContent: 'center',
                                alignItems: 'center',
                                ...styles.shadow
                            }}
                        >
                            <View style={styles.plusIconContainer}>
                                <Icon name="bell" size={32} color="#ffffff" />
                            </View>
                        </TouchableOpacity>
                    ),
                }}
            />
            <Tab.Screen name="Time" component={TimeScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
}

const StackNav = () => (
    <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={MyTabs} options={{ headerShown: false }} />
        <Stack.Screen name="StudentRegistraion" component={StudentRegistrationScreen} options={{ headerShown: false }} />
        <Stack.Screen name="StudentLogin" component={StudentLoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CenterRegistraion" component={CenterRegistrationScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CenterLogin" component={CenterLoginScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
);

const DrawerNav = () => (
    <Drawer.Navigator
        drawerContent={props => <DrawerScreen {...props} />}
        screenOptions={{
            headerShown: false,
        }}
    >
        <Drawer.Screen name="Home" component={StackNav} />
    </Drawer.Navigator>
);

const App = () => {
    return (
        <NavigationContainer>
            <DrawerNav />
        </NavigationContainer>
    );
};

export default App;

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#1177ff',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    },
    plusIconContainer: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#1177ff',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
