import {
  Linking,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// images
import logo1 from '../../../assets/logo/logo1.png'
import banner from '../../../assets/banner/banner1.png'
import icon1 from '../../../assets/icons/home.png'
import icon2 from '../../../assets/icons/gift.png'
import icon3 from '../../../assets/icons/login.png'
import icon4 from '../../../assets/icons/game.png'
import icon5 from '../../../assets/icons/contact.png'
import navbar from '../../../assets/navbar.png'
import circle from '../../../assets/circle.png'

export default function HomeV2() {
  const register = () => {
    Linking.openURL('https://win8s.electrikora.com/?action=register');
  };
  const login = () => {
    Linking.openURL('https://win8s.electrikora.com');
  };
  const home = () => {
    Linking.openURL('https://win8s.net/');
  };
  const promotion = () => {
    Linking.openURL('https://win8s.net/promotions/');
  };
  const game = () => {
    Linking.openURL('https://win8s.net/demogame/');
  };
  const contact = () => {
    Linking.openURL('https://line.me/R/ti/p/@win8s');
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
          <LinearGradient
            style={
              [
                styles.btn,
                {
                  borderRadius: 10,
                  paddingHorizontal: 20,
                  boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px',
                }
              ]
            }
            colors={['rgb(242, 80, 19)', 'rgb(216, 28, 36)', 'rgb(128, 0, 0)']}>
            <TouchableOpacity
              style={[styles.btnRegister]}
              onPress={register}
            >
              <Text style={styles.btnRegister}>สมัครสมาชิก</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
        <View style={{ position: 'relative', width: '100%' }}>
          <Image
            source={navbar}
            style={styles.bgNavberBottom}
          />
          <Image
            source={circle}
            style={styles.circle}
          />
          <View style={styles.mainBtnBottom}>
            <TouchableOpacity
              style={[styles.btnBottom]}
              onPress={home}
            >
              <Image
                source={icon1}
                style={[styles.iconNavBottom,
                {
                  width: 42,
                  height: 42
                }]}
              />
              <Text style={styles.textBtnBottom}>หน้าหลัก</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.btnBottom]}
              onPress={promotion}
            >
              <Image
                source={icon2}
                style={[styles.iconNavBottom,
                {
                  width: 50,
                  height: 50
                }]}
              />
              <Text style={styles.textBtnBottom}>โปรโมชัน</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.btnBottom]}
              onPress={login}
            >
              <Image
                source={icon3}
                style={[styles.iconNavBottom,
                {
                  width: 60,
                  height: 50
                }]}
              />
              <Text style={styles.textBtnBottom}>เข้าสู่ระบบ</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.btnBottom]}
              onPress={game}
            >
              <Image
                source={icon4}
                style={[styles.iconNavBottom,
                {
                  width: 50,
                  height: 50
                }]}
              />
              <Text style={styles.textBtnBottom}>เกม</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.btn]}
              onPress={contact}
            >
              <Image
                source={icon5}
                style={[styles.iconNavBottom,
                {
                  width: 50,
                  height: 50
                }]}
              />
              <Text style={styles.textBtnBottom}>ติดต่อเรา</Text>
            </TouchableOpacity>
          </View>
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
    width: 'auto',
  },
  btnBottom: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    width: '20%',
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
    width: 'auto'
  },
  textBtnBottom: {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 12,
    fontFamily: 'Prompt',
    width: 'auto'
  },
  text: {
    fontFamily: 'Prompt',
    fontSize: 25,
    color: 'white',
    marginBottom: 10
  },
  bgNavberBottom: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: 100,
  },
  circle: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)'
  }
});