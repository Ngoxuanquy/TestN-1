import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native'
import { TextInput } from 'react-native'

const DonHoanThanh = () => {
    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={{ alignItems: 'center' }}>
                <View
                    style={{
                        width: '80%',
                        height: 100,
                        backgroundColor: '#ccc',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 20,
                        borderRadius: 8,
                    }}
                >
                    <Text>ảnh</Text>
                </View>
                <TouchableOpacity
                    style={{
                        backgroundColor: '#ccc',
                        paddingHorizontal: 20,
                        paddingVertical: 12,
                        marginTop: 12,
                        borderRadius: 8,
                    }}
                >
                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Tải ảnh lên</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text
                    style={{
                        marginLeft: 32,
                        paddingVertical: 8,
                        fontSize: 24,
                        fontWeight: 'bold',
                        color: 'blue',
                    }}
                >
                    Bình luận
                </Text>
                <View style={{ marginTop: 20 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View
                            style={{
                                width: 64,
                                height: 64,
                                backgroundColor: '#ccc',
                                borderRadius: 100,
                            }}
                        />
                        <TextInput
                            placeholder="Hãy nhập bình luận"
                            style={{
                                width: '80%',
                                height: 40,
                                margin: 12,
                                borderBottomWidth: 1,
                                padding: 10,
                            }}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <TouchableOpacity
                            style={{
                                paddingHorizontal: 20,
                                paddingVertical: 12,
                                backgroundColor: 'blue',
                                marginRight: 20,
                                borderRadius: 12,
                            }}
                        >
                            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>
                                Bình luận
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 8 }}>
                    <View
                        style={{
                            width: 48,
                            height: 48,
                            backgroundColor: '#ccc',
                            borderRadius: 100,
                            margin: 8,
                        }}
                    />
                    <View>
                        <Text>NVKT: abc</Text>
                        <Text>12/01, lúc 19:00</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 8 }}>
                    <View
                        style={{
                            width: 48,
                            height: 48,
                            backgroundColor: '#ccc',
                            borderRadius: 100,
                            margin: 8,
                        }}
                    />
                    <View>
                        <Text>NVKT: abc</Text>
                        <Text>12/01, lúc 19:00</Text>
                    </View>
                </View>
            </View>
            <View style={{ alignItems: 'center', marginTop: 32 }}>
                <TouchableOpacity
                    style={{
                        width: '80%',
                        paddingVertical: 16,
                        backgroundColor: '#999',
                        borderRadius: 4,
                        marginVertical: 12,
                    }}
                >
                    <Text style={{ fontWeight: 'bold', fontSize: 16, textAlign: 'center' }}>
                        Sửa thanh toán
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        width: '80%',
                        paddingVertical: 16,
                        backgroundColor: '#999',
                        borderRadius: 4,
                        marginVertical: 12,
                    }}
                >
                    <Text style={{ fontWeight: 'bold', fontSize: 16, textAlign: 'center' }}>
                        Xem thông tin đơn
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        width: '80%',
                        paddingVertical: 16,
                        backgroundColor: '#999',
                        borderRadius: 4,
                        marginVertical: 12,
                    }}
                >
                    <Text style={{ fontWeight: 'bold', fontSize: 16, textAlign: 'center' }}>
                        Hóa đơn bán hàng điện tử
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default DonHoanThanh
