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

    mapping (address => doctor) public mapDoctor;
    mapping (address => patient) public mapPatient;
    uint DoctorCount;
    uint PatientCount;

    function readCount() public view returns(uint){
        return listDoctor.length;
    }

    function addDoctor(string memory _name , uint _age , address _publicKey) public {
        doctor storage newDoctor = mapDoctor[msg.sender];
        newDoctor.name = _name ;
        newDoctor.age = _age;
        newDoctor.id = DoctorCount;
        newDoctor.publicKey = _publicKey;
        listDoctor.push(newDoctor);
        DoctorCount = DoctorCount +1;
    }
    
    function addPatient(string memory _name , uint _age) public {
        patient storage newPatient = mapPatient[msg.sender];
        newPatient.name = _name;
        newPatient.age = _age;
        newPatient._id = PatientCount;
    }

    function giveAccess(address _doctor) public returns( patient memory) {
        mapPatient[msg.sender].dAccess.push(_doctor);
        mapDoctor[_doctor].pAccess.push(msg.sender);
        return (mapPatient[msg.sender]);
    }
}