import { StyleSheet, Text, Image, View, Pressable, ScrollView } from 'react-native';
import { useState } from "react";
import { Modal, Linking } from 'react-native';
const Tools = () => {
    const [liveModal, setLiveModal] = useState(false);
    return(
        <View style={styles.centerView}>
            <Modal
                animationType='slide'
                transparent={true}
                visible={liveModal}
                onRequestClose={() => {
                    Alert.alert('Modal closed');
                    setLiveModal(!liveModal);
                }}>
                    <ScrollView>
                <View style={styles.centerView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText} onPress={() => Linking.openURL('https://www.canva.com/')}>
                        1.Canva
                        </Text>
                        <Text style={styles.modalText} onPress={() => Linking.openURL('https://www.gimp.org/')}>
                        2. Gimp
                        </Text>
                        <Text style={styles.modalText} onPress={() => Linking.openURL('https://www.figma.com/')}>
                        3. Figma
                        </Text>
                        <Text style={styles.modalText} onPress={() => Linking.openURL('https://www.adobe.com/express/')}>
                        4. Adobe Express
                        </Text>
                        <Text style={styles.modalText} onPress={() => Linking.openURL('https://desygner.com/')}>
                        5. Desygner
                        </Text>
                        <Text style={styles.modalText} onPress={() => Linking.openURL('https://www.picmonkey.com/')}>
                        6. PicMonkey
                        </Text>
                        <Text style={styles.modalText} onPress={() => Linking.openURL('https://krita.org/en/')}>
                        7. Krita
                        </Text>
                        <Text style={styles.modalText} onPress={() => Linking.openURL('https://genial.ly/')}>
                        8. Genially
                        </Text>
                        <Text style={styles.modalText} onPress={() => Linking.openURL('https://answersocrates.com/')}>
                        9. Answer Socrates
                        </Text>
                        <Text style={styles.modalText} onPress={() => Linking.openURL('https://answersocrates.com/')}>
                        10. AnswerThePublic
                        </Text>
                        <Text style={styles.modalText} onPress={() => Linking.openURL('https://ahrefs.com/keyword-generator')}>
                        11. Ahrefs
                        </Text>
                        <Text style={styles.modalText} onPress={() => Linking.openURL('https://www.portent.com/tools/title-maker/')}>
                        12. Portent
                        </Text>
                        <Text style={styles.modalText} onPress={() => Linking.openURL('https://deapmarket.com/')}>
                        13. Deap Market
                        </Text>
                        <Text style={styles.modalText} onPress={() => Linking.openURL('https://www.marketingminer.com/en')}>
                        14. Marketing Miner
                        </Text>
                        <Text style={styles.modalText} onPress={() => Linking.openURL('https://www.notjustanalytics.com/')}>
                        15. Not Just Analytics
                        </Text>
                        <Text style={styles.modalText} onPress={() => Linking.openURL('https://app.tapinfluence.com/')}>
                        16. Tap Influence
                        </Text>
                        <Text style={styles.modalText} onPress={() => Linking.openURL('https://instrack.app/')}>
                        17.Instrack
                        </Text>
                        <Text style={styles.modalText} onPress={() => Linking.openURL('https://www.tailwindapp.com/')}>
                        18. Tailwind
                        </Text>
                        <Text style={styles.modalText} onPress={() => Linking.openURL('https://buffer.com/')}>
                        19. Buffer
                        </Text>
                        <Text style={styles.modalText} onPress={() => Linking.openURL('https://circleboom.com/')}>
                        20. Circleboom
                        </Text>
                        <Text style={styles.modalText} onPress={() => Linking.openURL('https://www.socialchamp.io/')}>
                        21. Social Champ
                        </Text>
                        <Text style={styles.modalText} onPress={() => Linking.openURL('https://unsplash.com/')}>
                        22. Unsplash
                        </Text>
                        <Text style={styles.modalText} onPress={() => Linking.openURL('https://www.gutenberg.org/')}>
                        23. Project Gutenberg
                        </Text>
                        <Text style={styles.modalText} onPress={() => Linking.openURL('https://www.cymath.com/')}>
                        24. Cymath
                        </Text>
                        <Text style={styles.modalText} onPress={() => Linking.openURL('https://www.pexels.com/')}>
                        25. Pexels
                        </Text>
                        <Text style={styles.modalText} onPress={() => Linking.openURL('https://www.mybib.com/')}>
                        26. MyBib
                        </Text>
                        <Text style={styles.modalText} onPress={() => Linking.openURL('https://oceanofpdf.com/')}>
                        27. OceanofPDF
                        </Text>
                        <Text style={styles.modalText} onPress={() => Linking.openURL('https://librestock.com/')}>
                        28. LibreStock
                        </Text>
                        <Text style={styles.modalText} onPress={() => Linking.openURL('https://mixkit.co/')}>
                        29. Mixkit
                        </Text>
                        <Text style={styles.modalText} onPress={() => Linking.openURL('https://mixkit.co/')}>
                        30.Motosha
                        </Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setLiveModal(!liveModal)}>
                                <Text style={styles.closeStyle}>Close Modal</Text>
                            </Pressable>
                    </View>
                    
                </View>
                </ScrollView>

                </Modal>
                <Pressable style={styles.button} onPress={() => setLiveModal(true)}>
                    <Text style={styles.textStyle}>Free Tools/Links</Text>
                </Pressable>
                
        </View>
    );
};
const styles = StyleSheet.create({
    centerView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 10,
        backgroundColor: 'black',
        borderRadius: 20,
        padding: 25,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
        closeStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        marginStart: 20,
        left: 0,
    },

    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonClose:{
        backgroundColor: '2196F3'
    },
    buttonOpen:{
        backgroundColor: 'F194FF'
    },
    textStyle: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        marginStart: 20,
        left: 0,
    },
    modalText: {
        marginBottom:0,
        fontSize:11,
        textAlign: 'center',
        color:'white',
    },

});
export default Tools;