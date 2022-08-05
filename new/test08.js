// 객체_1
const family = {
    'address' : 'seoul',
    member : {},
    addFamily : function(age, name, role){
        this.member[role] = {
            age : age,
            name : name
        };
    },
    getHeadcount : function(){
        return Object.keys(this.member).length;
    }
};

family.addFamily(30, 'chloe', 'aunt');
family.addFamily(30, 'lyn', 'niece');
family.addFamily(30, 'dangdangi', 'dog');
console.log(family.getHeadcount());