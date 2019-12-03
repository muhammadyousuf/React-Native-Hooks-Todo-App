import React, {useState} from 'react';
import {Container, Content, Form, Item, Input, Button, Icon} from 'native-base';
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';

const UserProfile = () => {
  const [avatarSource, setAvatarSource] = useState(null);
  const [data, setData] = useState('');
  const options = {
    title: 'my pic app',
    takePhotoButtonTitle: 'Take photo with your camera',
    chooseFromLibraryButtonTitle: 'Choose photo from Library ',
  };
  const takePicture = () => {
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response.data);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        console.log('User FIles', response);
        const source = {uri: response.uri};
        setAvatarSource(source);
        setData(response.data);
      }
    });
  };
  return (
    <Container>
      <Content>
        <ScrollView>
          <View style={styles.imageView}>
            {avatarSource === null ? (
              <Image
                source={{
                  uri:
                    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
                }}
                style={styles.ProfileImage}
              />
            ) : (
              <Image
                source={avatarSource}
                style={styles.ProfileImage}
                resizeMode="cover"
              />
            )}
            <TouchableOpacity
              onPress={takePicture}
              style={styles.camerButtonStyle}>
              <Icon name="camera" style={styles.CameraIcon} />
            </TouchableOpacity>
          </View>

          <Form style={styles.formStyle}>
            <View style={styles.inputBox}>
              <Item>
                <Icon name="user" type="AntDesign" style={styles.IconColor} />
                <Input placeholder="Name" />
              </Item>
            </View>
            <View style={styles.inputBox}>
              <Item>
                <Icon
                  name="email"
                  type="MaterialIcons"
                  style={styles.IconColor}
                />
                <Input placeholder="Email" />
              </Item>
            </View>
            <View style={styles.inputBox}>
              <Item>
                <Icon name="phone" type="Feather" style={styles.IconColor} />
                <Input keyboardType="numeric" placeholder="Contact" />
              </Item>
            </View>
            <Button style={styles.BtnStyle}>
              <Text style={styles.btnText}> UPDATE </Text>
            </Button>
          </Form>
        </ScrollView>
      </Content>
    </Container>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  formStyle: {
    width: '80%',
    marginTop: '1%',
    marginLeft: '10%',
  },
  inputBox: {
    marginTop: '15%',
    borderWidth: 2,
    borderColor: '#000',
    backgroundColor: '#fff',
    paddingLeft: 10,
    fontFamily: 'MavenPro-Regular',
    fontSize: 13,
  },
  BtnStyle: {
    width: '80%',
    marginTop: '20%',
    marginLeft: '12%',
    backgroundColor: '#B40300',
    marginBottom: '10%',
  },
  btnText: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 30,
    color: '#fff',
    fontFamily: 'times',
  },
  imageView: {
    paddingTop: '7%',
    borderRadius: 100,
  },
  buttonIcon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  CameraIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    // marginLeft: '150%',
    textAlign: 'center',
    flex: 3,
    marginTop: 20,
    color: '#fff',
  },
  ProfileImage: {
    width: 160,
    height: 160,
    borderRadius: 160 / 2,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  buttonView: {
    width: '40%',
    justifyContent: 'center',
    flex: 1,
    height: 60,
    marginLeft: '30%',
    alignContent: 'center',
  },
  camerButtonStyle: {
    width: 160,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: -75,
    height: 75,
    backgroundColor: 'rgba(52, 52, 52, 0.6)',
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
  },
  IconColor: {
    color: '#B40300',
  },
});
