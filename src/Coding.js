import { StyleSheet, FlatList, View, Text, Image, Pressable, Modal, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import YouTubePlayer from 'react-native-youtube-iframe';
const Coding = () => {
    const [vids, setVids] = useState([]);
    const [liveModal, setLiveModal] = useState(false);
    useEffect(() => {
        const fetchVideoIds = async () => {
          const videoIdsArray = [
            'cxm9AHNDMPI',
            'fO9HN3nvDLI',
              '14BL_FwQCpM',
              'lI1ae4REbFM',
              '8uiZC0l4Ajw',
              'RQzuQb0dfBM',
              'DNPjBvZxE3E',
              '1srFmjt1Ib0',
              'v5iUam6vBJo',
              'iG2jotQo9NI',
              'xT4coNjByXQ',
              'CwA1VWP0Ldw',
              'pXnc7A2O0CI',
              'OIenNRt2bjg',
              '0QUgvfuKvWU',
              'YT8s-90oDC0',
              'ygL_xcavzQ4',
              'b9eMGE7QtTk',
              '2vWizOroRfc',
              '1MuMf83gtiY',
              'nLRL_NcnK-4',
              'VRf8cyeuxoo',
              '2kBxawHJfNg',
              'f2EqECiTBL8', 
              'GQp1zzTwrIg',
              '-flFjzBVBFs',
              'IC5vBKc21X8',
              '3MUs-Aaakdg',
              't8pPdKYpowI',
              'xk4_1vDrzzo',
              '2lPOiH2Nn5M',
              'z0bxK2xKXFw',
              'xh4gy1lbL2k',
              'wI-hfFW9hfI',
              'IvzMn4cNaUg',
          ];
          setVids(videoIdsArray);
        };
        fetchVideoIds();
    }, []);
    return (
        <View style={styles.centerView}>
            <Modal 
                animationType='slide'
                transparent={true}
                visible={liveModal}
                onRequestClose={() => {
                    Alert.alert('Modal closed');
                    setLiveModal(!liveModal);
                }}>
                    <View style={styles.centerView}>
                        <View style={styles.modalView}>
                            <ScrollView>
                                {vids.map((videoId, index) => (
                                    <YouTubePlayer key={index} width={400} height={400} play={false} videoId={videoId} />
                         ))}
                        </ScrollView>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setLiveModal(!liveModal)}>
                                    <Text style={styles.closeStyle}>Close Modal</Text>
                                </Pressable>
                        </View>
                    </View>
                </Modal>
                <Pressable style={styles.button} onPress={() => setLiveModal(true)}>
                    <Text style={styles.textStyle}>Code Tutorials</Text>
                </Pressable>
        </View>
    )
};
const styles = StyleSheet.create({
    centerView:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22
    },
    modalView: {
        margin: 10, 
        backgroundColor: 'black',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 10,
            height:10
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation:5
    },
    button: {
        borderRadius: 20,
        padding:10,
        elevation: 2,
    },
    buttonClose: {
        backgroundColor: '2196F3'
    },
    buttonOpen: {
        backgroundColor: 'F194FF'
    },
    textStyle: {
        color:'black',
        fontWeight: 'bold',
        textAlign: 'center',
        marginStart: 20,
        left: 0,
    },
    closeStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        marginStart: 20,
        left: 0,
    },
    modalText: {
        marginBottom: 33,
        fontSize:8.5,
        textAlign:'center',
        color: 'white',
    },
});


export default Coding;