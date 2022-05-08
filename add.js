function add(x, y){
  if(Number(x) == x && Number(y) == y){
    return Number(x) + Number(y)
  }
  return x + y
}
console.log(3 === add(1, 2))

function expect(ret){
  return {
    toBe(arg){
      if(ret !== arg){
        throw Error(`预计和实际不符，预期时${arg}, 实际时${ret}`)
      }
    }
  }
}
function test(title, fn){
  try{
    fn()
    console.log(title, '测试通过')
  }catch(e){
    console.log(e)
    console.log(title, '测试失败')
  }
}

test('测试数字相加', () => {
  expect(add(1, '2')).toBe(3)
})