import { View, Text, TouchableOpacity, Image, Linking } from "react-native";
import { useState } from "react";

import styles from "./footer.style";
import { icons } from "../../../constants";


const Footer = ({ url }) => {

  const [isLiked, setIsLiked] = useState(false);

  return (
    <View style={styles.container}>
    <TouchableOpacity
      style={styles.likeBtn}
      onPress={() => setIsLiked(!isLiked)}
    >
      <Image
        source={isLiked ? icons.heartFilled : icons.heartOutline}
        resizeMode='contain'
        style={styles.likeBtnImage}
      />
    </TouchableOpacity>

      <TouchableOpacity
        style={styles.applyBtn}
        onPress={() => Linking.openURL(url)}
      >
        <Text style={styles.applyBtnText}>Apply for job</Text>
      </TouchableOpacity>
    </View>
    )
  }
export default Footer