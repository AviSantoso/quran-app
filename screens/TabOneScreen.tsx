import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

import { page, IPage, IVerse } from "./Page";

interface ITestVerse {
  text: string;
  num: number;
}

function Verse({ page }: { page: IPage }) {
  function getTestVerses(verses: IVerse[]): ITestVerse[] {
    return verses.map((verse, num) => {
      const split = verse.text_uthmani.split(" ");
      const current = [];
      for (let i = 0; i < split.length; i++) {
        const word = split[i];
        current.push(word);
        const len = current.join(" ").length;
        if (len > 30) {
          break;
        }
      }
      const text = current.join(" ");
      return { text, num };
    });
  }

  const testVerses = getTestVerses(page.verses);
  return (
    <View>
      {testVerses.map((testVerse) => (
        <Text key={testVerse.num} style={styles.quran}>
          {testVerse.text}
        </Text>
      ))}
    </View>
  );
}

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Verse page={page} />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  quran: {
    fontSize: 20,
    fontFamily: "Amiri-Regular",
    margin: 4,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
