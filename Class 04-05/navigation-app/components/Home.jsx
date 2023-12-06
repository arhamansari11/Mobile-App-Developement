import {
  View,
  Text,
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
} from "react-native";
import React from "react";

const Home = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.contentContainer}>
          <Button
            onPress={() => props.navigation.navigate("Profile")}
            title="Go to Profile"
            style={{ marginTop: 0 }}
          />
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Expedita facere
            veritatis, et dolore, dignissimos non eum iusto voluptate ducimus
            recusandae ab quod illum soluta quas ratione adipisci a cum debitis.
            Odit sunt odio atque alias illo soluta reiciendis nobis totam
            aperiam reprehenderit! Laudantium nemo deleniti eos eaque itaque
            totam impedit nobis veritatis velit, atque nostrum accusantium modi
            blanditiis necessitatibus tenetur? Numquam minus illum distinctio
            tempore dignissimos? Ab nobis ut nam nisi explicabo eveniet quod
            unde. Sunt sed explicabo odit ad hic esse, minus ipsam dolore
            voluptates, fugiat blanditiis animi at? Commodi, fugiat amet tenetur
            blanditiis consequatur consequuntur soluta neque explicabo inventore
            a nemo aut accusantium culpa ipsa earum eligendi itaque et? Quas
            fugit cum temporibus mollitia accusantium, est explicabo quisquam?
            Doloremque cumque atque nesciunt earum iusto maxime vel eaque
            consequatur laudantium quaerat magnam similique minima dolor
            recusandae velit dolore, vitae dicta. Sunt, expedita consequuntur!
            Ipsum voluptate cumque libero facilis dolorum! Nam, voluptatem
            ratione nemo error eveniet laboriosam. Porro, commodi fugit enim
            maiores nihil exercitationem accusamus voluptatem illo voluptates
            obcaecati, voluptate vel repellat repellendus autem dignissimos
            dolore! Ratione veniam exercitationem adipisci? Quo placeat, neque
            animi, voluptates totam reiciendis expedita consequatur suscipit
            quod veritatis veniam, accusantium culpa harum nesciunt ex dolorum.
            Cum veniam expedita voluptatum ab hic neque fugiat, dolorem optio!
            Inventore! Voluptatum voluptatibus consectetur quo repellat ducimus
            similique obcaecati eum fugiat sunt, nostrum perspiciatis corporis!
            Reiciendis odio aliquam, natus in minima nisi, mollitia modi veniam
            eligendi tempora expedita optio, ratione assumenda? Officiis
            accusantium ipsum ducimus doloribus exercitationem, tempora
            architecto, deserunt deleniti perferendis corrupti accusamus
            laboriosam dolor ea minus amet assumenda sapiente porro laborum
            itaque dolorum similique nemo? Incidunt maiores aliquid distinctio.
            Neque sequi minima similique officiis voluptas consectetur aperiam,
            tempora nulla molestiae esse ipsum laboriosam odio iusto tenetur
            repudiandae iste ea sed! Asperiores ducimus quia, saepe magnam quae
            laborum vel ad!
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  contentContainer: {
    // padding: 16,
  },
  text: {
    marginLeft: 10,
  },
});

export default Home;
