import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const DonThuNo = () => {
    return (
        <View>
            <View>
                <Text
                    style={{
                        textAlign: 'center',
                        fontSize: 20,
                        color: 'blue',
                        padding: 8,
                        fontWeight: 'bold',
                    }}
                >
                    Thông tin đơn hàng
                </Text>
            </View>
            <View
                style={{
                    padding: 12,
                    margin: 16,
                    backgroundColor: '#ccc',
                    borderRadius: 16,
                    shadowColor: '#000',
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,

                    elevation: 3,
                }}
            >
                <Text
                    style={{
                        paddingVertical: 8,
                        fontSize: 24,
                    }}
                >
                    1.Tên
                </Text>
                <Text
                    style={{
                        paddingVertical: 8,
                        fontSize: 24,
                    }}
                >
                    2.Địa chỉ
                </Text>
                <Text
                    style={{
                        paddingVertical: 8,
                        fontSize: 24,
                    }}
                >
                    3.Hóa đơn thay đổi: tên hàng, số lượng, đơn giá, thành tiền
                </Text>
                <Text
                    style={{
                        paddingVertical: 8,
                        fontSize: 24,
                    }}
                >
                    4.Ngày nợ
                </Text>
                <Text
                    style={{
                        paddingVertical: 8,
                        fontSize: 24,
                    }}
                >
                    5.Tổng tiền nợ
                </Text>
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                }}
            >
                <TouchableOpacity
                    style={{
                        paddingVertical: 12,
                        paddingHorizontal: 28,
                        backgroundColor: '#a12237',
                        margin: 8,
                        borderRadius: 8,
                    }}
                >
                    <Text
                        style={{
                            color: '#fff',
                            fontSize: 16,
                            fontWeight: 'bold',
                        }}
                    >
                        Chưa thu được
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        paddingVertical: 12,
                        paddingHorizontal: 28,
                        backgroundColor: 'green',
                        margin: 8,
                        borderRadius: 8,
                    }}
                >
                    <Text
                        style={{
                            color: '#fff',
                            fontSize: 16,
                            fontWeight: 'bold',
                        }}
                    >
                        Thanh toán nợ
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default DonThuNo
