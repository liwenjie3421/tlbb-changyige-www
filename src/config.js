export default {
  conditions: {
    profession: {
      label: '门派'
    },
    level: {
      label: '等级'
    },
    xiulian: {
      label: '修炼'
    },
    sex: {
      label: '性别'
    },
    xinfa: {
      label: '心法'
    },
    equipscore: {
      label: '装备评分',
      rangeInput: true
    },
    price: {
      label: '价格',
      rangeInput: true
    }
  },
  professionList: ['少林', '明教', '丐帮', '武当', '峨嵋', '星宿', '天龙', '天山', '逍遥', '慕容', '唐门', '鬼谷'],
  levelList: (() => {
    let arr = [];
    for (let i = 80; i <= 119; i++) {
      arr.push(i);
    }
    return arr;
  })(),
  sexList: ['男', '女'],
  xiulianList: ['0-3000', '3001-7000', '7001-10000', '10001以上'],
  xinfaList: ['0-1000', '1001-2000', '2001-3000', '3001-4000', '4001以上']
};
