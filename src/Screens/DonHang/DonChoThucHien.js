import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Button } from 'react-native'
import { TouchableOpacity } from 'react-native'

const DonChoThucHien = () => {
    return (
        <ScrollView>
            <Text style={{ textAlign: 'center', fontSize: 20, color: 'blue' }}>
                Thông tin đơn hàng
            </Text>
            <View
                style={{
                    marginHorizontal: 20,
                    borderWidth: 1,
                    padding: 12,
                    backgroundColor: '#ccc',
                    borderRadius: 16,
                    elevation: 18,
                }}
            >
                <Text style={{ fontSize: 18, paddingVertical: 8 }}>
                    0.Loại đơn hàng(Bảo hành, bảo hành lại, VSBDTL, lắp lại máy, lắp máy mới)
                </Text>
                <Text style={{ fontSize: 18, paddingVertical: 8 }}>1.Tên</Text>
                <View>
                    <Text style={{ fontSize: 18, paddingVertical: 8 }}>1.Địa chỉ</Text>
                    <Button title="Xem map" />
                </View>
                <Text style={{ fontSize: 18, paddingVertical: 8 }}>3.Giờ hẹn khách hàng</Text>
                <Text style={{ fontSize: 18, paddingVertical: 8 }}>4.Gói dịch vụ</Text>
                <Text style={{ fontSize: 18, paddingVertical: 8 }}>5.Loại máy</Text>
                <Text style={{ fontSize: 18, paddingVertical: 8 }}>
                    6.Khoảng cách(số km đơn hàng)
                </Text>
                <Text style={{ fontSize: 18, paddingVertical: 8 }}>
                    7.Thời gian di chuyển tương ứng
                </Text>
                <Text style={{ fontSize: 18, paddingVertical: 8 }}>8.Đồ cần mang(nếu có)</Text>
                <Text style={{ fontSize: 18, paddingVertical: 8 }}>9. Anh định kỳ cũ</Text>
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                }}
            >
                <TouchableOpacity
                    style={{
                        paddingVertical: 12,
                        paddingHorizontal: 36,
                        backgroundColor: '#a12237',
                        margin: 8,
                        borderRadius: 16,
                    }}
                >
                    <Text
                        style={{
                            color: '#fff',
                            fontSize: 16,
                            fontWeight: 'bold',
                        }}
                    >
                        Từ chối
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        paddingVertical: 12,
                        paddingHorizontal: 36,
                        backgroundColor: 'green',
                        margin: 8,
                        borderRadius: 16,
                    }}
                >
                    <Text
                        style={{
                            color: '#fff',
                            fontSize: 16,
                            fontWeight: 'bold',
                        }}
                    >
                        Nhận đơn
                    </Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text
                    style={{
                        fontSize: 20,
                        marginLeft: 20,
                    }}
                >
                    Bình luận
                </Text>
                <View
                    style={{
                        paddingHorizontal: 20,
                        marginVertical: 20,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}
                >
                    <Text>CSKH: 123</Text>
                    <Text>hôm nay, 19:00</Text>
                </View>
                <View
                    style={{
                        paddingHorizontal: 20,
                        marginVertical: 20,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}
                >
                    <Text>CSKH: 123</Text>
                    <Text>12/1, 19:00</Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default DonChoThucHien
