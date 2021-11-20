function initListeners() {
    $("#submit").click(function (e) {
        e.preventDefault();
        let firstName = $("#fName").val();
        let mName = $("#mName").val();
        let lastName = $("#lName").val();
        let email = $("#email").val();
        let AC = $("#AC").val();
        let AD = $("#AD").val();
        let SS = $("#SS").val();
        let PN = $("#PN").val();
        let Age = $("#Age").val();
        let GR = $("#GR").val();
        let US = $("#US").val();
        let PW = $("#PW").val();
        let fNam = $("#fNam").val();
        let lNam = $("#lastNam").val();
        let emaill = $("#emaill").val();
        let PWW = $("#PWW").val();
      
        
        
        console.log("inputs" + firstName + "" + mName + "" + lastName + "" + email + "" + AC + "" + AD + "" + SS + "" + PN + "" + Age + "" + GR + "" + US + "" + PW + "" + fNam + "" + lNam + "" + emaill + "" + PWW + ""  );
    });

    $("#edit").click(function (e) {
        e.preventDefault();

        let userObj = {
            fName: "Hassan",
            mName: "Khalid",
            lName: "Parker",
            email: "Magaparker@gmail.com",
            AC: "29384028",
            AD: "837 N.Drive",
            SS: "733-38-3874",
            PN: "383-383-9379",
            Age: "32",
            GR: "M",
            US: "hasparke",
            PW: "password",
            fNam: "Todd",
            lNam: "Shelton",
            emaill: "t2@gmail.com",
            PWW: "opps"
        };

        console.log(userObj);
        $("#fName").val(userObj.fName);
        $("#mName").val(userObj.mName);
        $("#lName").val(userObj.lName);
        $("#email").val(userObj.email);
        $("#AC").val(userObj.AC);
        $("#AD").val(userObj.AD);
        $("#SS").val(userObj.SS);
        $("#PN").val(userObj.PN);
        $("#Age").val(userObj.Age);
        $("#GR").val(userObj.GR);
        $("#US").val(userObj.US);
        $("#PW").val(userObj.PW);
        $("#fNam").val(userObj.fNam);
        $("#lNam").val(userObj.fNam);
        $("#emaill").val(userObj.fNam);
        $("#PW").val(userObj.PWW);
     
        // console.log("inputs" + firstName + "" +lastName);
    });
}

$(document).ready(function () {
    initListeners();
});