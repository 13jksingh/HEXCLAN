// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract EHR {
    address public owner;

    constructor (){
        owner = msg.sender;
        DoctorCount = 0;
        PatientCount =0 ;
    }

    function isOwner() public view returns(bool) {
        return (msg.sender == owner);
    }

    struct doctor {
        uint id;
        address publicKey;
        string name;
        uint age;
        address[] pAccess; // Patient access
    }

    struct record {
        string symptoms;
        string remarks;
        string[] medicines;
        string[] examination;
        bool Access;
    }

    struct patient {
        uint _id;
        string name;
        uint age;
        record[] recordList;
        address[] dAccess;
    }

    doctor[] public listDoctor;
    patient[] public listPatient;

    mapping (address => doctor) public mapDoctor;
    mapping (address => patient) public mapPatient;
    uint DoctorCount;
    uint PatientCount;


    function addDoctor(string memory _name , uint _age , address _publicKey) public {
        doctor storage newDoctor = mapDoctor[msg.sender];
        newDoctor.name = _name ;
        newDoctor.age = _age;
        newDoctor.id = DoctorCount;
        newDoctor.publicKey = _publicKey;
        listDoctor.push(newDoctor);
        DoctorCount = DoctorCount +1;
    }
    
    function AccessList() public view returns(address[] memory){
        return mapPatient[msg.sender].dAccess;
    }

    function addPatient(string memory _name , uint _age) public {
        patient storage newPatient = mapPatient[msg.sender];
        newPatient.name = _name;
        newPatient.age = _age;
        newPatient._id = PatientCount;
        listPatient.push(newPatient);
    }

    function revoke(address _doctor) public {
        bool found = false;
        for (uint i = 0 ; i < mapPatient[msg.sender].dAccess.length-1 ; i++){
            if (mapPatient[msg.sender].dAccess[i] == _doctor){
                found = true;
            }
            if (found){
                mapPatient[msg.sender].dAccess[i] = mapPatient[msg.sender].dAccess[i+1];
            }
        }
        if (found || mapPatient[msg.sender].dAccess[mapPatient[msg.sender].dAccess.length-1] == _doctor ){
            mapPatient[msg.sender].dAccess.pop();
        }
        found = false;
        for (uint i = 0 ; i < mapDoctor[_doctor].pAccess.length-1 ; i++){
            if (mapDoctor[_doctor].pAccess[i] == msg.sender){
                found = true;
            }
            if (found){
                mapDoctor[_doctor].pAccess[i] = mapDoctor[_doctor].pAccess[i+1];
            }
        }
        if (found || mapDoctor[_doctor].pAccess[mapDoctor[_doctor].pAccess.length-1] == msg.sender ){
       mapDoctor[_doctor].pAccess.pop();
        }
    }

    function giveAccess(address _doctor) public returns( patient memory) {
        mapPatient[msg.sender].dAccess.push(_doctor);
        mapDoctor[_doctor].pAccess.push(msg.sender);
        return (mapPatient[msg.sender]);
    }
}