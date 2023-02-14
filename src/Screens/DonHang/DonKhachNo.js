import { View, Text } from 'react-native'
import React from 'react'

import { TouchableOpacity } from 'react-native-gesture-handler'

const DonKhachNo = () => {
    return (
        <View>
            <View>
                <Text
                    style={{
                        fontSize: 28,
                        color: 'blue',
                        padding: 8,
                        marginLeft: 20,
                    }}
                >
                    Hóa đơn
                </Text>
            </View>

            <View
                style={{
                    borderWidth: 1,
                    marginHorizontal: 32,
                    backgroundColor: '#ebd1d5',
                    elevation: 4,
                }}
            >
                <Text style={{ paddingVertical: 12, fontSize: 20, paddingLeft: 8, color: 'red' }}>
                    Số HĐ:
                </Text>
                <Text style={{ paddingVertical: 12, fontSize: 20, paddingLeft: 8, color: 'red' }}>
                    Tên:
                </Text>
                <Text style={{ paddingVertical: 12, fontSize: 20, paddingLeft: 8, color: 'red' }}>
                    Địa chỉ KH:
                </Text>
                <Text style={{ paddingVertical: 12, fontSize: 20, paddingLeft: 8, color: 'red' }}>
                    Lý do nợ:
                </Text>
                <Text style={{ paddingVertical: 12, fontSize: 20, paddingLeft: 8, color: 'red' }}>
                    Số tiền:
                </Text>
                <Text style={{ paddingVertical: 12, fontSize: 20, paddingLeft: 8, color: 'red' }}>
                    Ngày nợ:
                </Text>
            </View>

            <View
                style={{
                    flexDirection: 'row',
                    marginLeft: 20,
                }}
            >
                <TouchableOpacity
                    style={{
                        paddingVertical: 12,
                        paddingHorizontal: 28,
                        backgroundColor: '#2b59a2',
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
                        Thanh toán
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default DonKhachNo
