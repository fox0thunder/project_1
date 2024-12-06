import {
  Linking,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// images
import logo1 from '../../../assets/logo/logo1.png'
import logo2 from '../../../assets/logo/logo2.png'
import banner from '../../../assets/banner/banner1.png'

export default function HomeV1() {
  const register = () => {
    Linking.openURL('https://win8s.electrikora.com/?action=register');
  };
  const login = () => {
    Linking.openURL('https://win8s.electrikora.com');
  };

  return (
    <>
      <LinearGradient
        colors={['#000', '#000', '#EF3618', '#FF5F00', '#FFB800']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.container}
      >
        <View>
          <Image
            source={logo1}
            style={styles.logo}
          />
        </View>
        <View>
          <Image
            source={banner}
            style={styles.banner}
          />
        </View>
        <View>
          <Text style={styles.text}>
            แอพเกมคาสิโนลิขสิทธิ์แท้
          </Text>
          <Text style={styles.text}>
            อันดับที่ 1 ในไทย Win8s
          </Text>
        </View>
        <View>
          <Image
            source={logo2}
            style={{
              width: 360,
              height: 100
            }}
          />
        </View>
        <View style={styles.mainBtnBottom}>
          <LinearGradient
            style={styles.btn}
            colors={['rgb(242, 80, 19)', 'rgb(216, 28, 36)', 'rgb(128, 0, 0)']}>
            <TouchableOpacity
              style={[styles.btnRegister]}
              onPress={register}
            >
              <Text style={styles.btnRegister}>สมัครสมาชิก</Text>
            </TouchableOpacity>
          </LinearGradient>
          <TouchableOpacity
            style={[styles.btn, styles.btnLogin]}
            onPress={login}
          >
            <Text style={styles.btnLogin}>เข้าสู่ระบบ</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient >
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    marginTop: 30,
    width: 200,
    height: 60
  },
  banner: {
    width: 350,
    height: 350
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    width: '50%',
  },
  mainBtnBottom: {
    flexDirection: 'row',
    width: '100%'
  },
  btnRegister: {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 30,
    fontFamily: 'Prompt',
  },
  btnLogin: {
    backgroundColor: 'black',
    color: 'white',
    fontSize: 30,
    fontFamily: 'Prompt',
  },
  text: {
    fontFamily: 'Prompt',
    fontSize: 25,
    color: 'white',
    marginBottom: 10
  }
});