import { Button } from "react-native";

export default function Home({ navigation }) {
    return (
        <>
            <Button
                title="Home V1"
                onPress={() => navigation.navigate('HomeV1')}
            />
            <Button
                title="Home V2"
                onPress={() => navigation.navigate('HomeV2')}
            />
        </>
    )
}