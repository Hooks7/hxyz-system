import request from '@/utils/request.js'

// 教学场地列表信息
export const siteList = () => {
  return request.get('/place/list')
}

// 添加/编辑场地
export const changeField = ({
  id,
  address,
  placeName
}) => {
  return request.post('/place/save', {
    id, address, place_name: placeName
  })
}

// 删除场地
export const delField = (id) => {
  return request.post('/place/del', {
    id
  })
}

// 添加/编辑教室
export const changeClassroom = ({
  id,
  placeId,
  roomName,
  remark
}) => {
  return request.post('/place/roomsave', {
    id,
    place_id: placeId,
    room_name: roomName,
    remark
  })
}

// 教室列表
export const classroomList = (id) => {
  return request.get('/place/roomlist', {
    params: {
      id
    }
  })
}

// 删除教室
export const delClassroom = (
  id
) => {
  return request.post('/room/del', {
    id
  })
}
