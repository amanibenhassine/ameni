(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!--<app-navbar></app-navbar>\n<app-sidebar></app-sidebar>\n<section class=\"content\" style=\"margin-left:20%; \">\n    <div id=\"main-container\">\n      <router-outlet></router-outlet>\n    </div>\n</section>-->\n\n<router-outlet></router-outlet>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/board-admin/board-admin.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/board-admin/board-admin.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <header class=\"jumbotron\">\n    <p>{{ content }}</p>\n  </header>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/board-moderator/board-moderator.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/board-moderator/board-moderator.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <header class=\"jumbotron\">\n    <p>{{ content }}</p>\n  </header>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/board-user/board-user.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/board-user/board-user.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <header class=\"jumbotron\">\n    <p>{{ content }}</p>\n  </header>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/admin-components/add-employe/add-employe.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/admin-components/add-employe/add-employe.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card-title style=\" padding:1em;\">Add Recruiters :</mat-card-title>\n\n\n<body>\n  <div>\n    <mat-form-field style=\"width:500px;\">\n      <mat-label>Name:</mat-label>\n      <input matInput  [(ngModel)] = \"RecruiterName\">\n    </mat-form-field>\n    <br>\n    <mat-form-field style=\"width:500px;\">\n      <mat-label>Poste:</mat-label>\n      <input matInput  [(ngModel)] = \"RecruiterPoste\">\n    </mat-form-field>\n    <br>\n    <mat-form-field style=\"width:500px;\">\n      <mat-label>Email:</mat-label>\n      <input matInput  [(ngModel)] = \"RecruiterEmail\">\n    </mat-form-field>\n   \n    <br>\n      \n    <mat-form-field style=\"width:500px;\">\n      <mat-label>Phone:</mat-label>\n      <input matInput  [(ngModel)] = \"RecruiterPhone\">\n    </mat-form-field>\n      \n    \n    <br>\n    <div style=\"display:inline\">\n      <div  *ngIf = \"posted\">\n        <button mat-raised-button color=\"warn\" style=\"display:inline-block; margin-top: 2em\" (click)=\"submit()\">Submit</button>\n      </div>\n      <div *ngIf = \"!posted\" >\n        <button mat-raised-button color=\"warn\" style=\"margin-left: 2em; display:inline-block; margin-top: 2em\" (click)=\"postAnother()\">Post Another Recruiter</button>\n      </div>\n    </div>\n  </div>\n\n \n</body>\n\n         "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/admin-components/hr-form/hr-form.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/admin-components/hr-form/hr-form.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<nav class=\"navbar  navbar-expand bg-dark\">\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li style=\"margin-right: 20px; margin-left: 30px;\">\n        <button type=\"button\" class=\"btn btn-primary\" routerLink=\"view-posting\">Home</button>\n      </li>\n    </ul>\n    \n    <div style=\"align-content:end;\">\n      <button type=\"button\" class=\"btn btn-primary\" style=\"margin-right:10px\"routerLink=\"/hr-profile\">Profile</button>\n      <button type=\"button\" class=\"btn\" style=\"background-color:#f7ae00\" routerLink=\"/\">Sign Out</button>\n    </div>\n\n  </div>\n</nav>-->\n\n    <span>\n      <h1>Edit Profile</h1>\n    </span>\n   \n \n\n<body>\n  <div>\n    <img src=\"{{pic}}\" alt=\"Card image\" class=\"pro_photo\" style=\"height:100px; width: 100px; outline: 1px\">\n    <br><br>\n      <div style=\"display:inline;\">\n      <input type=\"file\" style=\"display: none\" (change)=\"selectFile($event)\" #fileInput>\n      <button class=\"fa fa-file-image-o\"style=\"display:inline-block\" type=\"button\" (click)=\"fileInput.click()\"> Pick image </button>\n      <span style=\"margin-left: 2em\"></span>\n      <button class=\"fa fa-upload\" style=\"display:inline-block\" type=\"button\" (click)=\"uploadBotton()\"> Upload </button>\n      </div>\n    </div>\n</body>\n\n      <mat-card style=\"margin-top: 2em\">\n        <mat-label>Personal Information</mat-label>\n        <table class=\"example-full-width\" cellspacing=\"2\">\n          <tr>\n            <td>\n              <mat-form-field class=\"example-full-width\">\n                <mat-label>First name</mat-label>\n                <input matInput [(ngModel)] = \"firstName\" [ngModelOptions]=\"{standalone: true}\" >\n              </mat-form-field>\n            </td>\n            <td>\n              <mat-form-field class=\"example-full-width\">\n                <mat-label>Last Name</mat-label>\n                <input matInput  [(ngModel)] = \"lastName\" [ngModelOptions]=\"{standalone: true}\">\n              </mat-form-field>\n            </td>\n          </tr>\n         </table>\n\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Telephone</mat-label>\n          <span matPrefix>+1 &nbsp;</span>\n          <input type=\"tel\" matInput placeholder=\"555-555-1234\" [(ngModel)] = \"phone\" [ngModelOptions]= \"{standalone: true}\" >\n        </mat-form-field>\n\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Title at Work</mat-label>\n          <input matInput placeholder=\"Software Engineer\" [(ngModel)] = \"title\" [ngModelOptions]=\"{standalone: true}\" >\n        </mat-form-field>\n\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Company</mat-label>\n          <input matInput placeholder=\"Apple\" [(ngModel)] = \"company\" [ngModelOptions]=\"{standalone: true}\" >\n        </mat-form-field>\n\n        <!-- <mat-form-field class=\"example-full-width\">\n          <mat-label>Since</mat-label>\n          <input matInput placeholder=\"May 2016 \" [(ngModel)]=\"startDate\">\n        </mat-form-field> -->\n        <mat-form-field>\n          <mat-label>Start At:</mat-label>\n          <input matInput [matDatepicker]=\"picker1\" [(ngModel)]=\"startDate\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n          <mat-datepicker #picker1></mat-datepicker>\n        </mat-form-field>\n\n      <mat-card style=\"margin-top: 2em; height: 300px\">\n        <mat-label>Note</mat-label>\n        <p>\n          <mat-form-field class=\"example-full-width\" >\n            <mat-label>Put your notes here:</mat-label>\n            <textarea matInput [(ngModel)] = \"note\"></textarea>\n          </mat-form-field>\n        </p>\n      </mat-card>\n\n      <mat-card style=\"margin-top: 2em; height: 150px;\">\n        <mat-label>Contacts</mat-label>\n        <p>\n          <mat-form-field class=\"example-full-width\">\n            <mat-label>Add you contacts here:</mat-label>\n            <textarea matInput [(ngModel)] = \"contacts\" [ngModelOptions]=\"{standalone: true}\"> </textarea>\n          </mat-form-field>\n        </p>\n    </mat-card>\n\n  <button mat-raised-button color=\"warn\" style=\"margin-top: 2em\" (click) = \"SaveUpdate()\"> Save</button>\n  \n\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/admin-components/hr-form/hrprofile-popup/hrprofile-popup.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/admin-components/hr-form/hrprofile-popup/hrprofile-popup.component.html ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<p>Saved!</p>\n\n<div>\n    <button mat-raised-button style=\"margin-top:2dm\" (click)=\"onNoClick()\">Close</button>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/admin-components/hr-profile/hr-profile.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/admin-components/hr-profile/hr-profile.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<nav class=\"navbar  navbar-expand bg-dark\">\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li style=\"margin-right: 20px; margin-left: 30px; color:white; font-size: 150%\">HR Profile</li>\n    </ul>\n    <div style=\"align-content:end;\">\n      <button type=\"button\" class=\"btn btn-primary\" style=\"margin-right:10px\" routerLink=\"/view-posting\">Homepage</button>\n      <button type=\"button\" class=\"btn btn-primary\" style=\"margin-right:10px\"routerLink=\"/hr-form\">Edit Profile</button>\n      <button type=\"button\"  class=\"btn\" style=\"background-color:#f7ae00\" routerLink=\"/\"> Sign Out</button>\n    </div>\n\n  </div>\n</nav>-->\n\n<div class=\"eaton mat-typography\" style=\"overflow-x:hidden;\" fxFlexFill cdkScrollable>\n  <mat-toolbar color=\"primary\" class=\"main-header mat-elevation-z4\" [class.hidden]=\"toggleSearch\">\n    <span>\n      <h1>My Profile</h1>\n    </span>\n    <span class=\"example-spacer\"></span>\n    <div style=\"position: absolute; right: 0;\">\n      <button mat-button routerLink=\"/view-posting\"> View Posting </button>\n      <button mat-button routerLink=\"/hr-form\">Edit Profile</button>\n      <button mat-button routerLink=\"/view-applicants\">Received Applications</button>\n      <button mat-button routerLink=\"/\"> Sign out </button>\n    </div>\n  </mat-toolbar>\n</div>\n\n\n<!-- general info starts -->\n\n<body>\n\n  <div >\n\n  <div>\n    <img src=\"{{pic}}\" alt=\"Card image\" class=\"pro_photo\" style=\"height:100px; width: 100px; outline: 1px\">\n  </div>\n\n  <br>\n\n\n    <div class=\"card border-primary mb-3\" style=\"margin-top:20px\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\"><b>About Me: {{firstName}}</b>\n          <span style=\"margin-left: 5px\"></span>\n          <b>{{lastName}}</b></h4>\n\n        <h5>Working at {{company}} </h5>\n        <!-- <p>Start At: {{starDate}}</p> -->\n        <p>Since: {{startDate}}</p>\n        <p>As a: {{title}}</p>\n        <p>phone #: {{phone}}</p>\n      </div>\n    </div>\n\n    <div class=\"card border-primary mb-3\" style=\"margin-top:20px\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\"><b>Notes</b></h4>\n        <p> {{note}} </p>\n      </div>\n    </div>\n\n    <div class=\"card border-primary mb-3\" style=\"margin-top:20px\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\"><b>Contacts</b></h4>\n        <p> {{contacts}}</p>\n      </div>\n    </div>\n\n  </div>\n\n  </body>\n\n<nav class=\"navbar bottom navbar-dark bg-dark\">\n  <p class=\"navbar-text text-center\">Best place to find the best employee...</p>\n</nav>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/admin-components/list-employes/list-employes.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/admin-components/list-employes/list-employes.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card-title style=\" padding:1em;\">List of Recruiters :</mat-card-title>\n\n<div style=\"padding: 16px;\">\n    <div fxLayout=\"row wrap\" fxLayoutGap=\"16px grid\">\n        <div fxFlex=\"25%\" *ngFor=\"let emp of   appResult \">\n    <mat-card style=\"background-color:antiquewhite;\">\n        <mat-card-header>\n            <mat-card-title>{{emp.name}}</mat-card-title>\n            <mat-card-subtitle>{{emp.poste}}</mat-card-subtitle>\n                <img src=\"../../assets/img/homme.png\"\n                 mat-card-avatar>\n         </mat-card-header>   \n            <mat-card-content>\n               <p> <mat-icon style=\"font-size: 18px;\"> email</mat-icon>{{emp.email}}</p>\n               <p><mat-icon  style=\"font-size: 18px;\"> call</mat-icon>{{emp.phone}}</p>\n            </mat-card-content>\n            <mat-card-actions  style=\"text-align: end;\">\n                <button mat-icon-button  color=\"primary\" >\n                        <mat-icon color=\"warn\" style=\"cursor: pointer;\" (click)=\"update(emp)\">create</mat-icon>\n                     </button>  \n                <button mat-icon-button  color=\"primary\">\n                    <mat-icon color=\"warn\" style=\"cursor: pointer; \" (click)=\"delete(emp)\" >delete</mat-icon>\n                 </button>            \n                    \n            </mat-card-actions>\n        \n    </mat-card>\n</div>\n</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/admin-components/list-employes/update-popup/update-popup.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/admin-components/list-employes/update-popup/update-popup.component.html ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Recruiter Info</h1>\n\n<div mat-dialog-content>\n    <mat-form-field>\n        <mat-label>Name:</mat-label>\n        <input matInput [(ngModel)]=\"data.name\">\n    </mat-form-field>\n    <br>\n    <mat-form-field>\n        <mat-label>Poste:</mat-label>\n        <input matInput [(ngModel)]=\"data.poste\">\n    </mat-form-field>\n    <mat-form-field>\n        <mat-label>Email:</mat-label>\n        <input matInput [(ngModel)]=\"data.email\">\n    </mat-form-field>\n    <br>\n    <mat-form-field>\n        <mat-label>Phone :</mat-label>\n        <input matInput [(ngModel)]=\"data.phone\">\n    </mat-form-field>\n   \n</div>\n\n\n<div mat-dialog-actions>\n    <button mat-button (click)=\"onNoClick()\">No Thanks</button>\n    <button mat-button [mat-dialog-close]=\"data\" cdkFocusInitial>Save</button>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/admin-components/post-job/post-job.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/admin-components/post-job/post-job.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-card-title style=\" padding:1em;\">Post Job :</mat-card-title>\n\n<body>\n  <div>\n    <mat-form-field style=\"width:500px;\">\n      <mat-label>Job Title</mat-label>\n      <input matInput  [(ngModel)] = \"jobTitle\">\n    </mat-form-field>\n    <br>\n    <mat-form-field style=\"width:500px;\">\n      <mat-label>Recruiter</mat-label>\n      <input matInput  [(ngModel)] = \"name\">\n    </mat-form-field>\n    <br>\n    <div style=\"display:inline;\">\n      <div style=\"display:inline-block\">\n      <mat-form-field style=\"width: 270px\">\n        <input matInput placeholder=\"Company\" aria-label=\"company\" [matAutocomplete]=\"auto\" [(ngModel)]=\"companyName\">\n        <mat-autocomplete #auto=\"matAutocomplete\">\n          <mat-option *ngFor=\"let company of filteredCompany | async\" [value]=\"company.name\">\n            <img class=\"example-option-img\" aria-hidden [src]=\"company.flag\" height=\"25\">\n            <span style=\"margin-right: 10px\"></span>\n            <span>{{company.name}}</span>\n          </mat-option>\n        </mat-autocomplete>\n      </mat-form-field>\n    </div>\n    <span style=\"margin-left: 2em\"></span>\n    <div style=\"display:inline-block\">\n      <mat-form-field style=\"width: 200px\">\n        <mat-label>Location</mat-label>\n        <mat-select [(ngModel)]=\"location\" [ngModelOptions]=\"{standalone: true}\">\n          <mat-option *ngFor=\"let location of locations\" [value]=\"location.value\">\n            {{location.viewValue}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n      </div>\n    </div>\n    <br>\n        <div style=\"display:inline\">\n\n            <mat-form-field style=\"display:inline-block; width: 235px\">\n              <mat-label>Job Type</mat-label>\n              <mat-select [(ngModel)]=\"jobType\" [ngModelOptions]=\"{standalone: true}\">\n                <mat-option *ngFor=\"let jobtype of jobtypes\" [value]=\"jobtype.value\">\n                  {{jobtype.viewValue}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n\n        <span style=\"margin-left: 2em\"></span>\n         \n\n            <mat-form-field style=\"display:inline-block; width: 235px\">\n              <mat-label>Industry</mat-label>\n              <mat-select [(ngModel)]=\"industryType\" [ngModelOptions]=\"{standalone: true}\">\n                <mat-option *ngFor=\"let industry of industries\" [value]=\"industry.value\">\n                  {{industry.viewValue}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n        </div>\n    <br>\n    <div style=\"display:inline\">\n      <mat-form-field style=\"display:inline-block; width: 235px\">\n        <input matInput [matDatepicker]=\"picker1\" placeholder=\"start date\" [(ngModel)] = \"startDate\">\n        <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n        <mat-datepicker #picker1></mat-datepicker>\n      </mat-form-field>\n    <span style=\"margin-left: 2em\"></span>\n    <mat-form-field style=\"display:inline-block; width: 235px\">\n      <input matInput [matDatepicker]=\"picker2\" placeholder=\"expiration date\"\n         [(ngModel)] = \"expirationDate\">\n      <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n      <mat-datepicker #picker2></mat-datepicker>\n      </mat-form-field>\n    </div>\n    <br>\n    <mat-form-field style=\"width:500px; background-color: whitesmoke\">\n      <mat-label>Job Description</mat-label>\n      <textarea matInput style=\"width: 500px; height: 300px;\" [(ngModel)] = \"description\"></textarea>\n    </mat-form-field>\n    <br>\n    <div style=\"display:inline\">\n      <div  *ngIf = \"posted\">\n        <button mat-raised-button color=\"warn\" style=\"display:inline-block; margin-top: 2em\" (click)=\"submit()\">Submit</button>\n      </div>\n      <div *ngIf = \"!posted\" >\n        <button mat-raised-button color=\"warn\" style=\"margin-left: 2em; display:inline-block; margin-top: 2em\" (click)=\"postAnother()\">Post Another Job</button>\n      </div>\n    </div>\n  </div>\n\n \n</body>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/admin-components/profil-candidat/profil-candidat.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/admin-components/profil-candidat/profil-candidat.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"left\">\n        <img src=\"assets/img/candi.png\" alt=\"user\"  class=\"img-circle\">\n        <h5>{{candidate.prenom}} {{candidate.nom}} </h5>\n\n    </div>\n    <div class=\"right\">\n        <div class=\"info\">\n            <h3>Civility</h3>\n            <div class=\"info_data\">\n                <div class=\"data\">\n                    <h4>Email</h4>\n                    <p>{{candidate.email}}</p>\n                </div>\n                <div class=\"data\">\n                    <h4>Phone</h4>\n                    <p>{{candidate.phone}}</p>\n                </div>\n                <div class=\"data\">\n                    <h4>Date of birth</h4>\n                    <p>{{candidate.dateOfBirth}}</p>\n                </div>\n\n            </div>\n        </div>\n\n        <div class=\"projects\">\n            <h3>Study level</h3>\n            <div class=\"projects_data\">\n                <div class=\"data\">\n                    <h4>Level</h4>\n                    <p>{{candidate.niveauEtud}}</p>\n                </div>\n                <div class=\"data\">\n                    <h4>Diploma title</h4>\n                    <p>{{candidate.titreDiplome}}</p>\n                </div>\n                <div class=\"data\">\n                    <h4>Engineering school</h4>\n                    <p>{{candidate.university}}</p>\n                </div>\n                \n            </div>\n        </div>\n        <div class=\"exp\">\n            <h3>Experience</h3>\n            <div class=\"exp_data\">\n                <div class=\"data\">\n                    <h4>level of experience\n                    </h4>\n                    <p>{{candidate.niveauExp}}</p>\n                </div>\n                <div class=\"data\">\n                    <h4>Experiences</h4>\n                    <p>{{candidate.experience}}</p>\n                </div>\n                \n\n            </div>\n        </div>\n\n        <div class=\"exp\">\n            <h3>Attached documents\n            </h3>\n            <div class=\"exp_data\">\n                <div class=\"data\">\n                    <h4>CV</h4>\n                    <p>{{candidate.pathCv}}\n                        <a href=\"http://localhost:8080/downloadFile/{{candidate.pathCv}}\"\n                class=\"cv\"><i class=\"fa fa-download\"></i></a>\n                    </p>\n                </div>\n                <div class=\"data\">\n                    <h4>Cover letter\n                    </h4>\n                    <p>{{candidate.pathMotivationLetter}}\n                        <a href=\"http://localhost:8080/downloadFile/{{candidate.pathMotivationLetter}}\"\n                class=\"cv\"><i class=\"fa fa-download\"></i></a>\n                \n                    </p>\n                    \n                </div>\n                \n\n            </div>\n        </div>\n    </div>\n    \n</div>\n\n    <div class=\"container\">\n    <a class=\"btn btn1\"(click)=\"sendConfirmMsg(candidate.idUser)\">Send an email of confirmation</a>\n    <a class=\"btn btn2\" (click)=\"sendDenyMsg(candidate.idUser)\">Send an email of rejection</a>\n    </div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/admin-components/profile-employe/profile-employe.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/admin-components/profile-employe/profile-employe.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"left\"> \n    <img src=\"http://localhost:8080/avatar/{{employe.idUser}}\" alt=\"user\" width=\"150\" class=\"img-circle\" (click)=\"updatePhoto(employe)\">\n    <br>\n    <br>\n    <h4>{{employe.prenom}} {{employe.nom}} </h4>\n    <h2>{{employe.fonction}}</h2>\n\n  </div>\n        \n  <div class=\"right\">\n\n    <div class=\"info\">\n          <h3> Contact information</h3>\n      <div class=\"info_data\">\n            <div class=\"data\">\n              <h4>Date of birth</h4>\n              <p> {{employe.dateOfBirth}}</p>\n          </div>\n          <div class=\"data\">\n            <h4>Phone</h4>\n            <p> {{employe.phone}}</p>\n        </div>\n        <div class=\"data\">\n          <h4>Email</h4>\n          <p> {{employe.email}}</p>\n        </div>\n        \n\n    </div>\n\n    <div class=\"info_data\">\n\n      <div class=\"data\">\n        <h4>Address</h4>\n        <p> {{employe.adresse}}</p>\n      </div>\n\n      <div class=\"data\">\n        <h4>CIN</h4>\n        <p> {{employe.cin}}</p>\n    </div>\n\n    <div class=\"data\">\n      <h4>CNSS</h4>\n      <p> {{employe.cnss}}</p>\n  </div>\n\n    </div>\n  </div>\n          \n  <div class=\"projects\">\n\n      <h3> Post</h3>\n      <div class=\"info_data\">\n        <div class=\"data\">\n          <h4>Department</h4>\n          <p> {{employe.departement}}</p>\n        </div>\n        <div class=\"data\">\n          <h4>Fonction</h4>\n          <p> {{employe.fonction}}</p>\n        </div>\n        <div class=\"data\">\n          <h4>Type of Contract</h4>\n          <p> {{employe.typeContrat}}</p>\n        </div>\n        \n\n      </div>\n        \n      <div class=\"info_data\">\n        <div class=\"data\">\n          <h4>Entry date </h4>\n          <p> {{employe.dateEntree}}</p>\n        </div>\n        <div class=\"data\">\n          <h4>Salary</h4>\n          <p> {{employe.salary}}</p>\n        </div>\n        <div class=\"data\">\n          \n        </div>\n\n      </div>\n        \n    </div>\n    <a class=\"btn\" (click)=\"generateReport()\" >Export informations to PDF</a>\n    \n  </div>\n\n  \n\n</div>\n      <!-- /col-lg-6 -->\n      <!--<div class=\"col-lg-8 \">-->\n        <!--  BUTTONS SIZES -->\n        <!--<div class=\"showback\">\n          <h4><i class=\"fa fa-angle-right\"></i> Congés</h4>\n          \n          <table class=\"table table-striped table-advance table-hover\" class=\"content-table\">\n\n            <thead>\n            <tr>\n              <th>Début</th>\n              <th>Fin</th>\n              <th>Jour(s) pris</th>\n              <th>Etat</th>\n    \n            </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let employe of employees\">\n                    <td>{{conge.debutCong}}</td>\n                    <td>{{conge.finCong}}</td>\n                    <td>{{conge.duree}}</td>\n                    <td>{{conge.statusOfDemand}}</td>\n                \n                </tr>\n            </tbody>\n          </table>\n        \n         \n        </div>-->\n        \n\n        <!-- /showback -->\n        <!-- BUTTON BLOCK -->\n        \n           \n\n            \n\n        \n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/admin-components/recruitment/recruitment.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/admin-components/recruitment/recruitment.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 style=\"font-size: 15px\">Search Result:</h1>\n\n        <table class=\"table\">\n            <thead>\n                <tr>\n                  <th><span style=\"margin-left: 20px\"></span>Candidate ID</th>\n                  <th><span style=\"margin-left: 20px\"></span>Candidate Rank</th>\n                  <th><span style=\"margin-left: 20px\"></span>Application Date</th>\n                  <th><span style=\"margin-left: 20px\"></span>Status</th>\n                </tr>\n            </thead>\n            <tbody style=\"margin-left: 20px\" *ngFor=\"let job of searchResault\">\n              <tr *ngFor=\"let can of job.candidate\">\n                <td><span style=\"margin-left: 20px\"></span>{{can.candidate_id}}</td>\n                <td><span style=\"margin-left: 20px\"></span>{{ can.rank}}</td>\n                <td><span style=\"margin-left: 20px\"></span>{{ can.applyDate}}</td>\n                <td><span style=\"margin-left: 20px\"></span>{{ can.status }}</td>\n                <td><span style=\"margin-left: 20px\"></span>\n                  <button mat-raised-button color=\"warn\"  (click)=\"emailSupport()\">Send Email</button>\n\n                </td>\n                    \n                </tr>\n            </tbody>\n        </table>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/admin-components/recrutements/recrutements.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/admin-components/recrutements/recrutements.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card-title style=\" padding:1em;\">View Candidate :</mat-card-title>\n\n\n<!-- NAVBAR ENDS HERE -->\n\n<body>\n  <div>\n\n    <mat-accordion>\n      <mat-expansion-panel *ngFor=\"let job of searchResault\">\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            Job Title : {{job.title}}\n          </mat-panel-title>\n        </mat-expansion-panel-header>\n        <div>\n          <p>Posted Date: {{job.startDate}}</p>\n          <p>Expiration Date: {{job.expirationDate}}</p>\n          <p>Candidate: </p>\n          <div>\n            <table class=\"table\">\n              <thead>\n                <tr>\n                  <th><span style=\"margin-left: 20px\"></span>Candidate ID</th>\n                  <th><span style=\"margin-left: 20px\"></span>Candidate Rank</th>\n                  <th><span style=\"margin-left: 20px\"></span>Application Date</th>\n                  <th><span style=\"margin-left: 20px\"></span>Status</th>\n                </tr>\n              </thead>\n              <tbody style=\"margin-left: 20px\">\n                <tr *ngFor=\"let can of job.candidate\">\n                  <td><span style=\"margin-left: 20px\"></span>{{can.candidate_id}}</td>\n                  <td><span style=\"margin-left: 20px\"></span>{{ can.rank}}</td>\n                  <td><span style=\"margin-left: 20px\"></span>{{ can.applyDate}}</td>\n                  <td><span style=\"margin-left: 20px\"></span>{{ can.status }}</td>\n                  <td><span style=\"margin-left: 20px\"></span>\n                    <button mat-raised-button color=\"warn\" (click)=\"viewCanAppForm(can, job)\">View</button>\n                  </td>\n                  <!-- <td><span style=\"margin-left: 20px\"></span>\n                    <button mat-raised-button color=\"primary\" routerLink=\"/jobappform\" (click)=\"applyJob(j)\">Not Consider</button>\n                  </td> -->\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </mat-expansion-panel>\n\n    </mat-accordion>\n  </div>\n\n</body>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/admin-components/update-employe/update-employe.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/admin-components/update-employe/update-employe.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" >\n\n   \n        \n  <div class=\"row\">\n\n      \n      <div class=\"col-lg-1\"></div>\n\n      <div class=\"col-lg-10\">\n          <div id=\"ui\">\n              <form (ngSubmit)=\"processForm()\">\n              <h3><i class=\"fa fa-angle-right\"></i> Personal informations</h3>\n              <br>\n\n              <div class=\"row\">\n                  <div class=\"col-lg-6\">\n                      <label for=\"fname\">First name</label>\n                      <input type=\"text\" name=\"prenom\" class=\"form-control\" [(ngModel)]=\"employe.prenom\">\n                  </div>\n\n                  <div class=\"col-lg-6\">\n                      <label for=\"fname\">Last name</label>\n                      <input type=\"text\" name=\"nom\" class=\"form-control\" [(ngModel)]=\"employe.nom\">\n                  </div>\n              </div>\n\n              <label for=\"fname\">Email</label>\n              <input type=\"text\" name=\"email\" class=\"form-control\" [(ngModel)]=\"employe.email\">\n              \n              <div class=\"row\">\n                  <div class=\"col-lg-6\">\n                      <label for=\"fname\">Date of birth</label>\n                      <input type=\"text\" name=\"dateOfBirth\" class=\"form-control\" [(ngModel)]=\"employe.dateOfBirth\">\n                  </div>\n\n                  <div class=\"col-lg-6\">\n                      <label for=\"fname\">Phone</label>\n                      <input type=\"text\" name=\"phone\" class=\"form-control\" [(ngModel)]=\"employe.phone\">\n                  </div>\n              </div>\n\n              <div class=\"row\">\n                  <div class=\"col-lg-8\">\n                      <label for=\"fname\">Address</label>\n                      <input type=\"text\" name=\"adresse\" class=\"form-control\" [(ngModel)]=\"employe.adresse\">\n                  </div>\n\n                  <div class=\"col-lg-4\">\n                      <label for=\"fname\">City</label>\n                      <input type=\"text\" name=\"ville\" class=\"form-control\" [(ngModel)]=\"employe.ville\">\n                  </div>\n              </div>\n\n\n             \n              <label for=\"fname\">CIN</label>\n              <input type=\"text\" name=\"cin\" class=\"form-control\" [(ngModel)]=\"employe.cin\">\n             \n              <br>\n              <br>\n              <h3><i class=\"fa fa-angle-right\"></i> Post</h3>\n              <br>\n\n              <div class=\"row\">\n                  <div class=\"col-lg-6\">\n                      <label for=\"fname\">Department</label>\n                      <input type=\"text\" name=\"departement\" class=\"form-control\" [(ngModel)]=\"employe.departement\">\n                  </div>\n\n                  <div class=\"col-lg-6\">\n                      <label for=\"fname\">Fonction</label>\n                      <input type=\"text\" name=\"fonction\" class=\"form-control\" [(ngModel)]=\"employe.fonction\">\n                  </div>\n              </div>\n              <label for=\"fname\">CNSS</label>\n              <input type=\"text\" name=\"CNSS\" class=\"form-control\" [(ngModel)]=\"employe.cnss\">\n              \n\n              <div class=\"row\">\n                  <div class=\"col-lg-6\">\n                      <label for=\"fname\">Type of contract</label>\n                      <input type=\"text\" name=\"typeContrat\" class=\"form-control\" [(ngModel)]=\"employe.typeContrat\">\n                  </div>\n\n                  <div class=\"col-lg-6\">\n                      <label for=\"fname\">Salary</label>\n                      <input type=\"text\" name=\"salary\" class=\"form-control\" [(ngModel)]=\"employe.salary\">\n                  </div>\n              </div>\n\n              \n              <label for=\"fname\">Entry date </label>\n              <input type=\"date\" name=\"dateEntree\" class=\"form-control\" [(ngModel)]=\"employe.dateEntree\">\n                  \n\n              <br>\n              <br>\n              <input type=\"submit\" value=\"save\" class=\"btn\">\n\n          </form>\n          </div>\n\n      \n\n  </div>\n\n  <div class=\"col-lg-1\"></div>\n\n  </div>\n  \n      \n  \n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/admin-components/update-photo/update-photo.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/admin-components/update-photo/update-photo.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" >\n\n   \n        \n    <div class=\"row\">\n  \n        \n        <div class=\"col-lg-1\"></div>\n  \n        <div class=\"col-lg-10\">\n            <div id=\"ui\">\n                <form (ngSubmit)=\"processForm()\">\n                <h3><i class=\"fa fa-angle-right\"></i> Changer l'image de profil</h3>\n                <br>\n  \n                <label>   File Upload </label>\n                <input type=\"file\" accept=\"image/*\" (change)=\"onSelectFile($event)\">\n            \n                <br>\n                <br>\n                <input type=\"submit\" value=\"save\" class=\"btn\">\n  \n            </form>\n            </div>\n  \n        \n  \n    </div>\n  \n    <div class=\"col-lg-1\"></div>\n  \n    </div>\n    \n        \n    \n  </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/admin-components/view-applicants/view-applicants.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/admin-components/view-applicants/view-applicants.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n   \n   \n    <mat-card-title style=\" padding:1em;\">View Candidate :</mat-card-title>\n\n\n<!-- NAVBAR ENDS HERE -->\n\n<body>\n  <div>\n\n    <mat-accordion>\n      <mat-expansion-panel *ngFor=\"let job of searchResault\">\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            Job Title : {{job.title}}\n          </mat-panel-title>\n        </mat-expansion-panel-header>\n        <div>\n          <p>Posted Date: {{job.startDate}}</p>\n          <p>Expiration Date: {{job.expirationDate}}</p>\n          <p>Candidate: </p>\n          <div>\n            <table class=\"table\">\n              <thead>\n                <tr>\n                  <th><span style=\"margin-left: 20px\"></span>Candidate ID</th>\n                  <th><span style=\"margin-left: 20px\"></span>Candidate Rank</th>\n                  <th><span style=\"margin-left: 20px\"></span>Application Date</th>\n                  <th><span style=\"margin-left: 20px\"></span>Status</th>\n                </tr>\n              </thead>\n              <tbody style=\"margin-left: 20px\">\n                <tr *ngFor=\"let can of job.candidate\">\n                  <td><span style=\"margin-left: 20px\"></span>{{can.candidate_id}}</td>\n                  <td><span style=\"margin-left: 20px\"></span>{{ can.rank}}</td>\n                  <td><span style=\"margin-left: 20px\"></span>{{ can.applyDate}}</td>\n                  <td><span style=\"margin-left: 20px\"></span>{{ can.status }}</td>\n                  <td><span style=\"margin-left: 20px\"></span>\n                    <button mat-raised-button color=\"warn\" (click)=\"viewCanAppForm(can, job)\">View</button>\n                  </td>\n                  <!-- <td><span style=\"margin-left: 20px\"></span>\n                    <button mat-raised-button color=\"primary\" routerLink=\"/jobappform\" (click)=\"applyJob(j)\">Not Consider</button>\n                  </td> -->\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </mat-expansion-panel>\n\n    </mat-accordion>\n  </div>\n\n</body>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/admin-components/view-applicants/view-popup/view-popup.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/admin-components/view-applicants/view-popup/view-popup.component.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Applicant</p>\n\n<div>\n<div>\n    <p>First Name: {{data.firstName}}</p>\n    <p>Last Name: {{data.lastName}}</p>\n    <p>Telephone: {{data.telephone}}</p>\n    <p>Email: {{data.email}}</p>\n    <p>Job: {{data.job}}</p>\n\n<h1>Make a choice to move forward: </h1>\n<mat-radio-group class=\"example-radio-group\" [(ngModel)]=\"selectedChoice\" (click)=\"select = true\">\n    <mat-radio-button class=\"example-radio-button\" *ngFor=\"let choice of choices\" [value]=\"choice\"\n    style=\"margin-left: 30px\">\n    {{choice}}\n    </mat-radio-button>\n</mat-radio-group>\n<br>\n<br>\n<button mat-button (click)=\"onNoClick()\">Save and Exit</button>\n    </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/admin-components/view-posting/edit-popup/edit-popup.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/admin-components/view-posting/edit-popup/edit-popup.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Job Info</h1>\n\n<div mat-dialog-content>\n    <mat-form-field>\n        <mat-label>Job Title:</mat-label>\n        <input matInput [(ngModel)]=\"data.title\">\n    </mat-form-field>\n    <br>\n    <mat-form-field>\n        <mat-label>Job Type:</mat-label>\n        <input matInput [(ngModel)]=\"data.jobType\">\n    </mat-form-field>\n    <mat-form-field>\n        <mat-label>Job Location:</mat-label>\n        <input matInput [(ngModel)]=\"data.location\">\n    </mat-form-field>\n    <br>\n    <mat-form-field>\n        <mat-label>Company :</mat-label>\n        <input matInput [(ngModel)]=\"data.company\">\n    </mat-form-field>\n    <mat-form-field>\n        <mat-label>Industry Type:</mat-label>\n        <input matInput [(ngModel)]=\"data.industryType\">\n    </mat-form-field>\n    <br>\n    <mat-form-field>\n        <mat-label>Posted Date :</mat-label>\n        <input matInput [(ngModel)]=\"data.startDate\">\n    </mat-form-field>\n    <mat-form-field>\n        <mat-label>Expiration Date:</mat-label>\n        <input matInput [(ngModel)]=\"data.induexpirationDatestryType\">\n    </mat-form-field>\n    <br>\n    <mat-form-field>\n        <mat-label>Job Description:</mat-label>\n        <input matInput [(ngModel)]=\"data.jobDescription\" style=\"width: 700px\">\n    </mat-form-field>\n</div>\n\n\n<div mat-dialog-actions>\n    <button mat-button (click)=\"onNoClick()\">No Thanks</button>\n    <button mat-button [mat-dialog-close]=\"data\" cdkFocusInitial>Save</button>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/admin-components/view-posting/view-posting.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/admin-components/view-posting/view-posting.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-card-title style=\" padding:1em;\">View Posted Jobs :</mat-card-title>\n\n\n<!-- NAVBAR ENDS HERE -->\n\n<body>\n  <!-- <h1 style=\"font-size: 1.5em; margin-bottom: 1em\">Posted Jobs</h1> -->\n  <p class=\"pageFunction\">Total Posted Job: {{count}}</p>\n<div >\n\n  <mat-accordion >\n    <mat-expansion-panel *ngFor= \"let job of searchResault\">\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          Job title : {{job.title}}\n        </mat-panel-title>\n        <!-- <mat-panel-description>\n          job id: {{job.job_id}}\n        </mat-panel-description> -->\n      </mat-expansion-panel-header>\n      <div>\n        <p>Job ID: {{job.job_id}}</p>  \n        <p>Posted Date: {{job.startDate}}</p>  \n        <p>Expiration Date: {{job.expirationDate}}</p>  \n        <p>Job Type: {{job.jobType}}</p>  \n        <p>Industry: {{job.industryType}}</p>  \n        <p>Description: </p>\n        <p>{{job.description}}</p>\n      </div>\n      <button mat-button (click)=\"update(job)\"> Update </button>\n      <button mat-button (click)=\"delete(job)\"> Delete </button>\n      </mat-expansion-panel>\n\n     \n\n      <!-- <mat-form-field>\n        <mat-label>start date: {{job.startDate}}</mat-label>\n        <ul *ngFor= \"let can of job.candidate\">\n          <li>\n            candidate id: {{can.candidate_id}}\n          </li>\n          <li>\n            candidate rank: {{can.rank}}\n          </li>\n          <li>\n            candidate apply date: {{can.applyDate}}\n          </li>\n        </ul>\n      </mat-form-field> -->\n\n      <!-- <mat-form-field>\n        <mat-label>job description: {{job.jobDescription}}</mat-label>\n      </mat-form-field>\n    </mat-expansion-panel> -->\n\n  </mat-accordion>\n</div>\n\n</body>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/candidate-components/info-candidate/info-candidate.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/candidate-components/info-candidate/info-candidate.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row mt\" style=\"padding-top: 5%\">\n    \n    \n\n    <div class=\"col-lg-6 col-md-6 col-sm-12\" >\n      <!--  BASIC BUTTONS -->\n      <div class=\"showback\">\n        <h4><i class=\"fa fa-angle-right\"></i> Civility</h4>\n        <form class=\"form-horizontal style-form\" style=\"margin-top: 5px;\">\n        <div class=\"form-group\">\n            <label class=\"col-sm-2 col-sm-2 control-label\">First name\n            </label>\n            <div class=\"col-sm-10\">\n              <input type=\"text\" [(ngModel)]=\"user.prenom\" class=\"form-control\" name=\"prenom\" id=\"prenom\" placeholder=\"\"\n               minlength=\"3\" [class.is-invalid]=\"prenom.invalid && prenom.touched\"\n               #prenom=\"ngModel\" required>\n\n              <div *ngIf=\"prenom.errors && (prenom.invalid || prenom.touched)\">\n                <small class=\"text-danger\" *ngIf=\"prenom.errors.required\" [class.d-none]=\" prenom.untouched\" style=\"font-size: 11px;\"> First name is required</small>\n                <small class=\"text-danger\" *ngIf=\"prenom.errors.minlength\" [class.d-none]=\" prenom.untouched\" style=\"font-size: 11px;\"> First name must be at least 3 characters</small>\n                \n              </div>\n\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-sm-2 col-sm-2 control-label\">Last name</label>\n            <div class=\"col-sm-10\">\n              <input type=\"text\" [(ngModel)]=\"user.nom\" class=\"form-control\" name=\"nom\" id=\"nom\" placeholder=\"\"\n              minlength=\"3\" [class.is-invalid]=\"nom.invalid && nom.touched\"\n               #nom=\"ngModel\" required>\n               <div *ngIf=\"nom.errors && (nom.invalid || nom.touched)\">\n                <small class=\"text-danger\" *ngIf=\"nom.errors.required\" [class.d-none]=\" nom.untouched\" style=\"font-size: 11px;\"> Last name is required</small>\n                <small class=\"text-danger\" *ngIf=\"nom.errors.minlength\" [class.d-none]=\" nom.untouched\" style=\"font-size: 11px;\"> Last name must be at least 3 characters</small>\n                \n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-sm-2 col-sm-2 control-label\">Date of birth</label>\n            <div class=\"col-sm-10\">\n              <input type=\"date\" [(ngModel)]=\"user.dateOfBirth\" class=\"form-control\" name=\"dateOfBirth\" id=\"dateOfBirth\" placeholder=\"\"\n              required\n          #dateOfBirth=\"ngModel\"\n          [class.is-invalid]=\"dateOfBirth.invalid && dateOfBirth.touched\">\n          <small class=\"text-danger\" [class.d-none]=\"dateOfBirth.valid || dateOfBirth.untouched\" style=\"font-size: 11px;\">Date of birth is required</small>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-sm-2 col-sm-2 control-label\">Email</label>\n            <div class=\"col-sm-10\">\n              <input type=\"text\" [(ngModel)]=\"user.email\" class=\"form-control\" name=\"email\" id=\"email\" placeholder=\"\"\n              required email\n              #email=\"ngModel\"\n              [class.is-invalid]=\"email.invalid && email.touched\">\n              <div *ngIf=\"email.errors && (email.invalid || email.touched)\">\n                <small class=\"text-danger\" *ngIf=\"email.errors.required\" [class.d-none]=\" email.untouched\" style=\"font-size: 11px;\"> Email is required</small>\n                <small class=\"text-danger\" *ngIf=\"email.errors.email\" [class.d-none]=\" email.untouched\" style=\"font-size: 11px;\"> Email must be a valid email address</small>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-sm-2 col-sm-2 control-label\">Phone</label>\n            <div class=\"col-sm-10\">\n              <input type=\"number\" [(ngModel)]=\"user.phone\" class=\"form-control\" name=\"phone\" id=\"phone\" placeholder=\"\"\n              required\n          minlength=\"8\"\n          #phone=\"ngModel\"\n          \n        \n          [class.is-invalid]=\"phone.invalid && phone.touched\">\n          <div *ngIf=\"phone.errors && (phone.invalid || phone.touched)\">\n            <small class=\"text-danger\" *ngIf=\"phone.errors.required\" [class.d-none]=\" phone.untouched\" style=\"font-size: 11px;\"> Phone number is required</small>\n            <small class=\"text-danger\" *ngIf=\"phone.errors.minlength\" [class.d-none]=\" phone.untouched\" style=\"font-size: 11px;\"> Phone number must be composed of 8 numbers</small>\n          </div>\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <label class=\"col-sm-2 col-sm-2 control-label\">CV</label>\n            <div class=\"col-sm-10\">\n                \n                    <div style=\"margin-top:3px\">\n                   <input type=\"file\" id=\"customFile\" class=\"form-control\" (change)=\"selectFileCV($event)\" style=\"height:100%\">\n                    </div>\n            \n            </div>\n          </div> \n\n         <!--<div class=\"form-group\">\n              <label for=\"file\">File upload</label>\n              <input type=\"file\" class=\"form-control\" accept=\"image/*\" (change)=\"onSelectFile($event)\" style=\"height:100%\">\n          </div>-->\n\n         <div class=\"form-group\">\n            <label class=\"col-sm-2 col-sm-2 control-label\">Cover letter</label>\n            <div class=\"col-sm-10\">\n                <div style=\"margin-top:3px\">\n                    <input type=\"file\" class=\"form-control\" id=\"customFile\" (change)=\"selectFileLettre($event)\" style=\"height:100%\" >\n                     </div>\n                   \n            </div>\n          </div>\n\n        </form>\n        \n      </div>\n      \n    </div>\n    <!-- /col-lg-6 -->\n    <div class=\"col-lg-6 col-md-6 col-sm-12\">\n      <!--  BUTTONS SIZES -->\n      <div class=\"showback\">\n        <h4><i class=\"fa fa-angle-right\"></i> Study level </h4>\n        <form class=\"form-horizontal style-form\" style=\"margin-top: 10px;\">\n            <div class=\"form-group\">\n                <label class=\"col-sm-2 col-sm-2 control-label\">Level</label>\n                <div class=\"col-sm-10\">\n                  <input type=\"text\" [(ngModel)]=\"user.niveauEtud\" class=\"form-control\" name=\"niveauEtud\" id=\"niveauEtud\" placeholder=\"\"\n                  required  #niveauEtud=\"ngModel\" [class.is-invalid]=\"niveauEtud.invalid && niveauEtud.touched\">\n                  <small class=\"text-danger\" [class.d-none]=\"niveauEtud.valid || niveauEtud.untouched\" style=\"font-size: 11px;\">Level is required</small>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"col-sm-2 col-sm-2 control-label\">Diploma title </label>\n                <div class=\"col-sm-10\">\n                  <input type=\"text\" [(ngModel)]=\"user.titreDiplome\" class=\"form-control\" name=\"titreDiplome\" id=\"titreDiplome\" placeholder=\"\"\n                  required  #titreDiplome=\"ngModel\" [class.is-invalid]=\"titreDiplome.invalid && titreDiplome.touched\">\n                  <small class=\"text-danger\" [class.d-none]=\"titreDiplome.valid || titreDiplome.untouched\" style=\"font-size: 11px;\">Diploma title is required</small>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"col-sm-2 col-sm-2 control-label\">Engineering school</label>\n                <div class=\"col-sm-10\">\n                  <input type=\"text\" [(ngModel)]=\"user.university\" class=\"form-control\" name=\"university\" id=\"university\" placeholder=\"\"\n                  required  #university=\"ngModel\" [class.is-invalid]=\"university.invalid && university.touched\">\n                  <small class=\"text-danger\" [class.d-none]=\"university.valid || university.untouched\" style=\"font-size: 11px;\">Engineering school is required</small>\n\n                </div>\n            </div>\n        </form>\n      </div>\n      <!-- /showback -->\n      <!-- BUTTON BLOCK -->\n      <div class=\"showback\">\n        <h4><i class=\"fa fa-angle-right\"></i> Experience</h4>\n        <form class=\"form-horizontal style-form\" style=\"margin-top: 10px;\">\n            <div class=\"form-group\">\n                <label class=\"col-sm-2 col-sm-2 control-label\">Years experience</label>\n                <div class=\"col-sm-10\">\n                  <input type=\"text\" [(ngModel)]=\"user.niveauExp\" class=\"form-control\" name=\"niveauExp\" id=\"niveauExp\" placeholder=\"\"\n                  required  #niveauExp=\"ngModel\" [class.is-invalid]=\"niveauExp.invalid && niveauExp.touched\">\n                  <small class=\"text-danger\" [class.d-none]=\"niveauExp.valid || niveauExp.untouched\" style=\"font-size: 11px;\">Years of experience is required</small>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"col-sm-2 col-sm-2 control-label\">Your experiences</label>\n                <div class=\"col-sm-10\">\n                  <textarea class=\"form-control\" [(ngModel)]=\"user.experience\" name=\"experience\" id=\"experience\" placeholder=\"\" rows=\"4\" data-rule=\"required\" data-msg=\"Please write something for us\"></textarea>\n                </div>\n            </div>\n\n        </form>\n        \n      </div>\n      <!--/showback -->\n      \n      <!-- DROPDOWN BUTTONS -->\n      \n        <button type=\"button\" class=\"btn-save\" style=\"margin-left: 200px\"(click)=\"createCandidate()\">Save</button>\n        \n        \n      \n      \n    </div>\n    <!-- /col-lg-6 -->\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/candidate-components/response/response.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/candidate-components/response/response.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container pt-10\" style=\"margin-top: 20%;margin-left:10%\">\n    <div class=\"row\">\n      <div\n        class=\"col-sm d-flex justify-content-center align-items-start landingText mr-10\"\n      >\n        <div class=\"col ml-3\">\n          <div>\n            <p class=\"text-justify\">\n              <span style=\"font-size: 28pt;\"\n                >Your application has been successfully registered\n                </span\n              ><br />\n              <span style=\"font-size: 17pt;\">\n                A return message will be sent to you through the email address provided</span\n              >\n            </p>\n          </div>\n  \n        </div>\n      </div>\n      \n    </div>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/dashboard/dashboard.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/dashboard/dashboard.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\">\n    <mat-card-title-group>\n      <mat-card-title>Dashboard</mat-card-title>\n      <mat-card-subtitle></mat-card-subtitle>\n      <img mat-card-md-image src=\"./assets/img/monitoring.png\" >\n    </mat-card-title-group>\n    <mat-card-content>\n      {{longText}}\n    </mat-card-content>\n  </mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/employe-components/applications/applications-popup/applications-popup.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/employe-components/applications/applications-popup/applications-popup.component.html ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div mat-dialog-content>\n    <div (ngModel) = \"data\" >\n        <h3>{{data.job_title}}</h3>  \n        <p>{{data.company}}</p>\n        <p>{{data.jobType}}</p>\n        <p>{{data.location}}</p>\n        <p>{{data.industryType}}</p>\n        <p>Job Description</p>\n        <p>{{data.jobDescription}}</p>\n    </div>\n</div>\n\n<div>\n<button mat-raised-button (click)=\"onNoClick()\">Close</button>\n</div>-->\n\n<div mat-dialog-content>\n    <div >\n        <h3>Title : {{title}}</h3>  \n        <p>Company : {{company}}</p>\n        <p>Status : {{status}}</p>\n    </div>\n</div>\n\n<div>\n<button mat-raised-button (click)=\"onNoClick()\">Close</button>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/employe-components/applications/applications.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/employe-components/applications/applications.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n   <mat-toolbar-row style=\"padding: 0 5px;\">\n    <span><h2> Status</h2></span>\n  </mat-toolbar-row>\n \n\n <br>\n\n <h1 style=\"font-size: 15px\">Search Result:</h1>\n<div>\n        <table class=\"table\">\n            <thead>\n                <tr>\n                    <th><span style=\"margin-left: 20px\"></span>Job Title</th>\n                    <th><span style=\"margin-left: 20px\"></span>Job type</th>\n                    <th><span style=\"margin-left: 20px\"></span>location</th>\n                    <!--<th><span style=\"margin-left: 20px\"></span>Industry type</th>-->\n                    <th><span style=\"margin-left: 20px\"></span>Company</th>\n                    <th><span style=\"margin-left: 20px\"></span>Job Expiration Date</th> \n                    <th><span style=\"margin-left: 20px\"></span>Application Date</th>\n                    <th><span style=\"margin-left: 20px\"></span>View</th>\n                </tr>\n            </thead>\n            <tbody style=\"margin-left: 20px\">\n                <tr *ngFor=\"let j of appResult\">  \n                    <td><span style=\"margin-left: 20px\"></span>{{ j.job_title }}</td>\n                    <td><span style=\"margin-left: 20px\"></span>{{ j.job_type }}</td> \n                    <td><span style=\"margin-left: 20px\"></span>{{ j.job_location }}</td>\n                    <!--<td><span style=\"margin-left: 20px\"></span>{{ j.job_industryType }}</td>--> \n                    <td><span style=\"margin-left: 20px\"></span>{{ j.job_company }}</td>\n                    <td><span style=\"margin-left: 20px\"></span>{{ j.job_expirationDate }}</td>\n                    <!--<td *ngFor=\"let can of job.candidate\"><span style=\"margin-left: 20px\"></span>{{can.applyDate}}</td>--> \n                    <td ><span style=\"margin-left: 20px\"></span>{{j.applyDate}}</td>\n                    <td> <button mat-raised-button color=\"warn\" (click)= \"openDialog(j)\">Status</button></td>\n                </tr>\n            </tbody>\n        </table>\n</div>\n\n<!--\n  <p>Once the data is retrived properly, try to populate into the below HTML </p>\n <br>\n\n<div class=\"album py-5 bg-light\">\n\n\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <mat-card class=\"example-card\">\n            <mat-card-header>\n              <mat-card-title><h4>Filters</h4></mat-card-title>\n\n            </mat-card-header>\n\n            <mat-card-content>\n              <mat-card class = \"example-card\">\n              <mat-label><h5>Search</h5></mat-label>\n              <div>\n              <input class=\"search-control\" type=\"text\" size=\"20\" placeholder=\"Job Title\"\n               [(ngModel)]=\"searchText\" #searchbar>\n               </div>\n               </mat-card>\n               <br>\n               <mat-card class = \"example-card\">\n              <mat-label><h5>Application Type</h5></mat-label>\n              <mat-checkbox class=\"example-margin\" [(ngModel)]=\"checked\">Job</mat-checkbox>\n              <br>\n              <mat-checkbox class=\"example-margin\" [(ngModel)]=\"indeterminate\">Interview</mat-checkbox>\n\n              </mat-card>\n\n              <br>\n              <mat-card class = \"example-card\">\n              <mat-label><h5>Application Status</h5></mat-label>\n              <mat-checkbox class=\"example-margin\" [(ngModel)]=\"checked\">Pending</mat-checkbox>\n              <br>\n              <mat-checkbox class=\"example-margin\" [(ngModel)]=\"indeterminate\">Reviewed</mat-checkbox>\n              <br>\n              <mat-checkbox class=\"example-margin\" [(ngModel)]=\"indeterminate\">Declined</mat-checkbox>\n              </mat-card>\n              <br>\n              <mat-card class = \"example-card\">\n              <mat-label><h5>Application Date</h5></mat-label>\n              <mat-label>Start date</mat-label>\n              <input matInput [matDatepicker]=\"picker1\">\n              <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n              <mat-datepicker #picker1></mat-datepicker>\n              <br>\n              <mat-label>End date </mat-label>\n              <input matInput [matDatepicker]=\"picker2\">\n              <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n              <mat-datepicker #picker2></mat-datepicker>\n\n              </mat-card>\n\n            </mat-card-content>\n          </mat-card>\n\n        </div>\n          <div class=\"col-md-7\">\n            <div class=\"container-fluid \">\n\n              <div class=\"row\">\n                  <div class=\"col-md-4\">\n                      <div class=\"card mb-4 shadow-sm\">\n                          <!-- <svg class=\"bd-placeholder-img card-img-top\" width=\"100%\" height=\"100\"\n                              xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMidYMid slice\" focusable=\"false\"\n                              role=\"img\" aria-label=\"Placeholder: Thumbnail\">\n                              <title>Placeholder</title>\n                              <rect width=\"100%\" height=\"100%\" fill=\"#55595c\" /><text x=\"50%\" y=\"50%\" fill=\"#eceeef\"\n                                  dy=\".3em\">111111</text>\n                          </svg> \n                          <img src=\"../../assets/google.jpg\" alt=\"example image\" class=\"bd-placeholder-img card-img-top\" width=\"100%\" height=\"100\">\n                          <div class=\"card-body\">\n                              <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to\n                                  additional\n                                  content. This content is a little bit longer.</p>\n                              <div class=\"d-flex justify-content-between align-items-center\">\n                                  <div class=\"btn-group\">\n                                      <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">View</button>\n                                  </div>\n                                  <small class=\"text-muted\">9 mins</small>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n                  <div class=\"col-md-4\">\n                      <div class=\"card mb-4 shadow-sm\">\n                          <!-- <svg class=\"bd-placeholder-img card-img-top\" width=\"100%\" height=\"100\"\n                              xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMidYMid slice\" focusable=\"false\"\n                              role=\"img\" aria-label=\"Placeholder: Thumbnail\">\n                              <title>Placeholder</title>\n                              <rect width=\"100%\" height=\"100%\" fill=\"#55595c\" /><text x=\"50%\" y=\"50%\" fill=\"#eceeef\"\n                                  dy=\".3em\">Thumbnail</text>\n                          </svg> \n                          <img src=\"../../assets/amazon.jpg\" alt=\"example image\" class=\"bd-placeholder-img card-img-top\" width=\"100%\"\n                              height=\"100\">\n                          <div class=\"card-body\">\n                              <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to\n                                  additional\n                                  content. This content is a little bit longer.</p>\n                              <div class=\"d-flex justify-content-between align-items-center\">\n                                  <div class=\"btn-group\">\n                                      <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">View</button>\n                                      <!-- <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">Edit</button> -\n                                  </div>\n                                  <small class=\"text-muted\">9 mins</small>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n                  <div class=\"col-md-4\">\n                      <div class=\"card mb-4 shadow-sm\">\n                          <!-- <svg class=\"bd-placeholder-img card-img-top\" width=\"100%\" height=\"100\"\n                              xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMidYMid slice\" focusable=\"false\"\n                              role=\"img\" aria-label=\"Placeholder: Thumbnail\">\n                              <title>Placeholder</title>\n                              <rect width=\"100%\" height=\"100%\" fill=\"#55595c\" /><text x=\"50%\" y=\"50%\" fill=\"#eceeef\"\n                                  dy=\".3em\">Thumbnail</text>\n                          </svg> --\n                          <img src=\"../../assets/apple.jpg\" alt=\"example image\" class=\"bd-placeholder-img card-img-top\" width=\"100%\"\n                              height=\"100\">\n                          <div class=\"card-body\">\n                              <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to\n                                  additional\n                                  content. This content is a little bit longer.</p>\n                              <div class=\"d-flex justify-content-between align-items-center\">\n                                  <div class=\"btn-group\">\n                                      <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">View</button>\n                                      <!-- <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">Edit</button> --\n                                  </div>\n                                  <small class=\"text-muted\">9 mins</small>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n\n                  <div class=\"col-md-4\">\n                      <div class=\"card mb-4 shadow-sm\">\n                          <svg class=\"bd-placeholder-img card-img-top\" width=\"100%\" height=\"100\"\n                              xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMidYMid slice\" focusable=\"false\"\n                              role=\"img\" aria-label=\"Placeholder: Thumbnail\">\n                              <title>Placeholder</title>\n                              <rect width=\"100%\" height=\"100%\" fill=\"#55595c\" /><text x=\"50%\" y=\"50%\" fill=\"#eceeef\"\n                                  dy=\".3em\">Thumbnail</text>\n                          </svg>\n                          <div class=\"card-body\">\n                              <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to\n                                  additional\n                                  content. This content is a little bit longer.</p>\n                              <div class=\"d-flex justify-content-between align-items-center\">\n                                  <div class=\"btn-group\">\n                                      <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">View</button>\n                                      <!-- <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">Edit</button> --\n                                  </div>\n                                  <small class=\"text-muted\">9 mins</small>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n                  <div class=\"col-md-4\">\n                      <div class=\"card mb-4 shadow-sm\">\n                          <svg class=\"bd-placeholder-img card-img-top\" width=\"100%\" height=\"100\"\n                              xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMidYMid slice\" focusable=\"false\"\n                              role=\"img\" aria-label=\"Placeholder: Thumbnail\">\n                              <title>Placeholder</title>\n                              <rect width=\"100%\" height=\"100%\" fill=\"#55595c\" /><text x=\"50%\" y=\"50%\" fill=\"#eceeef\"\n                                  dy=\".3em\">Thumbnail</text>\n                          </svg>\n                          <div class=\"card-body\">\n                              <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to\n                                  additional\n                                  content. This content is a little bit longer.</p>\n                              <div class=\"d-flex justify-content-between align-items-center\">\n                                  <div class=\"btn-group\">\n                                      <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">View</button>\n                                      <!-- <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">Edit</button> --\n                                  </div>\n                                  <small class=\"text-muted\">9 mins</small>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n                  <div class=\"col-md-4\">\n                      <div class=\"card mb-4 shadow-sm\">\n                          <svg class=\"bd-placeholder-img card-img-top\" width=\"100%\" height=\"100\"\n                              xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMidYMid slice\" focusable=\"false\"\n                              role=\"img\" aria-label=\"Placeholder: Thumbnail\">\n                              <title>Placeholder</title>\n                              <rect width=\"100%\" height=\"100%\" fill=\"#55595c\" /><text x=\"50%\" y=\"50%\" fill=\"#eceeef\"\n                                  dy=\".3em\">Thumbnail</text>\n                          </svg>\n                          <div class=\"card-body\">\n                              <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to\n                                  additional\n                                  content. This content is a little bit longer.</p>\n                              <div class=\"d-flex justify-content-between align-items-center\">\n                                  <div class=\"btn-group\">\n                                      <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">View</button>\n                                      <!-- <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">Edit</button> --\n                                  </div>\n                                  <small class=\"text-muted\">9 mins</small>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n\n                  <div class=\"col-md-4\">\n                      <div class=\"card mb-4 shadow-sm\">\n                          <svg class=\"bd-placeholder-img card-img-top\" width=\"100%\" height=\"100\"\n                              xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMidYMid slice\" focusable=\"false\"\n                              role=\"img\" aria-label=\"Placeholder: Thumbnail\">\n                              <title>Placeholder</title>\n                              <rect width=\"100%\" height=\"100%\" fill=\"#55595c\" /><text x=\"50%\" y=\"50%\" fill=\"#eceeef\"\n                                  dy=\".3em\">Thumbnail</text>\n                          </svg>\n                          <div class=\"card-body\">\n                              <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to\n                                  additional\n                                  content. This content is a little bit longer.</p>\n                              <div class=\"d-flex justify-content-between align-items-center\">\n                                  <div class=\"btn-group\">\n                                      <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">View</button>\n                                      <!-- <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">Edit</button> --\n                                  </div>\n                                  <small class=\"text-muted\">9 mins</small>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n                  <div class=\"col-md-4\">\n                      <div class=\"card mb-4 shadow-sm\">\n                          <svg class=\"bd-placeholder-img card-img-top\" width=\"100%\" height=\"100\"\n                              xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMidYMid slice\" focusable=\"false\"\n                              role=\"img\" aria-label=\"Placeholder: Thumbnail\">\n                              <title>Placeholder</title>\n                              <rect width=\"100%\" height=\"100%\" fill=\"#55595c\" /><text x=\"50%\" y=\"50%\" fill=\"#eceeef\"\n                                  dy=\".3em\">Thumbnail</text>\n                          </svg>\n                          <div class=\"card-body\">\n                              <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to\n                                  additional\n                                  content. This content is a little bit longer.</p>\n                              <div class=\"d-flex justify-content-between align-items-center\">\n                                  <div class=\"btn-group\">\n                                      <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">View</button>\n                                      <!-- <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">Edit</button> --\n                                  </div>\n                                  <small class=\"text-muted\">9 mins</small>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n                  <div class=\"col-md-4\">\n                      <div class=\"card mb-4 shadow-sm\">\n                          <svg class=\"bd-placeholder-img card-img-top\" width=\"100%\" height=\"100\"\n                              xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMidYMid slice\" focusable=\"false\"\n                              role=\"img\" aria-label=\"Placeholder: Thumbnail\">\n                              <title>Placeholder</title>\n                              <rect width=\"100%\" height=\"100%\" fill=\"#55595c\" /><text x=\"50%\" y=\"50%\" fill=\"#eceeef\"\n                                  dy=\".3em\">Thumbnail</text>\n                          </svg>\n                          <div class=\"card-body\">\n                              <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to\n                                  additional\n                                  content. This content is a little bit longer.</p>\n                              <div class=\"d-flex justify-content-between align-items-center\">\n                                  <div class=\"btn-group\">\n                                      <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">View</button>\n                                      <!-- <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">Edit</button> --\n                                  </div>\n                                  <small class=\"text-muted\">9 mins</small>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n          </div>\n\n      </div>\n  </div>\n</div>\n\n\n</div>-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/employe-components/cand-profile/cand-profile.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/employe-components/cand-profile/cand-profile.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"left\"> \n    <img src=\"{{pic}}\" alt=\"user\" width=\"150\" class=\"img-circle\">\n    <br>\n    <br>\n    <h2>{{firstName}} </h2>\n\n  </div>\n        \n  <div class=\"right\">\n\n    <div class=\"info\">\n          <h3> About Me:</h3>\n\n      <div class=\"info_data\">\n          \n           <div class=\"data\">\n            <h4>Phone</h4>\n            <p> {{telephone}}</p>\n        </div>\n        <div class=\"data\">\n          <h4>Email</h4>\n          <p>  {{email}}</p>\n        </div>\n        <div class=\"data\">\n          <h4>Address</h4>\n          <p> {{adresse}}</p>\n        </div>\n\n    </div>\n  </div>\n          \n  <div class=\"projects\">\n\n      <h3> Work:</h3>\n      <div class=\"info_data\">\n        <div class=\"data\">\n          <h4>company</h4>\n          <p> {{company}}</p>\n        </div>\n        <div class=\"data\">\n          <h4>location</h4>\n          <p> {{location}}</p>\n        </div>\n        \n        <div class=\"data\">\n          <h4>Entry date </h4>\n          <p> {{role}}</p>\n        </div>\n       \n      </div>\n      <div class=\"projects\">\n\n        <h3> Education:</h3>\n        <div class=\"info_data\">\n          <div class=\"data\">\n            <h4>schoolname</h4>\n            <p> {{schoolname}}</p>\n          </div>\n          <div class=\"data\">\n            <h4>educationlevel</h4>\n            <p> {{educationlevel}}</p>\n          </div>\n          <div class=\"data\">\n            <h4>Date</h4>\n            <p> {{startdate}} - {{enddate}}</p>\n          </div>\n        \n        </div>\n        <div class=\"projects\">\n\n          <h3> Certifications:</h3>\n          <div class=\"info_data\">\n            <div class=\"data\">\n              <h4>certificate</h4>\n              <p> {{certificate}}</p>\n            </div>\n            <div class=\"data\">\n              <h4>certificatefrom</h4>\n              <p> {{certificatefrom}}</p>\n            </div>\n            <div class=\"data\">\n              <h4>expirationDate</h4>\n              <p> {{expirationDate}}</p>\n            </div>\n          \n          </div>\n          \n        \n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/employe-components/candidate-form/can-form-popup/can-form-popup.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/employe-components/candidate-form/can-form-popup/can-form-popup.component.html ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Saved!</p>\n\n<div>\n    <button mat-raised-button style=\"margin-top:2dm\" (click)=\"onNoClick()\">Close</button>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/employe-components/candidate-form/candidate-form.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/employe-components/candidate-form/candidate-form.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n \n   <mat-toolbar-row style=\"padding: 0 5px;\">\n    <span><h2>Edit Profile</h2></span>\n  </mat-toolbar-row>\n\n  \n \n<!-- NAVBAR ENDS HERE -->\n<body>\n <mat-card-content>\t\n     <div>\n   <img src=\"{{pic}}\" alt=\"Card image\" class=\"pro_photo\" style=\"height:100px; width: 100px; outline: 1px\">\n   <br><br>\n   <div style=\"display:inline;\">\n     <input type=\"file\" style=\"display: none\" (change)=\"selectFile($event)\" #fileInput>\n     <button style=\"display:inline-block\" type=\"button\" (click)=\"fileInput.click()\">Pick File</button>\n     <span style=\"margin-left: 2em\"></span>\n     <button style=\"display:inline-block\" type=\"button\" (click)=\"uploadBotton()\">Upload File</button>\n\n   </div>\n </div>\n </mat-card-content>\t\n\n </body>\n\n<br>\n\n\n<div style=\"width: 70%; margin-left: 15%\">\n\n<mat-horizontal-stepper linear #stepper style=\" display:inline\">\n <br>\n\n \n\n<!--<button (click)=\"uploadBotton()\">Upload File</button>\n<input type=\"file\" (change)=\"selectFile($event)\">\n<br>\nput \"required\" in input-->\n <!-- <mat-step [stepControl]=\"firstFormGroup\"> -->\n <mat-step >\n     <!-- <form [formGroup]=\"firstFormGroup\">   -->\n   <form >  \n     <ng-template matStepLabel>Personal Information</ng-template>\n\n     <mat-card>\n       <table class=\"example-full-width\" cellspacing=\"2\">\n         <tr>\n           <td>\n             <mat-form-field class=\"example-full-width\" appearance=\"outline\">\n               <mat-label>First name</mat-label>\n               <!-- <input matInput formControlName=\"firstName\" required [ngModel]= \"firstName\"> \n               <input matInput placeholder=\"First name\" (ngModel) = \"firstName\" name=\"fName\"> \n             -->\n             <input matInput placeholder=\"First name\" [(ngModel)] = \"enteredFirstName\" [ngModelOptions]=\"{standalone: true}\"> \n           </mat-form-field>\n           </td>\n           <td>\n             <mat-form-field class=\"example-full-width\" appearance=\"outline\">\n               <mat-label>Last Name</mat-label>\n<!--\n               <input matInput formControlName=\"lastName\" required [ngModel]= \"lastName\"> \n               <input matInput placeholder=\"Last name\"  (ngModel) = \"lastName\" name=\"lName\">-->\n               <input matInput placeholder=\"Last name\"  [(ngModel)] = \"enteredLastName\" [ngModelOptions]=\"{standalone: true}\">\n             </mat-form-field>\n           </td>\n         </tr>\n       </table>\n\n       <mat-form-field class=\"example-full-width\" appearance=\"outline\">\n         <mat-label>Telephone</mat-label>\n         <span matPrefix>+1 &nbsp;</span>\n     <!--    <input type=\"tel\" matInput placeholder=\"555-555-1234\" formControlName=\"phone\" required [ngModel]= \"phone\"> \n     \n         <input type=\"tel\" matInput placeholder=\"555-555-1234\" (ngModel) = \"telephone\" name=\"telephone\">-->\n         <input type=\"tel\" matInput placeholder=\"555-555-1234\" [(ngModel)] = \"enteredTelephone\" [ngModelOptions]=\"{standalone: true}\">\n       </mat-form-field>\n\n       <mat-form-field class=\"example-full-width\" appearance=\"outline\">\n         <mat-label>Email</mat-label>\n         <!--<input matInput placeholder=\"Email\"  (ngModel) = \"email\" name=\"email\">-->\n         <input matInput placeholder=\"Email\"  [(ngModel)] = \"enteredEmail\" [ngModelOptions]=\"{standalone: true}\">\n       </mat-form-field>\n<!--  \n       <mat-form-field class=\"example-full-width\" appearance=\"outline\">\n         <mat-label>Address</mat-label>\n         <input matInput placeholder=\"Address\" required >\n         <input matInput placeholder=\"Address\"  (ngModel) = \"enteredAddress\" name=\"address\">\n         <input matInput placeholder=\"Address\"  [(ngModel)] = \"enteredAddress\" name=\"address\">\n       </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n         <mat-label>Title at Work</mat-label>\n         <input matInput placeholder=\"Software Engineer\">\n       </mat-form-field>  -->\n\n     </mat-card>\n     <!--<div style=\"margin-left: 8em; margin-top: 1em\">\n       <button mat-raised-button color=\"primary\" matStepperNext>Next</button>\n     </div>-->\n     <br>\n     <div class = \"example-button\">\n       <button mat-raised-button color=\"warn\" matStepperNext>Next</button>\n     </div>\n   </form>\n </mat-step>\n\n<!-- <mat-step [stepControl]=\"secondFormGroup\" errorMessage=\"Missing required fields.\"> -->\n   <mat-step>\n     <!-- <form [formGroup]=\"secondFormGroup\"> -->\n     <form>\n     <ng-template matStepLabel>Work Experience</ng-template>\n     <mat-card>\n       <table class=\"example-full-width\" cellspacing=\"2\">\n         <tr>\n           <td>\n             <mat-form-field class=\"example-full-width\" appearance=\"outline\">\n               <mat-label>Job Title</mat-label>\n               <!--<input matInput formControlName=\"jobTitle\">\n               <input matInput placeholder=\"Job Title\"  (ngModel) = \"job\" [ngModelOptions]=\"{standalone: true}\"> -->\n               <input matInput placeholder=\"Job Title\"  [(ngModel)] = \"enteredJob\" [ngModelOptions]=\"{standalone: true}\"> \n             </mat-form-field>\n           </td>\n           <td>\n             <mat-form-field class=\"example-full-width\" appearance=\"outline\">\n               <mat-label>Company</mat-label>\n              <!-- <input matInput formControlName=\"comanyExp\">\n                 <input matInput placeholder=\"Company\"  (ngModel) = \"company\" [ngModelOptions]=\"{standalone: true}\"> -->\n                 <input matInput placeholder=\"Company\"  [(ngModel)] = \"enteredCompany\" [ngModelOptions]=\"{standalone: true}\"> \n             </mat-form-field>\n           </td>\n         </tr>\n       </table>\n       <p>\n         <mat-form-field class=\"example-full-width\" appearance=\"outline\">\n           <mat-label>Location</mat-label>\n          <!-- <textarea matInput matInput formControlName=\"location\"></textarea> \n           <input matInput placeholder=\"Location\" (ngModel) = \"location\" [ngModelOptions]=\"{standalone: true}\"> -->\n           <input matInput placeholder=\"Location\" [(ngModel)] = \"enteredLocation\" [ngModelOptions]=\"{standalone: true}\">\n         </mat-form-field>\n       </p>\n\n       <table class=\"example-full-width\" cellspacing=\"2\">\n         <tr>\n           <td>\n             <mat-form-field class=\"example-full-width\" appearance=\"outline\">\n               <mat-label>From Date</mat-label>\n               <!--<input matInput type=\"date\">\n               <input matInput [matDatepicker]=\"picker1\" (ngModel)= \"fromDate\" [ngModelOptions]=\"{standalone: true}\"> -->\n               <input matInput [matDatepicker]=\"picker1\" [(ngModel)]= \"enteredFromDate\" [ngModelOptions]=\"{standalone: true}\"> \n               <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n               <mat-datepicker #picker1></mat-datepicker>\n             </mat-form-field>\n           </td>\n\n           <td>\n             <mat-checkbox >Currently, I work here</mat-checkbox>\n           </td>\n\n           <td>\n             <mat-form-field class=\"example-full-width\" appearance=\"outline\">\n               <mat-label>To Date</mat-label>\n               <!--<input matInput type=\"date\">\n               <input matInput [matDatepicker]=\"picker2\" (ngModel) = \"toDate\" [ngModelOptions]=\"{standalone: true}\">--> \n               <input matInput [matDatepicker]=\"picker2\" [(ngModel)] = \"enteredToDate\" [ngModelOptions]=\"{standalone: true}\"> \n               <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n               <mat-datepicker #picker2></mat-datepicker>\n             </mat-form-field>\n           </td>\n         </tr>\n       </table>\n\n       <p>\n         <mat-form-field class=\"example-full-width\" appearance=\"outline\">\n           <mat-label>Role Description</mat-label>\n           <!--<textarea matInput></textarea>\n           <textarea matInput placeholder=\"Role Description\" (ngModel) = \"role\" [ngModelOptions]=\"{standalone: true}\" > </textarea>-->\n           <textarea matInput placeholder=\"Role Description\" [(ngModel)] = \"enteredRole\" [ngModelOptions]=\"{standalone: true}\" > </textarea> \n         </mat-form-field>\n       </p>\n\n     </mat-card>\n<!--<div style=\"margin-left: 8em; margin-top: 1em\">\n       <button mat-raised-button color=\"primary\" matStepperPrevious>Back</button>\n       <button mat-raised-button color=\"primary\" matStepperNext>Next</button>\n     </div>-->\n     <br>\n     <div class = \"example-button\">\n       <table style=\"margin-left:auto;margin-right:auto;\">\n         <tr>\n           <td>\n           <button mat-raised-button color=\"warn\" matStepperPrevious>Back</button></td>\n           <td>\n           <button mat-raised-button color=\"warn\" matStepperNext>Next</button></td>\n         </tr>\n       </table>\n     </div>\n   </form>\n </mat-step>\n\n\n\n <!--<mat-step [stepControl]=\"thirdFormGroup\" errorMessage=\"Missing required fields.\">-->\n   <mat-step>\n     <!-- <form [formGroup]=\"thirdFormGroup\"> -->\n     <form>\n     <ng-template matStepLabel>Education</ng-template>\n     <mat-card>\n\n       <p>\n         <mat-form-field class=\"example-full-width\" appearance=\"outline\">\n           <mat-label>School Name</mat-label>\n           <!--<textarea matInput></textarea>\n           <input matInput placeholder=\"School Name\" (ngModel) = \"schoolname\" name=\"school\">-->\n           <input matInput placeholder=\"School Name\" [(ngModel)] = \"enteredSchool\" [ngModelOptions]=\"{standalone: true}\">\n         </mat-form-field>\n       </p>\n       <table class=\"example-full-width\" cellspacing=\"2\">\n         <tr>\n           <td>\n             <mat-form-field class=\"example-full-width\" appearance=\"outline\">\n               <mat-label>Education level</mat-label>\n               <!--<mat-select (ngModel) = \"educationlevel\">-->\n                 <mat-select [(ngModel)] = \"enteredEducationlevel\" [ngModelOptions]=\"{standalone: true}\">\n                 <mat-option *ngFor=\"let Education of Educations\" [value]=\"Education.value\">\n                   {{Education.viewValue}}\n                 </mat-option>\n               </mat-select>\n               </mat-form-field>\n               </td>\n               <td>\n                 <mat-form-field class=\"example-full-width\" appearance=\"outline\">\n                   <mat-label>Major</mat-label>\n                   <!-- <input matInput placeholder=\"Major\" formControlName=\"thirdCtrl\" (ngModel) = \"enteredMajor\"> \n                   <input matInput placeholder=\"Major\" (ngModel) = \"major\" name=\"majoy\">-->\n                   <input matInput placeholder=\"Major\" [(ngModel)] = \"enteredMajor\" [ngModelOptions]=\"{standalone: true}\">\n                   </mat-form-field>\n               </td>\n               </tr>\n               </table>\n       <!--<p>\n         <mat-form-field class=\"example-full-width\" appearance=\"outline\">\n           <mat-label>From</mat-label>\n           <textarea matInput></textarea>\n         </mat-form-field>\n       </p>\n\n\n       <mat-form-field class=\"example-full-width\" appearance=\"outline\">\n         <mat-label>Date</mat-label>\n         <input matInput formControlName=\"educationDate\" type=\"date\">\n       </mat-form-field>-->\n\n       <table class=\"example-full-width\" cellspacing=\"2\">\n         <tr>\n           <td>\n             <mat-form-field class=\"example-full-width\" appearance=\"outline\">\n               <mat-label>Start Date</mat-label>\n               <!--<input matInput [matDatepicker]=\"picker3\" (ngModel) = \"startdate\" [ngModelOptions]=\"{standalone: true}\">-->\n               <input matInput [matDatepicker]=\"picker3\" [(ngModel)] = \"enteredStartDate\" [ngModelOptions]=\"{standalone: true}\">\n               <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\n               <mat-datepicker #picker3></mat-datepicker>\n               </mat-form-field>\n           </td>\n\n           <td>\n             <mat-form-field class=\"example-full-width\" appearance=\"outline\">\n               <mat-label>End Date (Actual or Expected)</mat-label>\n               <!--<input matInput [matDatepicker]=\"picker4\" (ngModel) = \"enddate\" [ngModelOptions]=\"{standalone: true}\">-->\n               <input matInput [matDatepicker]=\"picker4\" [(ngModel)] = \"enteredEndDate\" [ngModelOptions]=\"{standalone: true}\"> \n               <mat-datepicker-toggle matSuffix [for]=\"picker4\"></mat-datepicker-toggle>\n               <mat-datepicker #picker4></mat-datepicker>\n               </mat-form-field>\n           </td>\n         </tr>\n       </table>\n\n     </mat-card>\n      <!--<div style=\"margin-left: 8em; margin-top: 1em\">\n       <button mat-raised-button color=\"primary\" matStepperPrevious>Back</button>\n       <button mat-raised-button color=\"primary\" matStepperNext>Next</button>\n     </div>-->\n     <br>\n     <div class = \"example-button\">\n       <table style=\"margin-left:auto;margin-right:auto;\">\n         <tr>\n           <td>\n           <button mat-raised-button color=\"warn\" matStepperPrevious>Back</button></td>\n           <td>\n           <button mat-raised-button color=\"warn\" matStepperNext>Next</button></td>\n         </tr>\n       </table>\n     </div>\n   </form>\n </mat-step>\n\n\n <!--<mat-step [stepControl]=\"forthFormGroup\" errorMessage=\"Missing required fields.\">\n   <form [formGroup]=\"forthFormGroup\">-->\n <mat-step>     \n   <form>\n     <ng-template matStepLabel>Certificates</ng-template>\n     <mat-card>\n\n       <p>\n         <mat-form-field class=\"example-full-width\" appearance=\"outline\">\n           <mat-label>Certificate Name</mat-label>\n           <!--<textarea matInput></textarea>\n           <input matInput placeholder=\"Certificate Name\" (ngModel) = \"certificate\" name=\"certificate\">-->\n           <input matInput placeholder=\"Certificate Name\" [(ngModel)] = \"enteredCertificate\" name=\"certificate\">\n         </mat-form-field>\n       </p>\n       <p>\n         <mat-form-field class=\"example-full-width\" appearance=\"outline\">\n           <mat-label>From</mat-label>\n           <!--<textarea matInput></textarea>\n           <input matInput placeholder=\"From\" (ngModel) = \"certificatefrom\" name=\"from\">-->\n\n         <input matInput placeholder=\"From\" [(ngModel)] = \"enteredCertificateFrom\" [ngModelOptions]=\"{standalone: true}\">\n           \n         </mat-form-field>\n       </p>\n\n\n       <mat-form-field class=\"example-full-width\" appearance=\"outline\"> \n         <mat-label>Expiration Date</mat-label>\n         <!--<input matInput formControlName=\"date\" type=\"date\">\n         <input matInput [matDatepicker]=\"picker5\" (ngModel) = \"expirationDate\" [ngModelOptions]=\"{standalone: true}\"> -->\n         <input matInput [matDatepicker]=\"picker5\" [(ngModel)] = \"enteredExpirationDate\" [ngModelOptions]=\"{standalone: true}\"> \n         <mat-datepicker-toggle matSuffix [for]=\"picker5\"></mat-datepicker-toggle>\n         <mat-datepicker #picker5></mat-datepicker>\n       </mat-form-field>\n\n     </mat-card>\n     <!--<div style=\"margin-left: 8em; margin-top: 1em\">\n       <button mat-raised-button color=\"primary\" matStepperPrevious>Back</button>\n       <button mat-raised-button color=\"primary\" matStepperNext>Next</button>\n     </div>-->\n     <br>\n     <div class = \"example-button\">\n       <table style=\"margin-left:auto;margin-right:auto;\">\n         <tr>\n           <td>\n           <button mat-raised-button color=\"warn\" matStepperPrevious>Back</button></td>\n           <td>\n           <button mat-raised-button color=\"warn\" matStepperNext>Next</button></td>\n         </tr>\n       </table>\n     </div>\n   </form>\n </mat-step>\n\n\n <mat-step>\n   <ng-template matStepLabel>Done</ng-template>\n   <p>You are now done!</p>\n   <!--<div style=\"margin-left: 8em; margin-top: 1em\">\n     <button mat-raised-button color=\"primary\" matStepperPrevious>Back</button>\n     <button mat-raised-button color=\"primary\" (click)=\"SaveUpdate()\">Save</button>\n   </div>-->\n   <br>\n   <div class = \"example-button\">\n     <table style=\"margin-left:auto;margin-right:auto;\">\n       <tr>\n         <td>\n         <button mat-raised-button color=\"warn\" matStepperPrevious>Back</button></td>\n         <td>\n         <button mat-raised-button color=\"warn\" (click)=\"SaveUpdate()\" >Submit</button></td>\n       </tr>\n     </table>\n   </div>\n </mat-step>\n\n\n</mat-horizontal-stepper>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/employe-components/candidature/candidature.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/employe-components/candidature/candidature.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt\" style=\"padding-top: 5%\">\n    \n    \n\n  <div class=\"col-lg-6 col-md-6 col-sm-12\" >\n    <!--  BASIC BUTTONS -->\n    <div class=\"showback\">\n      <h4><i class=\"fa fa-angle-right\"></i> Civility</h4>\n      <form class=\"form-horizontal style-form\" style=\"margin-top: 5px;\">\n      <div class=\"form-group\">\n          <label class=\"col-sm-2 col-sm-2 control-label\">First name\n          </label>\n          <div class=\"col-sm-10\">\n            <input type=\"text\" [(ngModel)]=\"candidat.prenom\" class=\"form-control\" name=\"prenom\" id=\"prenom\" placeholder=\"\"\n             minlength=\"3\" [class.is-invalid]=\"prenom.invalid && prenom.touched\"\n             #prenom=\"ngModel\" required>\n\n            <div *ngIf=\"prenom.errors && (prenom.invalid || prenom.touched)\">\n              <small class=\"text-danger\" *ngIf=\"prenom.errors.required\" [class.d-none]=\" prenom.untouched\" style=\"font-size: 11px;\"> First name is required</small>\n              <small class=\"text-danger\" *ngIf=\"prenom.errors.minlength\" [class.d-none]=\" prenom.untouched\" style=\"font-size: 11px;\"> First name must be at least 3 characters</small>\n              \n            </div>\n\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"col-sm-2 col-sm-2 control-label\">Last name</label>\n          <div class=\"col-sm-10\">\n            <input type=\"text\" [(ngModel)]=\"candidat.nom\" class=\"form-control\" name=\"nom\" id=\"nom\" placeholder=\"\"\n            minlength=\"3\" [class.is-invalid]=\"nom.invalid && nom.touched\"\n             #nom=\"ngModel\" required>\n             <div *ngIf=\"nom.errors && (nom.invalid || nom.touched)\">\n              <small class=\"text-danger\" *ngIf=\"nom.errors.required\" [class.d-none]=\" nom.untouched\" style=\"font-size: 11px;\"> Last name is required</small>\n              <small class=\"text-danger\" *ngIf=\"nom.errors.minlength\" [class.d-none]=\" nom.untouched\" style=\"font-size: 11px;\"> Last name must be at least 3 characters</small>\n              \n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"col-sm-2 col-sm-2 control-label\">Date of birth</label>\n          <div class=\"col-sm-10\">\n            <input type=\"date\" [(ngModel)]=\"candidat.dateOfBirth\" class=\"form-control\" name=\"dateOfBirth\" id=\"dateOfBirth\" placeholder=\"\"\n            required\n        #dateOfBirth=\"ngModel\"\n        [class.is-invalid]=\"dateOfBirth.invalid && dateOfBirth.touched\">\n        <small class=\"text-danger\" [class.d-none]=\"dateOfBirth.valid || dateOfBirth.untouched\" style=\"font-size: 11px;\">Date of birth is required</small>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"col-sm-2 col-sm-2 control-label\">Email</label>\n          <div class=\"col-sm-10\">\n            <input type=\"text\" [(ngModel)]=\"candidat.email\" class=\"form-control\" name=\"email\" id=\"email\" placeholder=\"\"\n            required email\n            #email=\"ngModel\"\n            [class.is-invalid]=\"email.invalid && email.touched\">\n            <div *ngIf=\"email.errors && (email.invalid || email.touched)\">\n              <small class=\"text-danger\" *ngIf=\"email.errors.required\" [class.d-none]=\" email.untouched\" style=\"font-size: 11px;\"> Email is required</small>\n              <small class=\"text-danger\" *ngIf=\"email.errors.email\" [class.d-none]=\" email.untouched\" style=\"font-size: 11px;\"> Email must be a valid email address</small>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"col-sm-2 col-sm-2 control-label\">Phone</label>\n          <div class=\"col-sm-10\">\n            <input type=\"number\" [(ngModel)]=\"candidat.phone\" class=\"form-control\" name=\"phone\" id=\"phone\" placeholder=\"\"\n            required\n        minlength=\"8\"\n        #phone=\"ngModel\"\n        \n      \n        [class.is-invalid]=\"phone.invalid && phone.touched\">\n        <div *ngIf=\"phone.errors && (phone.invalid || phone.touched)\">\n          <small class=\"text-danger\" *ngIf=\"phone.errors.required\" [class.d-none]=\" phone.untouched\" style=\"font-size: 11px;\"> Phone number is required</small>\n          <small class=\"text-danger\" *ngIf=\"phone.errors.minlength\" [class.d-none]=\" phone.untouched\" style=\"font-size: 11px;\"> Phone number must be composed of 8 numbers</small>\n        </div>\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label class=\"col-sm-2 col-sm-2 control-label\">CV</label>\n          <div class=\"col-sm-10\">\n              \n                  <div style=\"margin-top:3px\">\n                 <input type=\"file\" id=\"customFile\" class=\"form-control\" (change)=\"selectFileCV($event)\" style=\"height:100%\">\n                  </div>\n          \n          </div>\n        </div> \n\n       <!--<div class=\"form-group\">\n            <label for=\"file\">File upload</label>\n            <input type=\"file\" class=\"form-control\" accept=\"image/*\" (change)=\"onSelectFile($event)\" style=\"height:100%\">\n        </div>-->\n\n       <div class=\"form-group\">\n          <label class=\"col-sm-2 col-sm-2 control-label\">Cover letter</label>\n          <div class=\"col-sm-10\">\n              <div style=\"margin-top:3px\">\n                  <input type=\"file\" class=\"form-control\" id=\"customFile\" (change)=\"selectFileLettre($event)\" style=\"height:100%\" >\n                   </div>\n                 \n          </div>\n        </div>\n\n      </form>\n      \n    </div>\n    \n  </div>\n  <!-- /col-lg-6 -->\n  <div class=\"col-lg-6 col-md-6 col-sm-12\">\n    <!--  BUTTONS SIZES -->\n    <div class=\"showback\">\n      <h4><i class=\"fa fa-angle-right\"></i> Study level </h4>\n      <form class=\"form-horizontal style-form\" style=\"margin-top: 10px;\">\n          <div class=\"form-group\">\n              <label class=\"col-sm-2 col-sm-2 control-label\">Level</label>\n              <div class=\"col-sm-10\">\n                <input type=\"text\" [(ngModel)]=\"candidat.niveauEtud\" class=\"form-control\" name=\"niveauEtud\" id=\"niveauEtud\" placeholder=\"\"\n                required  #niveauEtud=\"ngModel\" [class.is-invalid]=\"niveauEtud.invalid && niveauEtud.touched\">\n                <small class=\"text-danger\" [class.d-none]=\"niveauEtud.valid || niveauEtud.untouched\" style=\"font-size: 11px;\">Level is required</small>\n              </div>\n          </div>\n          <div class=\"form-group\">\n              <label class=\"col-sm-2 col-sm-2 control-label\">Diploma title </label>\n              <div class=\"col-sm-10\">\n                <input type=\"text\" [(ngModel)]=\"candidat.titreDiplome\" class=\"form-control\" name=\"titreDiplome\" id=\"titreDiplome\" placeholder=\"\"\n                required  #titreDiplome=\"ngModel\" [class.is-invalid]=\"titreDiplome.invalid && titreDiplome.touched\">\n                <small class=\"text-danger\" [class.d-none]=\"titreDiplome.valid || titreDiplome.untouched\" style=\"font-size: 11px;\">Diploma title is required</small>\n              </div>\n          </div>\n          <div class=\"form-group\">\n              <label class=\"col-sm-2 col-sm-2 control-label\">Engineering school</label>\n              <div class=\"col-sm-10\">\n                <input type=\"text\" [(ngModel)]=\"candidat.university\" class=\"form-control\" name=\"university\" id=\"university\" placeholder=\"\"\n                required  #university=\"ngModel\" [class.is-invalid]=\"university.invalid && university.touched\">\n                <small class=\"text-danger\" [class.d-none]=\"university.valid || university.untouched\" style=\"font-size: 11px;\">Engineering school is required</small>\n\n              </div>\n          </div>\n      </form>\n    </div>\n    <!-- /showback -->\n    <!-- BUTTON BLOCK -->\n    <div class=\"showback\">\n      <h4><i class=\"fa fa-angle-right\"></i> Experience</h4>\n      <form class=\"form-horizontal style-form\" style=\"margin-top: 10px;\">\n          <div class=\"form-group\">\n              <label class=\"col-sm-2 col-sm-2 control-label\">Years experience</label>\n              <div class=\"col-sm-10\">\n                <input type=\"text\" [(ngModel)]=\"candidat.niveauExp\" class=\"form-control\" name=\"niveauExp\" id=\"niveauExp\" placeholder=\"\"\n                required  #niveauExp=\"ngModel\" [class.is-invalid]=\"niveauExp.invalid && niveauExp.touched\">\n                <small class=\"text-danger\" [class.d-none]=\"niveauExp.valid || niveauExp.untouched\" style=\"font-size: 11px;\">Years of experience is required</small>\n              </div>\n          </div>\n          <div class=\"form-group\">\n              <label class=\"col-sm-2 col-sm-2 control-label\">Your experiences</label>\n              <div class=\"col-sm-10\">\n                <textarea class=\"form-control\" [(ngModel)]=\"candidat.experience\" name=\"experience\" id=\"experience\" placeholder=\"\" rows=\"4\" data-rule=\"required\" data-msg=\"Please write something for us\"></textarea>\n              </div>\n          </div>\n\n      </form>\n      \n    </div>\n    <!--/showback -->\n    \n    <!-- DROPDOWN BUTTONS -->\n    \n      <button type=\"button\" class=\"btn-save\" style=\"margin-left: 200px\"(click)=\"createCandidate()\">Save</button>\n      \n      \n    \n    \n  </div>\n  <!-- /col-lg-6 -->\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/employe-components/info-employe/info-employe.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/employe-components/info-employe/info-employe.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"left\"> \n    <img src=\"http://localhost:8080/avatar/{{id}}\" alt=\"user\" width=\"150\" class=\"img-circle\">\n   \n  </div>\n  <div class=\"right\">\n\n    <div class=\"info\">\n          <h3> Contact information</h3>\n      \n        \n<div class=\"container\" *ngIf=\"currentUser; else loggedOut\">\n  <header class=\"jumbotron\">\n    <h3>\n      <strong>{{ currentUser.username }}</strong> \n    </h3>\n  </header>\n  <p>\n    <strong>Token:</strong>\n    {{ currentUser.accessToken.substring(0, 20) }} ...\n    {{ currentUser.accessToken.substr(currentUser.accessToken.length - 20) }}\n  </p>\n  <p>\n    <strong>Email:</strong>\n    {{ currentUser.email }}\n  </p>\n \n  \n</div>\n</div>\n</div>\n     \n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/employe-components/jobapp-form/jobapp-form-create/jobapp-form-create.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/employe-components/jobapp-form/jobapp-form-create/jobapp-form-create.component.html ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n     <mat-toolbar-row style=\"padding: 0 5px;\">\n      <span><h2>Job Application : {{job_title}} - {{job_company}}</h2></span>\n    </mat-toolbar-row>\n  \n \n \n <mat-horizontal-stepper labelPosition=\"bottom\" linear #stepper>\n   <!-- <mat-step [stepControl]=\"firstFormGroup\"> -->\n   <mat-step >\n     <!-- <form [formGroup]=\"firstFormGroup\">   -->\n     <form >  \n       <ng-template matStepLabel>Personal Information</ng-template>\n       <br>\n       <br>\n       <div class=\"example-container\">\n         <table class=\"example-full-width\" cellspacing=\"0\">\n \n           <tr >\n         <td><mat-form-field class=\"example-full-width\" appearance=\"outline\">\n         <mat-label>First Name</mat-label>\n         <!-- <input matInput placeholder=\"First name\" formControlName=\"firstCtrl\" [(ngModel)]= \"enteredFirstName\">  -->\n         <input matInput placeholder=\"First name\" [(ngModel)]= \"enteredFirstName\" [ngModelOptions]=\"{standalone: true}\"> \n         </mat-form-field></td>\n         <td><mat-form-field class=\"example-full-width\" appearance=\"outline\">\n         <mat-label>Last Name</mat-label>\n         <!-- <input matInput placeholder=\"Last name\" formControlName=\"firstCtrl\"  [(ngModel)]= \"enteredLastName\"> -->\n         <input matInput placeholder=\"Last name\"  [(ngModel)]= \"enteredLastName\" [ngModelOptions]=\"{standalone: true}\">\n         </mat-form-field></td>\n       </tr>\n       <tr>\n         <td><mat-form-field class=\"example-full-width\" appearance=\"outline\">\n         <mat-label>Telephone</mat-label>\n         <!-- <input matInput placeholder=\"Telephone\" formControlName=\"firstCtrl\" [(ngModel)]= \"enteredTelephone\"> -->\n         <input matInput placeholder=\"Telephone\" [(ngModel)]= \"enteredTelephone\" [ngModelOptions]=\"{standalone: true}\">\n         </mat-form-field></td>\n         <td><mat-form-field class=\"example-full-width\" appearance=\"outline\">\n         <mat-label>Email</mat-label>\n         <!-- <input matInput placeholder=\"Email\" formControlName=\"firstCtrl\" [(ngModel)]= \"enteredEmail\"> -->\n         <input matInput placeholder=\"Email\"  [(ngModel)]= \"enteredEmail\" [ngModelOptions]=\"{standalone: true}\">\n         </mat-form-field></td>\n       </tr>\n       <tr>\n         <mat-form-field class=\"example-full-width\" appearance=\"outline\">\n         <mat-label>Address</mat-label>\n         <!-- <input matInput placeholder=\"Address\" formControlName=\"firstCtrl\" [(ngModel)]= \"enteredAddress\"> -->\n         <input matInput placeholder=\"Address\"  [(ngModel)]= \"enteredAddress\" [ngModelOptions]=\"{standalone: true}\">\n         </mat-form-field>\n       </tr>\n \n       <tr>\n         <mat-form-field class=\"example-full-width\" appearance=\"outline\">\n         <mat-label>Address 2</mat-label>\n         <input matInput placeholder=\"Address 2\" [(ngModel)]= \"enteredAddress2\" [ngModelOptions]=\"{standalone: true}\"> \n         </mat-form-field>\n       </tr>\n \n       <tr>\n         <td><mat-form-field class=\"example-full-width\" appearance=\"outline\">\n         <mat-label>City</mat-label>\n         <!-- <input matInput placeholder=\"city\" formControlName=\"firstCtrl\" [(ngModel)]= \"enteredCity\">   -->\n         <input matInput placeholder=\"city\" [(ngModel)]= \"enteredCity\" [ngModelOptions]=\"{standalone: true}\">  \n     \n         </mat-form-field></td>\n \n        \n       </tr>\n       </table>\n \n         </div>\n       <div class = \"example-button\">\n         <button mat-raised-button color=\"warn\" matStepperNext>Next</button>\n       </div>\n     </form>\n   </mat-step>\n \n   <!-- <mat-step [stepControl]=\"secondFormGroup\"> -->\n   <mat-step>\n\n\n\n    <form>\n      <ng-template matStepLabel>Work Experience</ng-template>\n      <br>\n      <br>\n      <div class=\"example-container\">\n        <table class=\"example-full-width\" cellspacing=\"0\">\n\n          <tr>\n        <td>\n      <mat-form-field class=\"example-full-width\" appearance=\"outline\">\n        <mat-label>Job Title</mat-label>\n        <input matInput placeholder=\"Job Title\"  [(ngModel)]= \"enteredJob\" [ngModelOptions]=\"{standalone: true}\"> \n        </mat-form-field> </td>\n        <td>\n        <mat-form-field class=\"example-full-width\" appearance=\"outline\">\n        <mat-label>Company</mat-label>\n        <input matInput placeholder=\"Company\"  [(ngModel)]= \"enteredCompany\" [ngModelOptions]=\"{standalone: true}\"> \n        </mat-form-field></td>\n        </tr>\n        <tr>\n        <mat-form-field class=\"example-full-width\" appearance=\"outline\">\n        <mat-label>Location</mat-label>\n        <input matInput placeholder=\"Location\" [(ngModel)]= \"enteredLocation\" [ngModelOptions]=\"{standalone: true}\"> \n        </mat-form-field>\n      </tr>\n\n        <tr>\n          <td>\n        <mat-form-field class=\"example-full-width\" appearance=\"outline\">\n        <mat-label>From Date</mat-label>\n        <input matInput [matDatepicker]=\"picker1\" (ngModel)= \"enteredFromDate\" [ngModelOptions]=\"{standalone: true}\"> \n        <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n        <mat-datepicker #picker1></mat-datepicker>\n        </mat-form-field></td>\n        <td>\n        <mat-checkbox >Currently, I work here</mat-checkbox>\n      </td>\n        <td>\n        <mat-form-field class=\"example-full-width\" appearance=\"outline\">\n        <mat-label>To Date</mat-label>\n        <input matInput [matDatepicker]=\"picker2\" [(ngModel)]= \"enteredToDate\" [ngModelOptions]=\"{standalone: true}\"> \n        <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n        <mat-datepicker #picker2></mat-datepicker>\n        </mat-form-field></td>\n      </tr>\n      <tr>\n        <mat-form-field class=\"example-full-width\" appearance=\"outline\">\n        <mat-label>Role Description</mat-label>\n        <textarea matInput placeholder=\"Role Description\" [(ngModel)]= \"enteredRole\" [ngModelOptions]=\"{standalone: true}\" > </textarea>\n        </mat-form-field>\n      </tr>\n      </table>\n        </div>\n\n       \n\n     <div class = \"example-button\">\n          <table style=\"margin-left:auto;margin-right:auto;\">\n            <tr>\n              <td>\n        <button mat-raised-button color=\"warn\" matStepperPrevious>Back</button></td>\n        <td>\n        <button mat-raised-button color=\"warn\" matStepperNext>Next</button></td>\n        </tr>\n        </table>\n      </div>\n\n    </form>\n  </mat-step>\n  <mat-step>\n\n\n\n    <form>\n      <ng-template matStepLabel>Education</ng-template>\n      <br>\n      <br>\n      <div class=\"example-container\">\n        <table class=\"example-full-width\" cellspacing=\"0\">\n          <tr>\n      <mat-form-field class=\"example-full-width\" appearance=\"outline\">\n        <mat-label>School Name</mat-label>\n        <!-- <input matInput placeholder=\"School Name\" formControlName=\"thirdCtrl\" [(ngModel)]= \"enteredSchool\"> -->\n        <input matInput placeholder=\"School Name\" [(ngModel)]= \"enteredSchool\" [ngModelOptions]=\"{standalone: true}\">\n        </mat-form-field></tr>\n        <tr>\n        <mat-form-field class=\"example-full-width\" appearance=\"outline\">\n        <mat-label>Education level</mat-label>\n        <!-- <mat-select formControlName=\"thirdCtrl\" [(ngModel)]= \"enteredEducationlevel\"> -->\n        <mat-select [(ngModel)]= \"enteredEducationlevel\" [ngModelOptions]=\"{standalone: true}\">\n          <mat-option *ngFor=\"let Education of Educations\" [value]=\"Education.value\">\n            {{Education.viewValue}}\n          </mat-option>\n        </mat-select>\n        </mat-form-field>\n      </tr>\n      <tr>\n        <td>\n        <mat-form-field class=\"example-full-width\" appearance=\"outline\">\n        <mat-label>Start Date</mat-label>\n        <input matInput [matDatepicker]=\"picker3\" [(ngModel)]= \"enteredStartDate\" [ngModelOptions]=\"{standalone: true}\"> \n        <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\n        <mat-datepicker #picker3></mat-datepicker>\n        </mat-form-field>\n      </td>\n      <td>\n        <mat-form-field class=\"example-full-width\" appearance=\"outline\">\n        <mat-label>End Date (Actual or Expected)</mat-label>\n        <input matInput [matDatepicker]=\"picker4\" [(ngModel)]= \"enteredEndDate\" [ngModelOptions]=\"{standalone: true}\"> \n        <mat-datepicker-toggle matSuffix [for]=\"picker4\"></mat-datepicker-toggle>\n        <mat-datepicker #picker4></mat-datepicker>\n        </mat-form-field>\n      </td>\n      </tr>\n      <tr>\n        <td>\n        <mat-form-field class=\"example-full-width\" appearance=\"outline\">\n        <mat-label>Major</mat-label>\n        <!-- <input matInput placeholder=\"Major\" formControlName=\"thirdCtrl\" [(ngModel)]= \"enteredMajor\"> -->\n        <input matInput placeholder=\"Major\" [(ngModel)]= \"enteredMajor\" [ngModelOptions]=\"{standalone: true}\">\n        </mat-form-field>\n      </td>\n    \n      </tr>\n      <tr>\n        <mat-form-field class=\"example-full-width\" appearance=\"outline\">\n        <mat-label>Skills</mat-label>\n        <textarea matInput placeholder=\"Skills\" [(ngModel)]= \"enteredSkills\" [ngModelOptions]=\"{standalone: true}\"></textarea> \n        </mat-form-field>\n      </tr>\n     \n      </table>\n    </div>\n    <div class = \"example-button\">\n      <table style=\"margin-left:auto;margin-right:auto;\">\n        <tr>\n          <td>\n    <button mat-raised-button color=\"warn\" matStepperPrevious>Back</button></td>\n    <td>\n    <button mat-raised-button color=\"warn\" matStepperNext>Next</button></td>\n    </tr>\n    </table>\n  </div>\n  </form>\n</mat-step>\n\n<!-- <mat-step [stepControl]=\"fourthFormGroup\"> -->\n\n\n\n\n\n  <mat-step>\n    <ng-template matStepLabel>Done</ng-template>\n    <br>\n    <br>\n    <div class=\"center\"> <h2>You are now done!</h2></div>\n\n  <div class = \"example-button\">\n    <table style=\"margin-left:auto;margin-right:auto;\">\n      <tr>\n        <td>\n  <button mat-raised-button color=\"warn\" matStepperPrevious>Back</button></td>\n <!-- <td>\n    <button mat-raised-button color=\"primary\" type=\"submit\">Review</button></td>-->\n    <td>\n      <button mat-raised-button color=\"warn\" (click)=\"onAddJobapp()\" >Submit</button></td>\n  </tr>\n  </table>\n</div>\n</mat-step>\n\n</mat-horizontal-stepper>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/employe-components/jobapp-form/jobapp-form-review/jobapp-form-review.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/employe-components/jobapp-form/jobapp-form-review/jobapp-form-review.component.html ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<mat-accordion> \n    <mat-expansion-panel *ngFor = \"let jobapp of jobapps\"> \n        <mat-expansion-panel-header>\n            Review\n        </mat-expansion-panel-header>\n        <p>{{ jobapp.firstName }}</p>\n        <p>{{ jobapp.lastName }}</p>\n        <p>{{ jobapp.telephone }}</p>\n        <p>{{ jobapp.email }}</p>\n        <p>{{ jobapp.address }}</p>\n        <p>{{ jobapp.address2 }}</p>\n        <p>{{ jobapp.city }}</p>\n        <p>{{ jobapp.state }}</p>\n        <p>{{ jobapp.zipcode }}</p>\n\n        <p>{{ jobapp.job }}</p>\n        <p>{{ jobapp.company }}</p>\n        <p>{{ jobapp.location }}</p>\n        <p>{{ jobapp.fromDate }}</p>\n        <p>{{ jobapp.toDate }}</p>\n        <p>{{ jobapp.role }}</p>\n\n      <!-- <p>{{ jobapp.job2 }}</p>\n        <p>{{ jobapp.company2 }}</p>\n        <p>{{ jobapp.location2 }}</p>\n        <p>{{ jobapp.fromDate2 }}</p>\n        <p>{{ jobapp.toDate2 }}</p>\n        <p>{{ jobapp.role2 }}</p> -->\n\n  <!--      <p>{{ jobapp.schoolname }}</p>\n        <p>{{ jobapp.educationlevel }}</p>\n        <p>{{ jobapp.startdate }}</p>\n        <p>{{ jobapp.enddate }}</p>\n        <p>{{ jobapp.major }}</p>\n        <p>{{ jobapp.cumulativegpa }}</p>\n        <p>{{ jobapp.skills }}</p>\n        <p>{{ jobapp.accomplishments }}</p> \n\n        <p>{{ jobapp.sponsership }}</p>\n        <p>{{ jobapp.acknowledgment }}</p>\n        <p>{{ jobapp.gender }}</p>\n        <p>{{ jobapp.hispanic }}</p>\n        <p>{{ jobapp.veteran }}</p>\n        <p>{{ jobapp.disability }}</p> \n\n    </mat-expansion-panel>\n</mat-accordion>-->\n\n\n     "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/employe-components/jobapp-form/jobapp-form.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/employe-components/jobapp-form/jobapp-form.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\n    <app-jobapp-form-create (jobappCreated)=\"onJobappAdded($event)\"></app-jobapp-form-create>\n    <app-jobapp-form-review [jobapps]=\"storedJobapps\"></app-jobapp-form-review>\n  </main> \n\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/employe-components/jobspage/jobspage-popup/jobspage-popup.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/employe-components/jobspage/jobspage-popup/jobspage-popup.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-content>\n      <div (ngModel) = \"data\" >\n          <h3>{{data.jobTitle}}</h3>\n\n            <div *ngIf=\"!selsect\">\n              <button mat-mini-fab color=\"accent\" [ngClass]=\"{'gray' : toggle, 'red': !toggle}\" (click) = \"addFav()\" aria-label=\"Example icon-button with a heart icon\">\n                <mat-icon>favorite</mat-icon>\n              </button>\n            </div>\n\n          <p>{{data.company}}</p>\n          <p>{{data.jobType}}</p>\n          <p>{{data.location}}</p>\n          <p>Expiration Date: {{data.expirationDate}}</p>\n          <p>{{data.industryType}}</p>\n          <p>Job Description</p>\n          <p>{{data.jobDescription}}</p>\n      </div>\n</div>\n\n<div>\n  <button mat-raised-button (click)=\"onNoClick()\">Close</button>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/employe-components/jobspage/jobspage.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/employe-components/jobspage/jobspage.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<form (submit)=\"searchJob(searchForm)\" #searchForm=\"ngForm\">\n    <div class=\"example-container\">\n        <table class=\"example-full-width\" cellspacing=\"0\">\n          <tr >\n            <td>\n                <mat-form-field class=\"example-full-width\" appearance=\"outline\">\n                    <mat-label>Job Title</mat-label>\n                    <input matInput type=\"text\" placeholder=\"Job Title/Keyword\" name=\"keyword\" [(ngModel)] = \"enteredjobTitle\" [ngModelOptions]=\"{standalone: true}\">\n                </mat-form-field>\n                </td>\n    <td>\n        <mat-form-field class=\"example-full-width\" appearance=\"outline\">\n            <mat-label>Job Type</mat-label>\n            <mat-select name=\"jobType\" [(ngModel)] = \"enteredjobType\" [ngModelOptions]=\"{standalone: true}\">\n              <mat-option *ngFor=\"let jobtype of jobtypes\" [value]=\"jobtype.value\">\n                {{jobtype.viewValue}}\n              </mat-option>\n            </mat-select>\n            </mat-form-field>\n    </td>\n    <td>\n        <mat-form-field class=\"example-full-width\" appearance=\"outline\">\n            <mat-label>Location</mat-label>\n            <mat-select [(ngModel)] = \"enteredlocation\" [ngModelOptions]=\"{standalone: true}\">\n              <mat-option *ngFor=\"let location of locations\" [value]=\"location.value\">\n                {{location.viewValue}}\n              </mat-option>\n            </mat-select>\n            </mat-form-field>\n    </td>\n    <td>\n\n        <mat-form-field class=\"example-full-width\" appearance=\"outline\">\n            <mat-label>Industry</mat-label>\n            <mat-select [(ngModel)] = \"enteredindustryType\" [ngModelOptions]=\"{standalone: true}\">\n              <mat-option *ngFor=\"let industry of industries\" [value]=\"industry.value\">\n                {{industry.viewValue}}\n              </mat-option>\n            </mat-select>\n            </mat-form-field>\n    </td>\n    <td>\n        <button mat-stroked-button color=\"warn\" name=\"search\" type=\"submit\">Search</button>\n    </td>\n    </tr>\n    </table>\n    </div>\n</form>\n\n<br>\n\n<h1 style=\"font-size: 15px\">Search Result:</h1>\n\n        <table class=\"table\">\n            <thead>\n                <tr>\n                    <th><span style=\"margin-left: 20px\"></span>Job Title</th>\n                    <th><span style=\"margin-left: 20px\"></span>Job type</th>\n                    <th><span style=\"margin-left: 20px\"></span>location</th>\n                    <th><span style=\"margin-left: 20px\"></span>Industry type</th>\n                    <th><span style=\"margin-left: 20px\"></span>Company</th>\n                    <th><span style=\"margin-left: 20px\"></span>Expiration Date</th> \n                    <th><span style=\"margin-left: 20px\"></span>View</th>\n                    <th><span style=\"margin-left: 20px\"></span>Apply</th>\n                </tr>\n            </thead>\n            <tbody style=\"margin-left: 20px\">\n              <tr *ngFor=\"let j of job\">\n                <td><span style=\"margin-left: 20px\"></span>{{ j.title }}</td>\n                <td><span style=\"margin-left: 20px\"></span>{{ j.jobType }}</td>\n                <td><span style=\"margin-left: 20px\"></span>{{ j.location }}</td>\n                <td><span style=\"margin-left: 20px\"></span>{{ j.industryType }}</td>\n                <td><span style=\"margin-left: 20px\"></span>{{ j.company }}</td>\n                <td><span style=\"margin-left: 20px\"></span>{{ j.expirationDate }}</td> \n                <td><span style=\"margin-left: 20px\"></span>\n                        <button mat-raised-button color=\"warn\" (click)= \"openDialog(j)\">View</button>\n                    </td>\n                    <td><span style=\"margin-left: 20px\"></span>\n                        <button class=\"applybutton\" mat-raised-button color=\"warn\" routerLink=\"/jobappform\"  (click)=\"applyJob(j)\">Apply</button>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/employe-components/myfavjob/myfavjob-popup/myfavjob-popup.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/employe-components/myfavjob/myfavjob-popup/myfavjob-popup.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-content>\n    <div >\n        <h3>{{title}}</h3>  \n        <p>{{company}}</p>\n        <p>{{jobType}}</p>\n        <p>Expiration date: {{expirationDate}}</p>\n        <p>{{location}}</p>\n        <p>{{industryType}}</p>\n        <p>Hr info (if you want to apply, user this info) -- {{hr_id}}</p>\n        <p>Job Description: </p>\n        <p>{{jobDescription}}</p>\n    </div>\n</div>\n\n<div>\n<button mat-raised-button (click)=\"onNoClick()\">Close</button>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/employe-components/myfavjob/myfavjob.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/employe-components/myfavjob/myfavjob.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n  <mat-toolbar-row style=\"padding: 0 5px;\">\n    <span><h2>My Favorite Jobs</h2></span>\n  </mat-toolbar-row>\n\n <br>\n\n <h1 style=\"font-size: 15px\">Search Result:</h1>\n <!-- <ul *ngFor =\" let k of id_array\">\n     <li>{{k.job_title}}</li>\n </ul> -->\n\n        <table class=\"table\">\n            <thead>\n                <tr>\n                    <th><span style=\"margin-left: 20px\"></span>Job Title</th>\n                    <th><span style=\"margin-left: 20px\"></span>Job Id</th>\n                    <th><span style=\"margin-left: 20px\"></span>Job Type</th>\n                    <th><span style=\"margin-left: 20px\"></span>location</th>\n                    <th><span style=\"margin-left: 20px\"></span>Company</th>\n                    <th><span style=\"margin-left: 20px\"></span>Job Expiration Date</th> \n                    <th><span style=\"margin-left: 20px\"></span>View</th> \n                    <th><span style=\"margin-left: 20px\"></span>Apply</th> \n                    <th><span style=\"margin-left: 20px\"></span>Delete</th> \n                </tr>\n            </thead>\n            <tbody style=\"margin-left: 20px\">\n                <tr *ngFor=\"let j of id_array\">\n                    <td><span style=\"margin-left: 20px\"></span>{{ j.job_title}}</td>\n                    <td><span style=\"margin-left: 20px\"></span>{{ j.job_id }}</td> \n                    <td><span style=\"margin-left: 20px\"></span>{{ j.job_type }}</td> \n                    <td><span style=\"margin-left: 20px\"></span>{{ j.job_location }}</td>\n                    <td><span style=\"margin-left: 20px\"></span>{{ j.job_company }}</td>\n                    <td><span style=\"margin-left: 20px\"></span>{{ j.job_expirationDate }}</td>\n                    <td> <button mat-raised-button color=\"warn\" (click)= \"openDialog(j)\">View</button></td>\n                    <td> <button mat-raised-button color=\"warn\" routerLink=\"/jobappform\"  (click)=\"applyJob(j)\">Apply</button></td>\n                    <td> <button mat-raised-button color=\"warn\"  (click)=\"delete(j)\">Delete</button></td>\n                </tr>\n            </tbody>\n        </table>\n\n \n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/employe-components/offres-actuelles/offres-actuelles.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/employe-components/offres-actuelles/offres-actuelles.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt\">\n  <div class=\"col-md-12\">\n    <div class=\"content-panel\">\n      <table class=\"table table-striped table-advance table-hover\">\n        <h4><i class=\"fa fa-angle-right\"></i> Advanced Table</h4>\n        <hr>\n        <thead>\n          <tr>\n            <th><i class=\"fa fa-bullhorn\"></i> Company</th>\n            <th class=\"hidden-phone\"><i class=\"fa fa-question-circle\"></i> Descrition</th>\n            <th><i class=\"fa fa-bookmark\"></i> Profit</th>\n            <th><i class=\" fa fa-edit\"></i> Status</th>\n            <th></th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let emp of employeeService.employees\">\n            <td>\n              {{emp.name}}\n            </td>\n            <td>{{emp.position}}</td>\n            <td>{{emp.office}}</td>\n\n\n            <td><span class=\"label label-info label-mini\">Due</span></td>\n            <td>\n              <button class=\"btn btn-success btn-xs\" ><i class=\"fa fa-check\"></i></button>\n              <button class=\"btn btn-primary btn-xs\"(click)=\"onEdit(emp)\"><i class=\"fa fa-pencil\"></i></button>\n              <button class=\"btn btn-danger btn-xs\" (click)=\"onDelete(emp._id,employeeForm)\"><i class=\"fa fa-trash-o \"></i></button>\n            </td>\n          </tr>\n          "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/employe-components/update-info-employe/update-info-employe.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/employe-components/update-info-employe/update-info-employe.component.html ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" >\n\n   \n        \n    <div class=\"row\">\n\n        \n        <div class=\"col-lg-1\"></div>\n\n        <div class=\"col-lg-10\">\n            <div id=\"ui\">\n                <form (ngSubmit)=\"processForm()\">\n                <h3><i class=\"fa fa-angle-right\"></i> Informations personnelles</h3>\n                <br>\n                    \n                <div class=\"row\">\n                    <div class=\"col-lg-6\">\n                        <label for=\"fname\">Prénom</label>\n                        <input type=\"text\" name=\"prenom\" class=\"form-control\" [(ngModel)]=\"employe.prenom\">\n                    </div>\n\n                    <div class=\"col-lg-6\">\n                        <label for=\"fname\">Nom</label>\n                        <input type=\"text\" name=\"nom\" class=\"form-control\" [(ngModel)]=\"employe.nom\">\n                    </div>\n                </div>\n\n                <label for=\"fname\">email</label>\n                <input type=\"text\" name=\"email\" class=\"form-control\" [(ngModel)]=\"employe.email\">\n                \n                <div class=\"row\">\n                    <div class=\"col-lg-6\">\n                        <label for=\"fname\">Date de naissance</label>\n                        <input type=\"text\" name=\"dateOfBirth\" class=\"form-control\" [(ngModel)]=\"employe.dateOfBirth\">\n                    </div>\n\n                    <div class=\"col-lg-6\">\n                        <label for=\"fname\">Tél</label>\n                        <input type=\"text\" name=\"phone\" class=\"form-control\" [(ngModel)]=\"employe.phone\">\n                    </div>\n                </div>\n\n                <div class=\"row\">\n                    <div class=\"col-lg-8\">\n                        <label for=\"fname\">Adresse</label>\n                        <input type=\"text\" name=\"adresse\" class=\"form-control\" [(ngModel)]=\"employe.adresse\">\n                    </div>\n\n                    <div class=\"col-lg-4\">\n                        <label for=\"fname\">Ville</label>\n                        <input type=\"text\" name=\"ville\" class=\"form-control\" [(ngModel)]=\"employe.ville\">\n                    </div>\n                </div>\n\n\n               \n               \n\n                \n\n               \n\n               \n                \n                    \n                <br>\n                <br>\n                <input type=\"submit\" value=\"save\" class=\"btn\">\n\n            </form>\n            </div>\n\n        \n\n    </div>\n\n    <div class=\"col-lg-1\"></div>\n\n    </div>\n    \n        \n    \n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/home/home.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container pt-10\" style=\"margin-top: 8%\">\n  <div class=\"row\">\n    <div\n      class=\"col-sm d-flex justify-content-center align-items-start landingText mr-10\"\n    >\n      <div class=\"col ml-3\">\n        <div>\n          <p class=\"text-start\">\n            <span style=\"font-size: 28pt; \" \n              ><strong >RECRUIT <div class=\"bf\">BETTER, FASTER, AND EASIER</div>\n              </strong> </span\n            ><br />\n            <span style=\"font-size: 17pt;\">\n              <strong>Next Recruitment</strong>, is more than just an Applicant Tracking System. Combining unparalleled innovation, an intuitive and easy to use interface</span\n            >\n          </p>\n        </div>\n\n        <div>\n          <button\n            mdbBtn\n            type=\"button\"\n            (click)=\"start()\"\n            color=\"indigo\"\n            class=\"buttonText\"\n            mdbWavesEffect\n            routerLink=\"/login\"\n          >\n          Recruiter \n          </button>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm d-flex justify-content-center \">\n      <img src=\"assets/img/logo.gif\" width=\"500\" height=\"500\" style=\"margin-top: 0%;\" />\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/login/login.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form-login\">\n  <div class=\"card card-container\">\n    <h2 class=\"form-login-heading\"><strong>Sign in</strong>  </h2>\n    \n    <form\n      *ngIf=\"!isLoggedIn\"\n      name=\"form\"\n      (ngSubmit)=\"f.form.valid && onSubmit()\"\n      #f=\"ngForm\"\n      novalidate\n    >\n    <div class=\"login-wrap\">\n      <div>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          name=\"username\"\n          [(ngModel)]=\"form.username\"\n          required\n          minlength=\"3\"\n          maxlength=\"20\"\n          #username=\"ngModel\"\n          placeholder=\"Username\" autofocus=\"\"\n          [class.is-invalid]=\"username.invalid && username.touched\"\n        />\n        <div *ngIf=\"username.errors && (username.invalid || username.touched)\">\n          <small class=\"text-danger\" *ngIf=\"username.errors.required\" [class.d-none]=\" username.untouched\" style=\"font-size: 11px;\"> Username is required</small>\n          <small class=\"text-danger\" *ngIf=\"username.errors.minlength\" [class.d-none]=\" username.untouched\" style=\"font-size: 11px;\"> Username must be at least 3 characters</small>\n          <small class=\"text-danger\" *ngIf=\"username.errors.maxlength\" [class.d-none]=\" username.untouched\" style=\"font-size: 11px;\"> Username must be at most 20 characters</small>\n        </div>\n        \n      </div>\n      <br>\n      <div>\n        \n        <input\n          type=\"password\"\n          class=\"form-control\"\n          name=\"password\"\n          [(ngModel)]=\"form.password\"\n          required\n          minlength=\"6\"\n          #password=\"ngModel\"\n          [class.is-invalid]=\"password.invalid && password.touched\"\n          placeholder=\"Password\"\n        />\n\n        <div *ngIf=\"password.errors && (password.invalid || password.touched)\">\n          <small class=\"text-danger\" *ngIf=\"password.errors.required\" [class.d-none]=\" password.untouched\" style=\"font-size: 11px;\"> Password is required</small>\n          <small class=\"text-danger\" *ngIf=\"password.errors.minlength\" [class.d-none]=\" password.untouched\" style=\"font-size: 11px;\"> Password must be at least 6 characters</small>\n        </div>\n\n        \n      </div>\n      <div>\n      <div>\n      <label class=\"checkbox\">\n        <input type=\"checkbox\" value=\"remember-me\"><h3> Remember me</h3>\n        \n        </label>\n      </div>\n      </div>\n      <div>\n        <button class=\"btn btn-theme btn-block\" (click)=\"onSubmit()\" type=\"button\">\n          <i class=\"fa fa-lock\"></i> LOGIN\n        </button>\n      </div>\n        <hr>\n    \n      \n      <div class=\"form-group\">\n        <div\n          class=\"alert alert-danger\"\n          role=\"alert\"\n          *ngIf=\"f.submitted && isLoginFailed\"\n        >\n          Login failed: {{ errorMessage }}\n        </div>\n      </div>\n    </div>\n    </form>\n\n    \n  </div>\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/register/register.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/register/register.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form-login\">\n  <div class=\"card card-container\">\n    <h2 class=\"form-login-heading\"> <strong>sign up</strong></h2>\n    <form\n      *ngIf=\"!isSuccessful\"\n      name=\"form\"\n      (ngSubmit)=\"f.form.valid && onSubmit()\"\n      #f=\"ngForm\"\n      novalidate\n    >\n    <div class=\"login-wrap\">\n    \n      <div class=\"form-row\">\n       \n      <div class=\"col-6\">\n        <label for=\"fname\">Email</label>\n        <input\n          type=\"email\"\n          class=\"form-control\"\n          name=\"email\"\n          [(ngModel)]=\"form.email\"\n          placeholder=\"Email\"\n          required\n          email\n          #email=\"ngModel\"\n          \n          [class.is-invalid]=\"email.invalid && email.touched\"\n        />\n        \n        <div *ngIf=\"email.errors && (email.invalid || email.touched)\">\n          <small class=\"text-danger\" *ngIf=\"email.errors.required\" [class.d-none]=\" email.untouched\" style=\"font-size: 11px;\"> Email is required</small>\n          <small class=\"text-danger\" *ngIf=\"email.errors.email\" [class.d-none]=\" email.untouched\" style=\"font-size: 11px;\"> Email must be a valid email address</small>\n        </div>\n      </div>\n      <br>\n\n     \n\n      <div class=\"col-6\">\n        <label for=\"fname\">Date of Birth</label>\n        <input\n          type=\"Date\"\n          class=\"form-control\"\n          name=\"dateOfBirth\"\n          [(ngModel)]=\"form.dateOfBirth\"\n          placeholder=\"Date of Birth\"\n          required\n          minlength=\"6\"\n          #dateOfBirth=\"ngModel\"\n          \n          [class.is-invalid]=\"dateOfBirth.invalid && dateOfBirth.touched\"\n          \n        />\n        <small class=\"text-danger\" [class.d-none]=\"dateOfBirth.valid || dateOfBirth.untouched\" style=\"font-size: 11px;\">Date of birth is required</small>\n        \n      </div>\n\n    </div>\n      <br>\n      <div class=\"form-row\">\n      <div class=\"col-6\">\n        <label for=\"fname\">Phone</label>\n        <input\n          type=\"tel\"\n          class=\"form-control\"\n          name=\"phone\"\n          placeholder=\"phone\"\n          [(ngModel)]=\"form.phone\"\n          required\n          minlength=\"8\"\n          #phone=\"ngModel\"\n          \n          \n          [class.is-invalid]=\"phone.invalid && phone.touched\"\n          \n        />\n        <div *ngIf=\"phone.errors && (phone.invalid || phone.touched)\">\n          <small class=\"text-danger\" *ngIf=\"phone.errors.required\" [class.d-none]=\" phone.untouched\" style=\"font-size: 11px;\"> Phone number is required</small>\n          <small class=\"text-danger\" *ngIf=\"phone.errors.minlength\" [class.d-none]=\" phone.untouched\" style=\"font-size: 11px;\"> Phone number must be composed of 8 numbers</small>\n          \n        </div>\n        \n      </div>\n      <br>\n      <div class=\"col-6\">\n        <label for=\"fname\">Username</label>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          name=\"username\"\n          [(ngModel)]=\"form.username\"\n          required\n          minlength=\"3\"\n          maxlength=\"20\"\n          #username=\"ngModel\"\n          placeholder=\"username\" autofocus=\"\"\n          [class.is-invalid]=\"username.invalid && username.touched\"\n        />\n\n        <div *ngIf=\"username.errors && (username.invalid || username.touched)\">\n          <small class=\"text-danger\" *ngIf=\"username.errors.required\" [class.d-none]=\" username.untouched\" style=\"font-size: 11px;\"> Username is required</small>\n          <small class=\"text-danger\" *ngIf=\"username.errors.minlength\" [class.d-none]=\" username.untouched\" style=\"font-size: 11px;\"> Username must be at least 3 characters</small>\n          <small class=\"text-danger\" *ngIf=\"username.errors.maxlength\" [class.d-none]=\" username.untouched\" style=\"font-size: 11px;\"> Username must be at most 20 characters</small>\n        </div>\n\n      </div>\n    </div>\n      <br>\n      <div class=\"form-row\">\n      <div class=\"col-6\">\n        <label for=\"fname\">Password</label>\n        <input\n          type=\"password\"\n          class=\"form-control\"\n          name=\"password\"\n          [(ngModel)]=\"form.password\"\n          required\n          minlength=\"6\"\n          #password=\"ngModel\"\n          placeholder=\"password\"\n          [class.is-invalid]=\"password.invalid && password.touched\"\n          \n        />\n\n\n        <div *ngIf=\"password.errors && (password.invalid || password.touched)\">\n          <small class=\"text-danger\" *ngIf=\"password.errors.required\" [class.d-none]=\" password.untouched\" style=\"font-size: 11px;\"> Password is required</small>\n          <small class=\"text-danger\" *ngIf=\"password.errors.minlength\" [class.d-none]=\" password.untouched\" style=\"font-size: 11px;\"> Password must be at least 6 characters</small>\n        </div>\n\n      </div>\n      <br>\n      <div class=\"col-6\">\n        <label for=\"fname\">Confirm Password</label>\n        <input\n          type=\"password\"\n          class=\"form-control\"\n          name=\"repassword\"\n          [(ngModel)]=\"form.repassword\"\n          required\n          minlength=\"6\"\n          #repassword=\"ngModel\"\n          placeholder=\"password\"\n          [class.is-invalid]=\"repassword.invalid && repassword.touched\"\n          \n        />\n\n\n        <div *ngIf=\"repassword.errors && (repassword.invalid || repassword.touched)\">\n          <small class=\"text-danger\" *ngIf=\"repassword.errors.required\" [class.d-none]=\" repassword.untouched\" style=\"font-size: 11px;\"> Password is required</small>\n          <small class=\"text-danger\" *ngIf=\"repassword.errors.minlength\" [class.d-none]=\" repassword.untouched\" style=\"font-size: 11px;\"> Password must be at least 6 characters</small>\n        </div>\n        <div *ngIf=\"repassword.valid && repassword.value != password.value\" class=\"text-danger\">\n          The passwords entered do not match\n      </div>\n\n      </div>\n      </div>\n\n      <br>\n      <div>\n        <button class=\"btn btn-theme btn-block\" (click)=\"onSubmit()\" type=\"button\">\n          <i class=\"fa fa-lock\"></i> Sign Up</button>\n      </div>\n\n      <div class=\"alert alert-warning\" *ngIf=\"f.submitted && isSignUpFailed\">\n        Signup failed!<br />{{ errorMessage }}\n      </div>\n    </div>\n    </form>\n\n    <div class=\"success\" *ngIf=\"isSuccessful\">\n        you have successfully registered\n    </div>\n\n  </div>\n  \n\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/sidebar/sidebar.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/sidebar/sidebar.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  \n  <div>\n    <section id=\"container\">\n     \n    <app-navbar></app-navbar>\n\n  <aside *ngIf=\"isLoggedIn\">\n    \n    <div id=\"sidebar\" class=\"nav-collapse nicescroll-rails\" tabindex=\"5000\" style=\"overflow-y: scroll;  \n    outline: none; margin-left: 0px;\n    z-index: 1;\n    /* overflow-x: hidden; */\n    \n    \" > <!-- *ngIf=\"isLoggedIn\";-->\n      \n      <!-- sidebar menu start-->\n      <ul class=\"sidebar-menu\" id=\"nav-accordion\">\n        <p class=\"centered\"><a><img src=\"{{pic}}\" class=\"img-circle\" width=\"50\" ></a>\n        <h5 class=\"centered\"><h2>{{username}}</h2></h5>\n\n        <li class=\"mt\">\n          <a routerLink =\"/dashboard\" >\n            <i class=\"fa fa-tachometer\" aria-hidden=\"true\"></i>\n            <span>Dashboard</span>\n            </a>\n        </li>\n\n       \n\n        <li class=\"sub-menu dcjq-parent-li\" routerLinkActive = \"active\" *ngIf=\"showUserBoard\" >\n          <a href=\"javascript:;\">\n            <i class=\"fa fa-user\"></i>\n            <span routerLink=\"/cand-profile\"> profile</span>\n            <span class=\"dcjq-icon\"></span></a>\n    \n        </li>\n\n        <li class=\"sub-menu dcjq-parent-li\" routerLinkActive = \"active\" *ngIf=\"showUserBoard\" >\n          <a href=\"javascript:;\">\n            <i class=\"fa fa-cogs\"></i>\n            <span routerLink =\"/cand-form\">Settings\n            </span>\n            <span class=\"dcjq-icon\"></span></a>\n    \n        </li>\n        \n\n        <mat-accordion class=\"sidebar\" routerLinkActive = \"active\" *ngIf=\"showAdminBoard\" >\n          <mat-expansion-panel>\n            <mat-expansion-panel-header>\n              <mat-panel-title style=\"margin-left: -7%;margin-bottom: -3px;width: 30px;\">\n                <i class=\"fa fa-group\"></i>  <span style=\"margin-left: 7px;\">Recruiters</span>\n              </mat-panel-title>\n            </mat-expansion-panel-header>\n        \n            <div class=\"vacation-sub-menu\">\n              <li><a style= \"margin-bottom:-10px\"routerLink =\"/listEmployes\"><i class=\"fa fa-book\"></i> List of Recruiters</a></li>\n              <li><a routerLink =\"/addEmploye\"><i class=\"fa fa-group\"></i>Add Recruiters</a></li>\n            </div>\n          </mat-expansion-panel>\n        </mat-accordion>\n        <li class=\"sub-menu dcjq-parent-li\" routerLinkActive = \"active\" *ngIf=\"showModeratorBoard\" >\n          <a href=\"javascript:;\">\n            <i class=\"fa fa-user\"></i>\n            <span [routerLink] =\"['/info-employe', id]\"> profile</span>\n            <span class=\"dcjq-icon\"></span></a>\n    \n        </li>\n        <mat-accordion class=\"sidebar\" routerLinkActive = \"active\" *ngIf=\"showModeratorBoard\" >\n          <mat-expansion-panel>\n            <mat-expansion-panel-header>\n              <mat-panel-title style=\"margin-left: -7%;margin-bottom: -3px;width: 30px;\">\n                <i class=\"fa fa-desktop\"></i>  <span style=\"margin-left: 7px;\">Jobs</span>\n              </mat-panel-title>\n            </mat-expansion-panel-header>\n        \n            <div class=\"vacation-sub-menu\">\n              <li><a style= \"margin-bottom:-10px\"routerLink =\"/post-job\"><i class=\"fa fa-book\"></i> Post job </a></li>\n              <li><a routerLink =\"/view-posting\"><i class=\"fa fa-group\"></i>View Posting</a></li>\n            </div>\n          </mat-expansion-panel>\n        </mat-accordion>\n\n      \n\n       \n\n        \n        <li class=\"sub-menu dcjq-parent-li\" routerLinkActive = \"active\" *ngIf=\"showAdminBoard\"> <!--*ngIf=\"showAdminBoard\"-->\n          <a href=\"javascript:;\">\n            <i class=\"fa fa-group\"></i>\n            <span routerLink =\"/view-applicants\">View Candidate</span>\n            <span class=\"dcjq-icon\"></span></a>\n    \n        </li>\n\n        <li class=\"sub-menu dcjq-parent-li\" routerLinkActive = \"active\" *ngIf=\"showAdminBoard\">\n          <a href=\"javascript:;\">\n            <i class=\"fa fa-briefcase\"></i>\n            <span routerLink =\"/recrutement\" >Recruitment</span>\n            <span class=\"dcjq-icon\"></span></a>\n    \n        </li>\n\n        \n      \n\n        <li class=\"sub-menu dcjq-parent-li\" routerLinkActive = \"active\" *ngIf=\"showAdminBoard\">\n          <a href=\"javascript:;\">\n            <i class=\"fa fa-tasks\"></i>\n            <span routerLink =\"/todoList\">Todo List</span>\n            <span class=\"dcjq-icon\"></span></a>\n    \n        </li>\n\n\n      \n\n        <li class=\"sub-menu dcjq-parent-li\" routerLinkActive = \"active\" *ngIf=\"showAdminBoard\">\n          <a href=\"javascript:;\">\n            <i class=\"fa fa-calendar-o\"></i>\n            <span routerLink =\"/presence\">Timetracking</span>\n            <span class=\"dcjq-icon\"></span></a>\n    \n        </li>\n\n        \n\n\n\n        <mat-accordion class=\"sidebar\" routerLinkActive = \"active\" *ngIf=\"showUserBoard\" >\n          <mat-expansion-panel>\n            <mat-expansion-panel-header>\n              <mat-panel-title style=\"margin-left: -7%;margin-bottom: -3px;\">\n                <i class=\"fa fa-desktop\"></i> <span style=\"margin-left: 7px;\">offers and requests</span> \n              </mat-panel-title>\n            </mat-expansion-panel-header>\n        \n            <div class=\"vacation-sub-menu\">\n              <li><a routerLink =\"/jobspage\">Current offers</a></li>\n              <li><a routerLink =\"/myfavjob\">My Favorite Job</a></li>\n              <li><a routerLink =\"/applications\">Status</a></li>\n\n            </div>\n          </mat-expansion-panel>\n        </mat-accordion>\n\n        \n        <li class=\"sub-menu dcjq-parent-li\" routerLinkActive = \"active\" *ngIf=\"showUserBoard\" >\n          <a href=\"javascript:;\">\n            <i class=\"fa fa-calendar-o\"></i>\n            <span [routerLink] =\"['/presence-calendar', id]\">Timetracking</span>\n            <span class=\"dcjq-icon\"></span></a>\n    \n        </li>\n        \n\n        \n\n       \n\n       \n\n        <li class=\"sub-menu dcjq-parent-li\" routerLinkActive = \"active\" *ngIf=\"showAdminBoard\" >\n          <a href=\"javascript:;\">\n            <i class=\"fa fa-cogs\"></i>\n            <span routerLink =\"/hr-form\">Settings\n            </span>\n            <span class=\"dcjq-icon\"></span></a>\n    \n        </li>\n       \n\n        \n\n        <li class=\"sub-menu dcjq-parent-li\" routerLinkActive = \"active\" *ngIf=\"showModeratorBoard\">\n          <a href=\"javascript:;\"  >\n            <i class=\"fa fa-bell\"></i>\n            <span routerLink =\"/recrutement\">View Candidate</span>\n            <span class=\"dcjq-icon\"></span></a>\n    \n        </li>\n\n        <li class=\"sub-menu dcjq-parent-li\" routerLinkActive = \"active\" *ngIf=\"showModeratorBoard\">\n          <a href=\"javascript:;\">\n            <i class=\"fa fa-briefcase\"></i>\n            <span routerLink =\"/recruitment\" >Recruitment</span>\n            <span class=\"dcjq-icon\"></span></a>\n    \n        </li>\n         \n        <li class=\"sub-menu dcjq-parent-li\" routerLinkActive = \"active\" *ngIf=\"showModeratorBoard\" >\n          <a href=\"javascript:;\">\n            <i class=\"fa fa-calendar-o\"></i>\n            <span [routerLink] =\"['/presence-calendar', id]\">Timetracking</span>\n            <span class=\"dcjq-icon\"></span></a>\n    \n        </li>\n\n\n        \n\n        \n      </ul>\n      <!-- sidebar menu end-->\n    </div>\n  </aside>\n  <!--sidebar end-->\n\n  <section id=\"main-content\">\n    <section class=\"wrapper\">\n\n        <div class=\"container-fluid\">\n          <router-outlet></router-outlet>\n        </div>\n      </section>\n      </section>\n\n  </section>\n\n  </div>\n\n\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/update-profil/update-profil.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/update-profil/update-profil.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" >\n\n   \n        \n    <div class=\"row\">\n  \n        \n        <div class=\"col-lg-5\">\n        <div id=\"ui\">\n\n          <form (ngSubmit)=\"processForm()\">\n          <h3><i class=\"fa fa-angle-right\"></i> Edit your profile picture</h3>\n          <img src=\"http://localhost:8080/avatar/{{id}}\" alt=\"user\" width=\"150\" class=\"img-circle\">\n          \n            \n            <br>\n            <input class=\"select\" type=\"file\" accept=\"image/*\" (change)=\"onSelectFile($event)\">\n        \n            <br>\n            <br>\n            <input type=\"submit\" value=\"save\" class=\"btn-photo\">\n\n        </form>\n\n        </div>\n      </div>\n        <div class=\"col-lg-7\">\n            <div id=\"ui\">\n                <form (ngSubmit)=\"updatePassword()\">\n                <h3><i class=\"fa fa-angle-right\"></i> Edit your password\n                </h3>\n                <br>\n                \n  \n\n                <label for=\"fname\">Old password</label>\n              <input type=\"password\" name=\"oldPassword\" class=\"form-control\" [(ngModel)]=\"oldPassword\">\n\n                <label for=\"fname\">New password</label>\n              <input type=\"password\" name=\"newPassword\" class=\"form-control\" [(ngModel)]=\"newPassword\">\n                        \n                      \n                    \n                  \n            \n                <br>\n                <br>\n                <input type=\"submit\" value=\"save\" class=\"btn\">\n  \n            </form>\n            </div>\n  \n        \n  \n    </div>\n  \n    <div class=\"col-lg-1\"></div>\n  \n    </div>\n    \n        \n    \n  </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/navbar/navbar.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n <!--header start-->\n <header class=\"header black-bg\">\n  <div class=\"sidebar-toggle-box\">\n    <div class=\"fa fa-bars tooltips\" data-placement=\"right\" data-original-title=\"Toggle Navigation\"></div>\n  </div>\n  <!--logo start-->\n  <div class=\"logo\">\n\n  <a href=\"index.html\"  ><img src=\"assets/img/icone.png\" width=\"30%\"/></a>\n  \n  </div>\n  <!--logo end-->\n  \n  <div class=\"top-menu\">\n\n   <ul class=\"nav pull-right top-menu\" *ngIf=\"!isLoggedIn\">\n\n\n     <li>\n       <a href=\"/register\" class=\"logout\" routerLink=\"/register\">Sign Up</a>\n     </li>\n     <li>\n       <a href=\"/login\" class=\"logout\" routerLink=\"/login\">Login</a>\n     </li>\n   </ul>\n\n   \n\n    <ul class=\"nav pull-right top-menu\" *ngIf=\"isLoggedIn\">\n      <li><a class=\"logout\" (click)=\"logout()\">Logout</a></li>\n    </ul>\n  </div>\n</header>\n<!--header end-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/profil/profil.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profil/profil.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"currentUser; else loggedOut\">\n    <header class=\"jumbotron\">\n      <h3>\n        <strong>{{ currentUser.username }}</strong> Profile\n      </h3>\n    </header>\n    <p>\n      <strong>Token:</strong>\n      {{ currentUser.accessToken.substring(0, 20) }} ...\n      {{ currentUser.accessToken.substr(currentUser.accessToken.length - 20) }}\n    </p>\n    <p>\n      <strong>Email:</strong>\n      {{ currentUser.email }}\n    </p>\n    <strong>Roles:</strong>\n    <ul>\n      <li *ngFor=\"let role of currentUser.roles\">\n        {{ role }}\n      </li>\n    </ul>\n  </div>\n  \n  <ng-template #loggedOut>\n    Please login.\n  </ng-template>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/public-layout/public-layout.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/public-layout/public-layout.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-12 \">\n                <router-outlet></router-outlet>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/widgets/line/line.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/widgets/line/line.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<highcharts-chart\n[Highcharts] = \"highcharts\" \n[options] = \"chartOptions\" \nstyle = \"width: 100%; height: 400px; display: block;\">\n</highcharts-chart>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/widgets/pie/pie.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/widgets/pie/pie.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<highcharts-chart [Highcharts]=\"highcharts\" [options]=\"chartOptions\" style=\"width: 100%; display: block;\">\n</highcharts-chart>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/widgets/pie2/pie2.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/widgets/pie2/pie2.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<highcharts-chart [Highcharts]=\"highcharts\" [options]=\"chartOptions\" style=\"width: 100%; display: block;\">\n</highcharts-chart>\n\n"

/***/ }),

/***/ "./node_modules/zone.js/dist/zone.js":
/*!*******************************************!*\
  !*** ./node_modules/zone.js/dist/zone.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
* @license
* Copyright Google Inc. All Rights Reserved.
*
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://angular.io/license
*/
(function (global, factory) {
	 true ? factory() :
	undefined;
}(this, (function () { 'use strict';

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var Zone$1 = (function (global) {
    var performance = global['performance'];
    function mark(name) {
        performance && performance['mark'] && performance['mark'](name);
    }
    function performanceMeasure(name, label) {
        performance && performance['measure'] && performance['measure'](name, label);
    }
    mark('Zone');
    var checkDuplicate = global[('__zone_symbol__forceDuplicateZoneCheck')] === true;
    if (global['Zone']) {
        // if global['Zone'] already exists (maybe zone.js was already loaded or
        // some other lib also registered a global object named Zone), we may need
        // to throw an error, but sometimes user may not want this error.
        // For example,
        // we have two web pages, page1 includes zone.js, page2 doesn't.
        // and the 1st time user load page1 and page2, everything work fine,
        // but when user load page2 again, error occurs because global['Zone'] already exists.
        // so we add a flag to let user choose whether to throw this error or not.
        // By default, if existing Zone is from zone.js, we will not throw the error.
        if (checkDuplicate || typeof global['Zone'].__symbol__ !== 'function') {
            throw new Error('Zone already loaded.');
        }
        else {
            return global['Zone'];
        }
    }
    var Zone = /** @class */ (function () {
        function Zone(parent, zoneSpec) {
            this._parent = parent;
            this._name = zoneSpec ? zoneSpec.name || 'unnamed' : '<root>';
            this._properties = zoneSpec && zoneSpec.properties || {};
            this._zoneDelegate =
                new ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
        }
        Zone.assertZonePatched = function () {
            if (global['Promise'] !== patches['ZoneAwarePromise']) {
                throw new Error('Zone.js has detected that ZoneAwarePromise `(window|global).Promise` ' +
                    'has been overwritten.\n' +
                    'Most likely cause is that a Promise polyfill has been loaded ' +
                    'after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. ' +
                    'If you must load one, do so before loading zone.js.)');
            }
        };
        Object.defineProperty(Zone, "root", {
            get: function () {
                var zone = Zone.current;
                while (zone.parent) {
                    zone = zone.parent;
                }
                return zone;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Zone, "current", {
            get: function () {
                return _currentZoneFrame.zone;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Zone, "currentTask", {
            get: function () {
                return _currentTask;
            },
            enumerable: true,
            configurable: true
        });
        Zone.__load_patch = function (name, fn) {
            if (patches.hasOwnProperty(name)) {
                if (checkDuplicate) {
                    throw Error('Already loaded patch: ' + name);
                }
            }
            else if (!global['__Zone_disable_' + name]) {
                var perfName = 'Zone:' + name;
                mark(perfName);
                patches[name] = fn(global, Zone, _api);
                performanceMeasure(perfName, perfName);
            }
        };
        Object.defineProperty(Zone.prototype, "parent", {
            get: function () {
                return this._parent;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Zone.prototype, "name", {
            get: function () {
                return this._name;
            },
            enumerable: true,
            configurable: true
        });
        Zone.prototype.get = function (key) {
            var zone = this.getZoneWith(key);
            if (zone)
                return zone._properties[key];
        };
        Zone.prototype.getZoneWith = function (key) {
            var current = this;
            while (current) {
                if (current._properties.hasOwnProperty(key)) {
                    return current;
                }
                current = current._parent;
            }
            return null;
        };
        Zone.prototype.fork = function (zoneSpec) {
            if (!zoneSpec)
                throw new Error('ZoneSpec required!');
            return this._zoneDelegate.fork(this, zoneSpec);
        };
        Zone.prototype.wrap = function (callback, source) {
            if (typeof callback !== 'function') {
                throw new Error('Expecting function got: ' + callback);
            }
            var _callback = this._zoneDelegate.intercept(this, callback, source);
            var zone = this;
            return function () {
                return zone.runGuarded(_callback, this, arguments, source);
            };
        };
        Zone.prototype.run = function (callback, applyThis, applyArgs, source) {
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
            }
            finally {
                _currentZoneFrame = _currentZoneFrame.parent;
            }
        };
        Zone.prototype.runGuarded = function (callback, applyThis, applyArgs, source) {
            if (applyThis === void 0) { applyThis = null; }
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                try {
                    return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
                }
                catch (error) {
                    if (this._zoneDelegate.handleError(this, error)) {
                        throw error;
                    }
                }
            }
            finally {
                _currentZoneFrame = _currentZoneFrame.parent;
            }
        };
        Zone.prototype.runTask = function (task, applyThis, applyArgs) {
            if (task.zone != this) {
                throw new Error('A task can only be run in the zone of creation! (Creation: ' +
                    (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
            }
            // https://github.com/angular/zone.js/issues/778, sometimes eventTask
            // will run in notScheduled(canceled) state, we should not try to
            // run such kind of task but just return
            if (task.state === notScheduled && (task.type === eventTask || task.type === macroTask)) {
                return;
            }
            var reEntryGuard = task.state != running;
            reEntryGuard && task._transitionTo(running, scheduled);
            task.runCount++;
            var previousTask = _currentTask;
            _currentTask = task;
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                if (task.type == macroTask && task.data && !task.data.isPeriodic) {
                    task.cancelFn = undefined;
                }
                try {
                    return this._zoneDelegate.invokeTask(this, task, applyThis, applyArgs);
                }
                catch (error) {
                    if (this._zoneDelegate.handleError(this, error)) {
                        throw error;
                    }
                }
            }
            finally {
                // if the task's state is notScheduled or unknown, then it has already been cancelled
                // we should not reset the state to scheduled
                if (task.state !== notScheduled && task.state !== unknown) {
                    if (task.type == eventTask || (task.data && task.data.isPeriodic)) {
                        reEntryGuard && task._transitionTo(scheduled, running);
                    }
                    else {
                        task.runCount = 0;
                        this._updateTaskCount(task, -1);
                        reEntryGuard &&
                            task._transitionTo(notScheduled, running, notScheduled);
                    }
                }
                _currentZoneFrame = _currentZoneFrame.parent;
                _currentTask = previousTask;
            }
        };
        Zone.prototype.scheduleTask = function (task) {
            if (task.zone && task.zone !== this) {
                // check if the task was rescheduled, the newZone
                // should not be the children of the original zone
                var newZone = this;
                while (newZone) {
                    if (newZone === task.zone) {
                        throw Error("can not reschedule task to " + this.name + " which is descendants of the original zone " + task.zone.name);
                    }
                    newZone = newZone.parent;
                }
            }
            task._transitionTo(scheduling, notScheduled);
            var zoneDelegates = [];
            task._zoneDelegates = zoneDelegates;
            task._zone = this;
            try {
                task = this._zoneDelegate.scheduleTask(this, task);
            }
            catch (err) {
                // should set task's state to unknown when scheduleTask throw error
                // because the err may from reschedule, so the fromState maybe notScheduled
                task._transitionTo(unknown, scheduling, notScheduled);
                // TODO: @JiaLiPassion, should we check the result from handleError?
                this._zoneDelegate.handleError(this, err);
                throw err;
            }
            if (task._zoneDelegates === zoneDelegates) {
                // we have to check because internally the delegate can reschedule the task.
                this._updateTaskCount(task, 1);
            }
            if (task.state == scheduling) {
                task._transitionTo(scheduled, scheduling);
            }
            return task;
        };
        Zone.prototype.scheduleMicroTask = function (source, callback, data, customSchedule) {
            return this.scheduleTask(new ZoneTask(microTask, source, callback, data, customSchedule, undefined));
        };
        Zone.prototype.scheduleMacroTask = function (source, callback, data, customSchedule, customCancel) {
            return this.scheduleTask(new ZoneTask(macroTask, source, callback, data, customSchedule, customCancel));
        };
        Zone.prototype.scheduleEventTask = function (source, callback, data, customSchedule, customCancel) {
            return this.scheduleTask(new ZoneTask(eventTask, source, callback, data, customSchedule, customCancel));
        };
        Zone.prototype.cancelTask = function (task) {
            if (task.zone != this)
                throw new Error('A task can only be cancelled in the zone of creation! (Creation: ' +
                    (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
            task._transitionTo(canceling, scheduled, running);
            try {
                this._zoneDelegate.cancelTask(this, task);
            }
            catch (err) {
                // if error occurs when cancelTask, transit the state to unknown
                task._transitionTo(unknown, canceling);
                this._zoneDelegate.handleError(this, err);
                throw err;
            }
            this._updateTaskCount(task, -1);
            task._transitionTo(notScheduled, canceling);
            task.runCount = 0;
            return task;
        };
        Zone.prototype._updateTaskCount = function (task, count) {
            var zoneDelegates = task._zoneDelegates;
            if (count == -1) {
                task._zoneDelegates = null;
            }
            for (var i = 0; i < zoneDelegates.length; i++) {
                zoneDelegates[i]._updateTaskCount(task.type, count);
            }
        };
        Zone.__symbol__ = __symbol__;
        return Zone;
    }());
    var DELEGATE_ZS = {
        name: '',
        onHasTask: function (delegate, _, target, hasTaskState) { return delegate.hasTask(target, hasTaskState); },
        onScheduleTask: function (delegate, _, target, task) {
            return delegate.scheduleTask(target, task);
        },
        onInvokeTask: function (delegate, _, target, task, applyThis, applyArgs) {
            return delegate.invokeTask(target, task, applyThis, applyArgs);
        },
        onCancelTask: function (delegate, _, target, task) { return delegate.cancelTask(target, task); }
    };
    var ZoneDelegate = /** @class */ (function () {
        function ZoneDelegate(zone, parentDelegate, zoneSpec) {
            this._taskCounts = { 'microTask': 0, 'macroTask': 0, 'eventTask': 0 };
            this.zone = zone;
            this._parentDelegate = parentDelegate;
            this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
            this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
            this._forkCurrZone = zoneSpec && (zoneSpec.onFork ? this.zone : parentDelegate.zone);
            this._interceptZS =
                zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
            this._interceptDlgt =
                zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
            this._interceptCurrZone =
                zoneSpec && (zoneSpec.onIntercept ? this.zone : parentDelegate.zone);
            this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
            this._invokeDlgt =
                zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
            this._invokeCurrZone = zoneSpec && (zoneSpec.onInvoke ? this.zone : parentDelegate.zone);
            this._handleErrorZS =
                zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
            this._handleErrorDlgt =
                zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
            this._handleErrorCurrZone =
                zoneSpec && (zoneSpec.onHandleError ? this.zone : parentDelegate.zone);
            this._scheduleTaskZS =
                zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
            this._scheduleTaskDlgt = zoneSpec &&
                (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
            this._scheduleTaskCurrZone =
                zoneSpec && (zoneSpec.onScheduleTask ? this.zone : parentDelegate.zone);
            this._invokeTaskZS =
                zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
            this._invokeTaskDlgt =
                zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
            this._invokeTaskCurrZone =
                zoneSpec && (zoneSpec.onInvokeTask ? this.zone : parentDelegate.zone);
            this._cancelTaskZS =
                zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
            this._cancelTaskDlgt =
                zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
            this._cancelTaskCurrZone =
                zoneSpec && (zoneSpec.onCancelTask ? this.zone : parentDelegate.zone);
            this._hasTaskZS = null;
            this._hasTaskDlgt = null;
            this._hasTaskDlgtOwner = null;
            this._hasTaskCurrZone = null;
            var zoneSpecHasTask = zoneSpec && zoneSpec.onHasTask;
            var parentHasTask = parentDelegate && parentDelegate._hasTaskZS;
            if (zoneSpecHasTask || parentHasTask) {
                // If we need to report hasTask, than this ZS needs to do ref counting on tasks. In such
                // a case all task related interceptors must go through this ZD. We can't short circuit it.
                this._hasTaskZS = zoneSpecHasTask ? zoneSpec : DELEGATE_ZS;
                this._hasTaskDlgt = parentDelegate;
                this._hasTaskDlgtOwner = this;
                this._hasTaskCurrZone = zone;
                if (!zoneSpec.onScheduleTask) {
                    this._scheduleTaskZS = DELEGATE_ZS;
                    this._scheduleTaskDlgt = parentDelegate;
                    this._scheduleTaskCurrZone = this.zone;
                }
                if (!zoneSpec.onInvokeTask) {
                    this._invokeTaskZS = DELEGATE_ZS;
                    this._invokeTaskDlgt = parentDelegate;
                    this._invokeTaskCurrZone = this.zone;
                }
                if (!zoneSpec.onCancelTask) {
                    this._cancelTaskZS = DELEGATE_ZS;
                    this._cancelTaskDlgt = parentDelegate;
                    this._cancelTaskCurrZone = this.zone;
                }
            }
        }
        ZoneDelegate.prototype.fork = function (targetZone, zoneSpec) {
            return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec) :
                new Zone(targetZone, zoneSpec);
        };
        ZoneDelegate.prototype.intercept = function (targetZone, callback, source) {
            return this._interceptZS ?
                this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, targetZone, callback, source) :
                callback;
        };
        ZoneDelegate.prototype.invoke = function (targetZone, callback, applyThis, applyArgs, source) {
            return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, targetZone, callback, applyThis, applyArgs, source) :
                callback.apply(applyThis, applyArgs);
        };
        ZoneDelegate.prototype.handleError = function (targetZone, error) {
            return this._handleErrorZS ?
                this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, targetZone, error) :
                true;
        };
        ZoneDelegate.prototype.scheduleTask = function (targetZone, task) {
            var returnTask = task;
            if (this._scheduleTaskZS) {
                if (this._hasTaskZS) {
                    returnTask._zoneDelegates.push(this._hasTaskDlgtOwner);
                }
                returnTask = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, targetZone, task);
                if (!returnTask)
                    returnTask = task;
            }
            else {
                if (task.scheduleFn) {
                    task.scheduleFn(task);
                }
                else if (task.type == microTask) {
                    scheduleMicroTask(task);
                }
                else {
                    throw new Error('Task is missing scheduleFn.');
                }
            }
            return returnTask;
        };
        ZoneDelegate.prototype.invokeTask = function (targetZone, task, applyThis, applyArgs) {
            return this._invokeTaskZS ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, targetZone, task, applyThis, applyArgs) :
                task.callback.apply(applyThis, applyArgs);
        };
        ZoneDelegate.prototype.cancelTask = function (targetZone, task) {
            var value;
            if (this._cancelTaskZS) {
                value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, targetZone, task);
            }
            else {
                if (!task.cancelFn) {
                    throw Error('Task is not cancelable');
                }
                value = task.cancelFn(task);
            }
            return value;
        };
        ZoneDelegate.prototype.hasTask = function (targetZone, isEmpty) {
            // hasTask should not throw error so other ZoneDelegate
            // can still trigger hasTask callback
            try {
                this._hasTaskZS &&
                    this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, targetZone, isEmpty);
            }
            catch (err) {
                this.handleError(targetZone, err);
            }
        };
        ZoneDelegate.prototype._updateTaskCount = function (type, count) {
            var counts = this._taskCounts;
            var prev = counts[type];
            var next = counts[type] = prev + count;
            if (next < 0) {
                throw new Error('More tasks executed then were scheduled.');
            }
            if (prev == 0 || next == 0) {
                var isEmpty = {
                    microTask: counts['microTask'] > 0,
                    macroTask: counts['macroTask'] > 0,
                    eventTask: counts['eventTask'] > 0,
                    change: type
                };
                this.hasTask(this.zone, isEmpty);
            }
        };
        return ZoneDelegate;
    }());
    var ZoneTask = /** @class */ (function () {
        function ZoneTask(type, source, callback, options, scheduleFn, cancelFn) {
            this._zone = null;
            this.runCount = 0;
            this._zoneDelegates = null;
            this._state = 'notScheduled';
            this.type = type;
            this.source = source;
            this.data = options;
            this.scheduleFn = scheduleFn;
            this.cancelFn = cancelFn;
            this.callback = callback;
            var self = this;
            // TODO: @JiaLiPassion options should have interface
            if (type === eventTask && options && options.useG) {
                this.invoke = ZoneTask.invokeTask;
            }
            else {
                this.invoke = function () {
                    return ZoneTask.invokeTask.call(global, self, this, arguments);
                };
            }
        }
        ZoneTask.invokeTask = function (task, target, args) {
            if (!task) {
                task = this;
            }
            _numberOfNestedTaskFrames++;
            try {
                task.runCount++;
                return task.zone.runTask(task, target, args);
            }
            finally {
                if (_numberOfNestedTaskFrames == 1) {
                    drainMicroTaskQueue();
                }
                _numberOfNestedTaskFrames--;
            }
        };
        Object.defineProperty(ZoneTask.prototype, "zone", {
            get: function () {
                return this._zone;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ZoneTask.prototype, "state", {
            get: function () {
                return this._state;
            },
            enumerable: true,
            configurable: true
        });
        ZoneTask.prototype.cancelScheduleRequest = function () {
            this._transitionTo(notScheduled, scheduling);
        };
        ZoneTask.prototype._transitionTo = function (toState, fromState1, fromState2) {
            if (this._state === fromState1 || this._state === fromState2) {
                this._state = toState;
                if (toState == notScheduled) {
                    this._zoneDelegates = null;
                }
            }
            else {
                throw new Error(this.type + " '" + this.source + "': can not transition to '" + toState + "', expecting state '" + fromState1 + "'" + (fromState2 ? ' or \'' + fromState2 + '\'' : '') + ", was '" + this._state + "'.");
            }
        };
        ZoneTask.prototype.toString = function () {
            if (this.data && typeof this.data.handleId !== 'undefined') {
                return this.data.handleId.toString();
            }
            else {
                return Object.prototype.toString.call(this);
            }
        };
        // add toJSON method to prevent cyclic error when
        // call JSON.stringify(zoneTask)
        ZoneTask.prototype.toJSON = function () {
            return {
                type: this.type,
                state: this.state,
                source: this.source,
                zone: this.zone.name,
                runCount: this.runCount
            };
        };
        return ZoneTask;
    }());
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    ///  MICROTASK QUEUE
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    var symbolSetTimeout = __symbol__('setTimeout');
    var symbolPromise = __symbol__('Promise');
    var symbolThen = __symbol__('then');
    var _microTaskQueue = [];
    var _isDrainingMicrotaskQueue = false;
    var nativeMicroTaskQueuePromise;
    function scheduleMicroTask(task) {
        // if we are not running in any task, and there has not been anything scheduled
        // we must bootstrap the initial task creation by manually scheduling the drain
        if (_numberOfNestedTaskFrames === 0 && _microTaskQueue.length === 0) {
            // We are not running in Task, so we need to kickstart the microtask queue.
            if (!nativeMicroTaskQueuePromise) {
                if (global[symbolPromise]) {
                    nativeMicroTaskQueuePromise = global[symbolPromise].resolve(0);
                }
            }
            if (nativeMicroTaskQueuePromise) {
                var nativeThen = nativeMicroTaskQueuePromise[symbolThen];
                if (!nativeThen) {
                    // native Promise is not patchable, we need to use `then` directly
                    // issue 1078
                    nativeThen = nativeMicroTaskQueuePromise['then'];
                }
                nativeThen.call(nativeMicroTaskQueuePromise, drainMicroTaskQueue);
            }
            else {
                global[symbolSetTimeout](drainMicroTaskQueue, 0);
            }
        }
        task && _microTaskQueue.push(task);
    }
    function drainMicroTaskQueue() {
        if (!_isDrainingMicrotaskQueue) {
            _isDrainingMicrotaskQueue = true;
            while (_microTaskQueue.length) {
                var queue = _microTaskQueue;
                _microTaskQueue = [];
                for (var i = 0; i < queue.length; i++) {
                    var task = queue[i];
                    try {
                        task.zone.runTask(task, null, null);
                    }
                    catch (error) {
                        _api.onUnhandledError(error);
                    }
                }
            }
            _api.microtaskDrainDone();
            _isDrainingMicrotaskQueue = false;
        }
    }
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    ///  BOOTSTRAP
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    var NO_ZONE = { name: 'NO ZONE' };
    var notScheduled = 'notScheduled', scheduling = 'scheduling', scheduled = 'scheduled', running = 'running', canceling = 'canceling', unknown = 'unknown';
    var microTask = 'microTask', macroTask = 'macroTask', eventTask = 'eventTask';
    var patches = {};
    var _api = {
        symbol: __symbol__,
        currentZoneFrame: function () { return _currentZoneFrame; },
        onUnhandledError: noop,
        microtaskDrainDone: noop,
        scheduleMicroTask: scheduleMicroTask,
        showUncaughtError: function () { return !Zone[__symbol__('ignoreConsoleErrorUncaughtError')]; },
        patchEventTarget: function () { return []; },
        patchOnProperties: noop,
        patchMethod: function () { return noop; },
        bindArguments: function () { return []; },
        patchThen: function () { return noop; },
        patchMacroTask: function () { return noop; },
        setNativePromise: function (NativePromise) {
            // sometimes NativePromise.resolve static function
            // is not ready yet, (such as core-js/es6.promise)
            // so we need to check here.
            if (NativePromise && typeof NativePromise.resolve === 'function') {
                nativeMicroTaskQueuePromise = NativePromise.resolve(0);
            }
        },
        patchEventPrototype: function () { return noop; },
        isIEOrEdge: function () { return false; },
        getGlobalObjects: function () { return undefined; },
        ObjectDefineProperty: function () { return noop; },
        ObjectGetOwnPropertyDescriptor: function () { return undefined; },
        ObjectCreate: function () { return undefined; },
        ArraySlice: function () { return []; },
        patchClass: function () { return noop; },
        wrapWithCurrentZone: function () { return noop; },
        filterProperties: function () { return []; },
        attachOriginToPatched: function () { return noop; },
        _redefineProperty: function () { return noop; },
        patchCallbacks: function () { return noop; }
    };
    var _currentZoneFrame = { parent: null, zone: new Zone(null, null) };
    var _currentTask = null;
    var _numberOfNestedTaskFrames = 0;
    function noop() { }
    function __symbol__(name) {
        return '__zone_symbol__' + name;
    }
    performanceMeasure('Zone', 'Zone');
    return global['Zone'] = Zone;
})(typeof window !== 'undefined' && window || typeof self !== 'undefined' && self || global);

var __values = (undefined && undefined.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Zone.__load_patch('ZoneAwarePromise', function (global, Zone, api) {
    var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var ObjectDefineProperty = Object.defineProperty;
    function readableObjectToString(obj) {
        if (obj && obj.toString === Object.prototype.toString) {
            var className = obj.constructor && obj.constructor.name;
            return (className ? className : '') + ': ' + JSON.stringify(obj);
        }
        return obj ? obj.toString() : Object.prototype.toString.call(obj);
    }
    var __symbol__ = api.symbol;
    var _uncaughtPromiseErrors = [];
    var symbolPromise = __symbol__('Promise');
    var symbolThen = __symbol__('then');
    var creationTrace = '__creationTrace__';
    api.onUnhandledError = function (e) {
        if (api.showUncaughtError()) {
            var rejection = e && e.rejection;
            if (rejection) {
                console.error('Unhandled Promise rejection:', rejection instanceof Error ? rejection.message : rejection, '; Zone:', e.zone.name, '; Task:', e.task && e.task.source, '; Value:', rejection, rejection instanceof Error ? rejection.stack : undefined);
            }
            else {
                console.error(e);
            }
        }
    };
    api.microtaskDrainDone = function () {
        while (_uncaughtPromiseErrors.length) {
            var _loop_1 = function () {
                var uncaughtPromiseError = _uncaughtPromiseErrors.shift();
                try {
                    uncaughtPromiseError.zone.runGuarded(function () {
                        throw uncaughtPromiseError;
                    });
                }
                catch (error) {
                    handleUnhandledRejection(error);
                }
            };
            while (_uncaughtPromiseErrors.length) {
                _loop_1();
            }
        }
    };
    var UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL = __symbol__('unhandledPromiseRejectionHandler');
    function handleUnhandledRejection(e) {
        api.onUnhandledError(e);
        try {
            var handler = Zone[UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL];
            if (handler && typeof handler === 'function') {
                handler.call(this, e);
            }
        }
        catch (err) {
        }
    }
    function isThenable(value) {
        return value && value.then;
    }
    function forwardResolution(value) {
        return value;
    }
    function forwardRejection(rejection) {
        return ZoneAwarePromise.reject(rejection);
    }
    var symbolState = __symbol__('state');
    var symbolValue = __symbol__('value');
    var symbolFinally = __symbol__('finally');
    var symbolParentPromiseValue = __symbol__('parentPromiseValue');
    var symbolParentPromiseState = __symbol__('parentPromiseState');
    var source = 'Promise.then';
    var UNRESOLVED = null;
    var RESOLVED = true;
    var REJECTED = false;
    var REJECTED_NO_CATCH = 0;
    function makeResolver(promise, state) {
        return function (v) {
            try {
                resolvePromise(promise, state, v);
            }
            catch (err) {
                resolvePromise(promise, false, err);
            }
            // Do not return value or you will break the Promise spec.
        };
    }
    var once = function () {
        var wasCalled = false;
        return function wrapper(wrappedFunction) {
            return function () {
                if (wasCalled) {
                    return;
                }
                wasCalled = true;
                wrappedFunction.apply(null, arguments);
            };
        };
    };
    var TYPE_ERROR = 'Promise resolved with itself';
    var CURRENT_TASK_TRACE_SYMBOL = __symbol__('currentTaskTrace');
    // Promise Resolution
    function resolvePromise(promise, state, value) {
        var onceWrapper = once();
        if (promise === value) {
            throw new TypeError(TYPE_ERROR);
        }
        if (promise[symbolState] === UNRESOLVED) {
            // should only get value.then once based on promise spec.
            var then = null;
            try {
                if (typeof value === 'object' || typeof value === 'function') {
                    then = value && value.then;
                }
            }
            catch (err) {
                onceWrapper(function () {
                    resolvePromise(promise, false, err);
                })();
                return promise;
            }
            // if (value instanceof ZoneAwarePromise) {
            if (state !== REJECTED && value instanceof ZoneAwarePromise &&
                value.hasOwnProperty(symbolState) && value.hasOwnProperty(symbolValue) &&
                value[symbolState] !== UNRESOLVED) {
                clearRejectedNoCatch(value);
                resolvePromise(promise, value[symbolState], value[symbolValue]);
            }
            else if (state !== REJECTED && typeof then === 'function') {
                try {
                    then.call(value, onceWrapper(makeResolver(promise, state)), onceWrapper(makeResolver(promise, false)));
                }
                catch (err) {
                    onceWrapper(function () {
                        resolvePromise(promise, false, err);
                    })();
                }
            }
            else {
                promise[symbolState] = state;
                var queue = promise[symbolValue];
                promise[symbolValue] = value;
                if (promise[symbolFinally] === symbolFinally) {
                    // the promise is generated by Promise.prototype.finally
                    if (state === RESOLVED) {
                        // the state is resolved, should ignore the value
                        // and use parent promise value
                        promise[symbolState] = promise[symbolParentPromiseState];
                        promise[symbolValue] = promise[symbolParentPromiseValue];
                    }
                }
                // record task information in value when error occurs, so we can
                // do some additional work such as render longStackTrace
                if (state === REJECTED && value instanceof Error) {
                    // check if longStackTraceZone is here
                    var trace = Zone.currentTask && Zone.currentTask.data &&
                        Zone.currentTask.data[creationTrace];
                    if (trace) {
                        // only keep the long stack trace into error when in longStackTraceZone
                        ObjectDefineProperty(value, CURRENT_TASK_TRACE_SYMBOL, { configurable: true, enumerable: false, writable: true, value: trace });
                    }
                }
                for (var i = 0; i < queue.length;) {
                    scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
                }
                if (queue.length == 0 && state == REJECTED) {
                    promise[symbolState] = REJECTED_NO_CATCH;
                    try {
                        // try to print more readable error log
                        throw new Error('Uncaught (in promise): ' + readableObjectToString(value) +
                            (value && value.stack ? '\n' + value.stack : ''));
                    }
                    catch (err) {
                        var error_1 = err;
                        error_1.rejection = value;
                        error_1.promise = promise;
                        error_1.zone = Zone.current;
                        error_1.task = Zone.currentTask;
                        _uncaughtPromiseErrors.push(error_1);
                        api.scheduleMicroTask(); // to make sure that it is running
                    }
                }
            }
        }
        // Resolving an already resolved promise is a noop.
        return promise;
    }
    var REJECTION_HANDLED_HANDLER = __symbol__('rejectionHandledHandler');
    function clearRejectedNoCatch(promise) {
        if (promise[symbolState] === REJECTED_NO_CATCH) {
            // if the promise is rejected no catch status
            // and queue.length > 0, means there is a error handler
            // here to handle the rejected promise, we should trigger
            // windows.rejectionhandled eventHandler or nodejs rejectionHandled
            // eventHandler
            try {
                var handler = Zone[REJECTION_HANDLED_HANDLER];
                if (handler && typeof handler === 'function') {
                    handler.call(this, { rejection: promise[symbolValue], promise: promise });
                }
            }
            catch (err) {
            }
            promise[symbolState] = REJECTED;
            for (var i = 0; i < _uncaughtPromiseErrors.length; i++) {
                if (promise === _uncaughtPromiseErrors[i].promise) {
                    _uncaughtPromiseErrors.splice(i, 1);
                }
            }
        }
    }
    function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
        clearRejectedNoCatch(promise);
        var promiseState = promise[symbolState];
        var delegate = promiseState ?
            (typeof onFulfilled === 'function') ? onFulfilled : forwardResolution :
            (typeof onRejected === 'function') ? onRejected : forwardRejection;
        zone.scheduleMicroTask(source, function () {
            try {
                var parentPromiseValue = promise[symbolValue];
                var isFinallyPromise = chainPromise && symbolFinally === chainPromise[symbolFinally];
                if (isFinallyPromise) {
                    // if the promise is generated from finally call, keep parent promise's state and value
                    chainPromise[symbolParentPromiseValue] = parentPromiseValue;
                    chainPromise[symbolParentPromiseState] = promiseState;
                }
                // should not pass value to finally callback
                var value = zone.run(delegate, undefined, isFinallyPromise && delegate !== forwardRejection && delegate !== forwardResolution ?
                    [] :
                    [parentPromiseValue]);
                resolvePromise(chainPromise, true, value);
            }
            catch (error) {
                // if error occurs, should always return this error
                resolvePromise(chainPromise, false, error);
            }
        }, chainPromise);
    }
    var ZONE_AWARE_PROMISE_TO_STRING = 'function ZoneAwarePromise() { [native code] }';
    var ZoneAwarePromise = /** @class */ (function () {
        function ZoneAwarePromise(executor) {
            var promise = this;
            if (!(promise instanceof ZoneAwarePromise)) {
                throw new Error('Must be an instanceof Promise.');
            }
            promise[symbolState] = UNRESOLVED;
            promise[symbolValue] = []; // queue;
            try {
                executor && executor(makeResolver(promise, RESOLVED), makeResolver(promise, REJECTED));
            }
            catch (error) {
                resolvePromise(promise, false, error);
            }
        }
        ZoneAwarePromise.toString = function () {
            return ZONE_AWARE_PROMISE_TO_STRING;
        };
        ZoneAwarePromise.resolve = function (value) {
            return resolvePromise(new this(null), RESOLVED, value);
        };
        ZoneAwarePromise.reject = function (error) {
            return resolvePromise(new this(null), REJECTED, error);
        };
        ZoneAwarePromise.race = function (values) {
            var e_1, _a;
            var resolve;
            var reject;
            var promise = new this(function (res, rej) {
                resolve = res;
                reject = rej;
            });
            function onResolve(value) {
                resolve(value);
            }
            function onReject(error) {
                reject(error);
            }
            try {
                for (var values_1 = __values(values), values_1_1 = values_1.next(); !values_1_1.done; values_1_1 = values_1.next()) {
                    var value = values_1_1.value;
                    if (!isThenable(value)) {
                        value = this.resolve(value);
                    }
                    value.then(onResolve, onReject);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (values_1_1 && !values_1_1.done && (_a = values_1.return)) _a.call(values_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return promise;
        };
        ZoneAwarePromise.all = function (values) {
            var e_2, _a;
            var resolve;
            var reject;
            var promise = new this(function (res, rej) {
                resolve = res;
                reject = rej;
            });
            // Start at 2 to prevent prematurely resolving if .then is called immediately.
            var unresolvedCount = 2;
            var valueIndex = 0;
            var resolvedValues = [];
            var _loop_2 = function (value) {
                if (!isThenable(value)) {
                    value = this_1.resolve(value);
                }
                var curValueIndex = valueIndex;
                value.then(function (value) {
                    resolvedValues[curValueIndex] = value;
                    unresolvedCount--;
                    if (unresolvedCount === 0) {
                        resolve(resolvedValues);
                    }
                }, reject);
                unresolvedCount++;
                valueIndex++;
            };
            var this_1 = this;
            try {
                for (var values_2 = __values(values), values_2_1 = values_2.next(); !values_2_1.done; values_2_1 = values_2.next()) {
                    var value = values_2_1.value;
                    _loop_2(value);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (values_2_1 && !values_2_1.done && (_a = values_2.return)) _a.call(values_2);
                }
                finally { if (e_2) throw e_2.error; }
            }
            // Make the unresolvedCount zero-based again.
            unresolvedCount -= 2;
            if (unresolvedCount === 0) {
                resolve(resolvedValues);
            }
            return promise;
        };
        Object.defineProperty(ZoneAwarePromise.prototype, Symbol.toStringTag, {
            get: function () {
                return 'Promise';
            },
            enumerable: true,
            configurable: true
        });
        ZoneAwarePromise.prototype.then = function (onFulfilled, onRejected) {
            var chainPromise = new this.constructor(null);
            var zone = Zone.current;
            if (this[symbolState] == UNRESOLVED) {
                this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
            }
            else {
                scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
            }
            return chainPromise;
        };
        ZoneAwarePromise.prototype.catch = function (onRejected) {
            return this.then(null, onRejected);
        };
        ZoneAwarePromise.prototype.finally = function (onFinally) {
            var chainPromise = new this.constructor(null);
            chainPromise[symbolFinally] = symbolFinally;
            var zone = Zone.current;
            if (this[symbolState] == UNRESOLVED) {
                this[symbolValue].push(zone, chainPromise, onFinally, onFinally);
            }
            else {
                scheduleResolveOrReject(this, zone, chainPromise, onFinally, onFinally);
            }
            return chainPromise;
        };
        return ZoneAwarePromise;
    }());
    // Protect against aggressive optimizers dropping seemingly unused properties.
    // E.g. Closure Compiler in advanced mode.
    ZoneAwarePromise['resolve'] = ZoneAwarePromise.resolve;
    ZoneAwarePromise['reject'] = ZoneAwarePromise.reject;
    ZoneAwarePromise['race'] = ZoneAwarePromise.race;
    ZoneAwarePromise['all'] = ZoneAwarePromise.all;
    var NativePromise = global[symbolPromise] = global['Promise'];
    var ZONE_AWARE_PROMISE = Zone.__symbol__('ZoneAwarePromise');
    var desc = ObjectGetOwnPropertyDescriptor(global, 'Promise');
    if (!desc || desc.configurable) {
        desc && delete desc.writable;
        desc && delete desc.value;
        if (!desc) {
            desc = { configurable: true, enumerable: true };
        }
        desc.get = function () {
            // if we already set ZoneAwarePromise, use patched one
            // otherwise return native one.
            return global[ZONE_AWARE_PROMISE] ? global[ZONE_AWARE_PROMISE] : global[symbolPromise];
        };
        desc.set = function (NewNativePromise) {
            if (NewNativePromise === ZoneAwarePromise) {
                // if the NewNativePromise is ZoneAwarePromise
                // save to global
                global[ZONE_AWARE_PROMISE] = NewNativePromise;
            }
            else {
                // if the NewNativePromise is not ZoneAwarePromise
                // for example: after load zone.js, some library just
                // set es6-promise to global, if we set it to global
                // directly, assertZonePatched will fail and angular
                // will not loaded, so we just set the NewNativePromise
                // to global[symbolPromise], so the result is just like
                // we load ES6 Promise before zone.js
                global[symbolPromise] = NewNativePromise;
                if (!NewNativePromise.prototype[symbolThen]) {
                    patchThen(NewNativePromise);
                }
                api.setNativePromise(NewNativePromise);
            }
        };
        ObjectDefineProperty(global, 'Promise', desc);
    }
    global['Promise'] = ZoneAwarePromise;
    var symbolThenPatched = __symbol__('thenPatched');
    function patchThen(Ctor) {
        var proto = Ctor.prototype;
        var prop = ObjectGetOwnPropertyDescriptor(proto, 'then');
        if (prop && (prop.writable === false || !prop.configurable)) {
            // check Ctor.prototype.then propertyDescriptor is writable or not
            // in meteor env, writable is false, we should ignore such case
            return;
        }
        var originalThen = proto.then;
        // Keep a reference to the original method.
        proto[symbolThen] = originalThen;
        Ctor.prototype.then = function (onResolve, onReject) {
            var _this = this;
            var wrapped = new ZoneAwarePromise(function (resolve, reject) {
                originalThen.call(_this, resolve, reject);
            });
            return wrapped.then(onResolve, onReject);
        };
        Ctor[symbolThenPatched] = true;
    }
    api.patchThen = patchThen;
    function zoneify(fn) {
        return function () {
            var resultPromise = fn.apply(this, arguments);
            if (resultPromise instanceof ZoneAwarePromise) {
                return resultPromise;
            }
            var ctor = resultPromise.constructor;
            if (!ctor[symbolThenPatched]) {
                patchThen(ctor);
            }
            return resultPromise;
        };
    }
    if (NativePromise) {
        patchThen(NativePromise);
        var fetch_1 = global['fetch'];
        if (typeof fetch_1 == 'function') {
            global[api.symbol('fetch')] = fetch_1;
            global['fetch'] = zoneify(fetch_1);
        }
    }
    // This is not part of public API, but it is useful for tests, so we expose it.
    Promise[Zone.__symbol__('uncaughtPromiseErrors')] = _uncaughtPromiseErrors;
    return ZoneAwarePromise;
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Suppress closure compiler errors about unknown 'Zone' variable
 * @fileoverview
 * @suppress {undefinedVars,globalThis,missingRequire}
 */
// issue #989, to reduce bundle size, use short name
/** Object.getOwnPropertyDescriptor */
var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
/** Object.defineProperty */
var ObjectDefineProperty = Object.defineProperty;
/** Object.getPrototypeOf */
var ObjectGetPrototypeOf = Object.getPrototypeOf;
/** Object.create */
var ObjectCreate = Object.create;
/** Array.prototype.slice */
var ArraySlice = Array.prototype.slice;
/** addEventListener string const */
var ADD_EVENT_LISTENER_STR = 'addEventListener';
/** removeEventListener string const */
var REMOVE_EVENT_LISTENER_STR = 'removeEventListener';
/** zoneSymbol addEventListener */
var ZONE_SYMBOL_ADD_EVENT_LISTENER = Zone.__symbol__(ADD_EVENT_LISTENER_STR);
/** zoneSymbol removeEventListener */
var ZONE_SYMBOL_REMOVE_EVENT_LISTENER = Zone.__symbol__(REMOVE_EVENT_LISTENER_STR);
/** true string const */
var TRUE_STR = 'true';
/** false string const */
var FALSE_STR = 'false';
/** __zone_symbol__ string const */
var ZONE_SYMBOL_PREFIX = '__zone_symbol__';
function wrapWithCurrentZone(callback, source) {
    return Zone.current.wrap(callback, source);
}
function scheduleMacroTaskWithCurrentZone(source, callback, data, customSchedule, customCancel) {
    return Zone.current.scheduleMacroTask(source, callback, data, customSchedule, customCancel);
}
var zoneSymbol = Zone.__symbol__;
var isWindowExists = typeof window !== 'undefined';
var internalWindow = isWindowExists ? window : undefined;
var _global = isWindowExists && internalWindow || typeof self === 'object' && self || global;
var REMOVE_ATTRIBUTE = 'removeAttribute';
var NULL_ON_PROP_VALUE = [null];
function bindArguments(args, source) {
    for (var i = args.length - 1; i >= 0; i--) {
        if (typeof args[i] === 'function') {
            args[i] = wrapWithCurrentZone(args[i], source + '_' + i);
        }
    }
    return args;
}
function patchPrototype(prototype, fnNames) {
    var source = prototype.constructor['name'];
    var _loop_1 = function (i) {
        var name_1 = fnNames[i];
        var delegate = prototype[name_1];
        if (delegate) {
            var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, name_1);
            if (!isPropertyWritable(prototypeDesc)) {
                return "continue";
            }
            prototype[name_1] = (function (delegate) {
                var patched = function () {
                    return delegate.apply(this, bindArguments(arguments, source + '.' + name_1));
                };
                attachOriginToPatched(patched, delegate);
                return patched;
            })(delegate);
        }
    };
    for (var i = 0; i < fnNames.length; i++) {
        _loop_1(i);
    }
}
function isPropertyWritable(propertyDesc) {
    if (!propertyDesc) {
        return true;
    }
    if (propertyDesc.writable === false) {
        return false;
    }
    return !(typeof propertyDesc.get === 'function' && typeof propertyDesc.set === 'undefined');
}
var isWebWorker = (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope);
// Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
// this code.
var isNode = (!('nw' in _global) && typeof _global.process !== 'undefined' &&
    {}.toString.call(_global.process) === '[object process]');
var isBrowser = !isNode && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']);
// we are in electron of nw, so we are both browser and nodejs
// Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
// this code.
var isMix = typeof _global.process !== 'undefined' &&
    {}.toString.call(_global.process) === '[object process]' && !isWebWorker &&
    !!(isWindowExists && internalWindow['HTMLElement']);
var zoneSymbolEventNames = {};
var wrapFn = function (event) {
    // https://github.com/angular/zone.js/issues/911, in IE, sometimes
    // event will be undefined, so we need to use window.event
    event = event || _global.event;
    if (!event) {
        return;
    }
    var eventNameSymbol = zoneSymbolEventNames[event.type];
    if (!eventNameSymbol) {
        eventNameSymbol = zoneSymbolEventNames[event.type] = zoneSymbol('ON_PROPERTY' + event.type);
    }
    var target = this || event.target || _global;
    var listener = target[eventNameSymbol];
    var result;
    if (isBrowser && target === internalWindow && event.type === 'error') {
        // window.onerror have different signiture
        // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror#window.onerror
        // and onerror callback will prevent default when callback return true
        var errorEvent = event;
        result = listener &&
            listener.call(this, errorEvent.message, errorEvent.filename, errorEvent.lineno, errorEvent.colno, errorEvent.error);
        if (result === true) {
            event.preventDefault();
        }
    }
    else {
        result = listener && listener.apply(this, arguments);
        if (result != undefined && !result) {
            event.preventDefault();
        }
    }
    return result;
};
function patchProperty(obj, prop, prototype) {
    var desc = ObjectGetOwnPropertyDescriptor(obj, prop);
    if (!desc && prototype) {
        // when patch window object, use prototype to check prop exist or not
        var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, prop);
        if (prototypeDesc) {
            desc = { enumerable: true, configurable: true };
        }
    }
    // if the descriptor not exists or is not configurable
    // just return
    if (!desc || !desc.configurable) {
        return;
    }
    var onPropPatchedSymbol = zoneSymbol('on' + prop + 'patched');
    if (obj.hasOwnProperty(onPropPatchedSymbol) && obj[onPropPatchedSymbol]) {
        return;
    }
    // A property descriptor cannot have getter/setter and be writable
    // deleting the writable and value properties avoids this error:
    //
    // TypeError: property descriptors must not specify a value or be writable when a
    // getter or setter has been specified
    delete desc.writable;
    delete desc.value;
    var originalDescGet = desc.get;
    var originalDescSet = desc.set;
    // substr(2) cuz 'onclick' -> 'click', etc
    var eventName = prop.substr(2);
    var eventNameSymbol = zoneSymbolEventNames[eventName];
    if (!eventNameSymbol) {
        eventNameSymbol = zoneSymbolEventNames[eventName] = zoneSymbol('ON_PROPERTY' + eventName);
    }
    desc.set = function (newValue) {
        // in some of windows's onproperty callback, this is undefined
        // so we need to check it
        var target = this;
        if (!target && obj === _global) {
            target = _global;
        }
        if (!target) {
            return;
        }
        var previousValue = target[eventNameSymbol];
        if (previousValue) {
            target.removeEventListener(eventName, wrapFn);
        }
        // issue #978, when onload handler was added before loading zone.js
        // we should remove it with originalDescSet
        if (originalDescSet) {
            originalDescSet.apply(target, NULL_ON_PROP_VALUE);
        }
        if (typeof newValue === 'function') {
            target[eventNameSymbol] = newValue;
            target.addEventListener(eventName, wrapFn, false);
        }
        else {
            target[eventNameSymbol] = null;
        }
    };
    // The getter would return undefined for unassigned properties but the default value of an
    // unassigned property is null
    desc.get = function () {
        // in some of windows's onproperty callback, this is undefined
        // so we need to check it
        var target = this;
        if (!target && obj === _global) {
            target = _global;
        }
        if (!target) {
            return null;
        }
        var listener = target[eventNameSymbol];
        if (listener) {
            return listener;
        }
        else if (originalDescGet) {
            // result will be null when use inline event attribute,
            // such as <button onclick="func();">OK</button>
            // because the onclick function is internal raw uncompiled handler
            // the onclick will be evaluated when first time event was triggered or
            // the property is accessed, https://github.com/angular/zone.js/issues/525
            // so we should use original native get to retrieve the handler
            var value = originalDescGet && originalDescGet.call(this);
            if (value) {
                desc.set.call(this, value);
                if (typeof target[REMOVE_ATTRIBUTE] === 'function') {
                    target.removeAttribute(prop);
                }
                return value;
            }
        }
        return null;
    };
    ObjectDefineProperty(obj, prop, desc);
    obj[onPropPatchedSymbol] = true;
}
function patchOnProperties(obj, properties, prototype) {
    if (properties) {
        for (var i = 0; i < properties.length; i++) {
            patchProperty(obj, 'on' + properties[i], prototype);
        }
    }
    else {
        var onProperties = [];
        for (var prop in obj) {
            if (prop.substr(0, 2) == 'on') {
                onProperties.push(prop);
            }
        }
        for (var j = 0; j < onProperties.length; j++) {
            patchProperty(obj, onProperties[j], prototype);
        }
    }
}
var originalInstanceKey = zoneSymbol('originalInstance');
// wrap some native API on `window`
function patchClass(className) {
    var OriginalClass = _global[className];
    if (!OriginalClass)
        return;
    // keep original class in global
    _global[zoneSymbol(className)] = OriginalClass;
    _global[className] = function () {
        var a = bindArguments(arguments, className);
        switch (a.length) {
            case 0:
                this[originalInstanceKey] = new OriginalClass();
                break;
            case 1:
                this[originalInstanceKey] = new OriginalClass(a[0]);
                break;
            case 2:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
                break;
            case 3:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
                break;
            case 4:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
                break;
            default:
                throw new Error('Arg list too long.');
        }
    };
    // attach original delegate to patched function
    attachOriginToPatched(_global[className], OriginalClass);
    var instance = new OriginalClass(function () { });
    var prop;
    for (prop in instance) {
        // https://bugs.webkit.org/show_bug.cgi?id=44721
        if (className === 'XMLHttpRequest' && prop === 'responseBlob')
            continue;
        (function (prop) {
            if (typeof instance[prop] === 'function') {
                _global[className].prototype[prop] = function () {
                    return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
                };
            }
            else {
                ObjectDefineProperty(_global[className].prototype, prop, {
                    set: function (fn) {
                        if (typeof fn === 'function') {
                            this[originalInstanceKey][prop] = wrapWithCurrentZone(fn, className + '.' + prop);
                            // keep callback in wrapped function so we can
                            // use it in Function.prototype.toString to return
                            // the native one.
                            attachOriginToPatched(this[originalInstanceKey][prop], fn);
                        }
                        else {
                            this[originalInstanceKey][prop] = fn;
                        }
                    },
                    get: function () {
                        return this[originalInstanceKey][prop];
                    }
                });
            }
        }(prop));
    }
    for (prop in OriginalClass) {
        if (prop !== 'prototype' && OriginalClass.hasOwnProperty(prop)) {
            _global[className][prop] = OriginalClass[prop];
        }
    }
}
function copySymbolProperties(src, dest) {
    if (typeof Object.getOwnPropertySymbols !== 'function') {
        return;
    }
    var symbols = Object.getOwnPropertySymbols(src);
    symbols.forEach(function (symbol) {
        var desc = Object.getOwnPropertyDescriptor(src, symbol);
        Object.defineProperty(dest, symbol, {
            get: function () {
                return src[symbol];
            },
            set: function (value) {
                if (desc && (!desc.writable || typeof desc.set !== 'function')) {
                    // if src[symbol] is not writable or not have a setter, just return
                    return;
                }
                src[symbol] = value;
            },
            enumerable: desc ? desc.enumerable : true,
            configurable: desc ? desc.configurable : true
        });
    });
}
var shouldCopySymbolProperties = false;

function patchMethod(target, name, patchFn) {
    var proto = target;
    while (proto && !proto.hasOwnProperty(name)) {
        proto = ObjectGetPrototypeOf(proto);
    }
    if (!proto && target[name]) {
        // somehow we did not find it, but we can see it. This happens on IE for Window properties.
        proto = target;
    }
    var delegateName = zoneSymbol(name);
    var delegate = null;
    if (proto && !(delegate = proto[delegateName])) {
        delegate = proto[delegateName] = proto[name];
        // check whether proto[name] is writable
        // some property is readonly in safari, such as HtmlCanvasElement.prototype.toBlob
        var desc = proto && ObjectGetOwnPropertyDescriptor(proto, name);
        if (isPropertyWritable(desc)) {
            var patchDelegate_1 = patchFn(delegate, delegateName, name);
            proto[name] = function () {
                return patchDelegate_1(this, arguments);
            };
            attachOriginToPatched(proto[name], delegate);
            if (shouldCopySymbolProperties) {
                copySymbolProperties(delegate, proto[name]);
            }
        }
    }
    return delegate;
}
// TODO: @JiaLiPassion, support cancel task later if necessary
function patchMacroTask(obj, funcName, metaCreator) {
    var setNative = null;
    function scheduleTask(task) {
        var data = task.data;
        data.args[data.cbIdx] = function () {
            task.invoke.apply(this, arguments);
        };
        setNative.apply(data.target, data.args);
        return task;
    }
    setNative = patchMethod(obj, funcName, function (delegate) { return function (self, args) {
        var meta = metaCreator(self, args);
        if (meta.cbIdx >= 0 && typeof args[meta.cbIdx] === 'function') {
            return scheduleMacroTaskWithCurrentZone(meta.name, args[meta.cbIdx], meta, scheduleTask);
        }
        else {
            // cause an error by calling it directly.
            return delegate.apply(self, args);
        }
    }; });
}

function attachOriginToPatched(patched, original) {
    patched[zoneSymbol('OriginalDelegate')] = original;
}
var isDetectedIEOrEdge = false;
var ieOrEdge = false;
function isIE() {
    try {
        var ua = internalWindow.navigator.userAgent;
        if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1) {
            return true;
        }
    }
    catch (error) {
    }
    return false;
}
function isIEOrEdge() {
    if (isDetectedIEOrEdge) {
        return ieOrEdge;
    }
    isDetectedIEOrEdge = true;
    try {
        var ua = internalWindow.navigator.userAgent;
        if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1 || ua.indexOf('Edge/') !== -1) {
            ieOrEdge = true;
        }
    }
    catch (error) {
    }
    return ieOrEdge;
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// override Function.prototype.toString to make zone.js patched function
// look like native function
Zone.__load_patch('toString', function (global) {
    // patch Func.prototype.toString to let them look like native
    var originalFunctionToString = Function.prototype.toString;
    var ORIGINAL_DELEGATE_SYMBOL = zoneSymbol('OriginalDelegate');
    var PROMISE_SYMBOL = zoneSymbol('Promise');
    var ERROR_SYMBOL = zoneSymbol('Error');
    var newFunctionToString = function toString() {
        if (typeof this === 'function') {
            var originalDelegate = this[ORIGINAL_DELEGATE_SYMBOL];
            if (originalDelegate) {
                if (typeof originalDelegate === 'function') {
                    return originalFunctionToString.call(originalDelegate);
                }
                else {
                    return Object.prototype.toString.call(originalDelegate);
                }
            }
            if (this === Promise) {
                var nativePromise = global[PROMISE_SYMBOL];
                if (nativePromise) {
                    return originalFunctionToString.call(nativePromise);
                }
            }
            if (this === Error) {
                var nativeError = global[ERROR_SYMBOL];
                if (nativeError) {
                    return originalFunctionToString.call(nativeError);
                }
            }
        }
        return originalFunctionToString.call(this);
    };
    newFunctionToString[ORIGINAL_DELEGATE_SYMBOL] = originalFunctionToString;
    Function.prototype.toString = newFunctionToString;
    // patch Object.prototype.toString to let them look like native
    var originalObjectToString = Object.prototype.toString;
    var PROMISE_OBJECT_TO_STRING = '[object Promise]';
    Object.prototype.toString = function () {
        if (this instanceof Promise) {
            return PROMISE_OBJECT_TO_STRING;
        }
        return originalObjectToString.call(this);
    };
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
var passiveSupported = false;
if (typeof window !== 'undefined') {
    try {
        var options = Object.defineProperty({}, 'passive', {
            get: function () {
                passiveSupported = true;
            }
        });
        window.addEventListener('test', options, options);
        window.removeEventListener('test', options, options);
    }
    catch (err) {
        passiveSupported = false;
    }
}
// an identifier to tell ZoneTask do not create a new invoke closure
var OPTIMIZED_ZONE_EVENT_TASK_DATA = {
    useG: true
};
var zoneSymbolEventNames$1 = {};
var globalSources = {};
var EVENT_NAME_SYMBOL_REGX = /^__zone_symbol__(\w+)(true|false)$/;
var IMMEDIATE_PROPAGATION_SYMBOL = ('__zone_symbol__propagationStopped');
function patchEventTarget(_global, apis, patchOptions) {
    var ADD_EVENT_LISTENER = (patchOptions && patchOptions.add) || ADD_EVENT_LISTENER_STR;
    var REMOVE_EVENT_LISTENER = (patchOptions && patchOptions.rm) || REMOVE_EVENT_LISTENER_STR;
    var LISTENERS_EVENT_LISTENER = (patchOptions && patchOptions.listeners) || 'eventListeners';
    var REMOVE_ALL_LISTENERS_EVENT_LISTENER = (patchOptions && patchOptions.rmAll) || 'removeAllListeners';
    var zoneSymbolAddEventListener = zoneSymbol(ADD_EVENT_LISTENER);
    var ADD_EVENT_LISTENER_SOURCE = '.' + ADD_EVENT_LISTENER + ':';
    var PREPEND_EVENT_LISTENER = 'prependListener';
    var PREPEND_EVENT_LISTENER_SOURCE = '.' + PREPEND_EVENT_LISTENER + ':';
    var invokeTask = function (task, target, event) {
        // for better performance, check isRemoved which is set
        // by removeEventListener
        if (task.isRemoved) {
            return;
        }
        var delegate = task.callback;
        if (typeof delegate === 'object' && delegate.handleEvent) {
            // create the bind version of handleEvent when invoke
            task.callback = function (event) { return delegate.handleEvent(event); };
            task.originalDelegate = delegate;
        }
        // invoke static task.invoke
        task.invoke(task, target, [event]);
        var options = task.options;
        if (options && typeof options === 'object' && options.once) {
            // if options.once is true, after invoke once remove listener here
            // only browser need to do this, nodejs eventEmitter will cal removeListener
            // inside EventEmitter.once
            var delegate_1 = task.originalDelegate ? task.originalDelegate : task.callback;
            target[REMOVE_EVENT_LISTENER].call(target, event.type, delegate_1, options);
        }
    };
    // global shared zoneAwareCallback to handle all event callback with capture = false
    var globalZoneAwareCallback = function (event) {
        // https://github.com/angular/zone.js/issues/911, in IE, sometimes
        // event will be undefined, so we need to use window.event
        event = event || _global.event;
        if (!event) {
            return;
        }
        // event.target is needed for Samsung TV and SourceBuffer
        // || global is needed https://github.com/angular/zone.js/issues/190
        var target = this || event.target || _global;
        var tasks = target[zoneSymbolEventNames$1[event.type][FALSE_STR]];
        if (tasks) {
            // invoke all tasks which attached to current target with given event.type and capture = false
            // for performance concern, if task.length === 1, just invoke
            if (tasks.length === 1) {
                invokeTask(tasks[0], target, event);
            }
            else {
                // https://github.com/angular/zone.js/issues/836
                // copy the tasks array before invoke, to avoid
                // the callback will remove itself or other listener
                var copyTasks = tasks.slice();
                for (var i = 0; i < copyTasks.length; i++) {
                    if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                        break;
                    }
                    invokeTask(copyTasks[i], target, event);
                }
            }
        }
    };
    // global shared zoneAwareCallback to handle all event callback with capture = true
    var globalZoneAwareCaptureCallback = function (event) {
        // https://github.com/angular/zone.js/issues/911, in IE, sometimes
        // event will be undefined, so we need to use window.event
        event = event || _global.event;
        if (!event) {
            return;
        }
        // event.target is needed for Samsung TV and SourceBuffer
        // || global is needed https://github.com/angular/zone.js/issues/190
        var target = this || event.target || _global;
        var tasks = target[zoneSymbolEventNames$1[event.type][TRUE_STR]];
        if (tasks) {
            // invoke all tasks which attached to current target with given event.type and capture = false
            // for performance concern, if task.length === 1, just invoke
            if (tasks.length === 1) {
                invokeTask(tasks[0], target, event);
            }
            else {
                // https://github.com/angular/zone.js/issues/836
                // copy the tasks array before invoke, to avoid
                // the callback will remove itself or other listener
                var copyTasks = tasks.slice();
                for (var i = 0; i < copyTasks.length; i++) {
                    if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                        break;
                    }
                    invokeTask(copyTasks[i], target, event);
                }
            }
        }
    };
    function patchEventTargetMethods(obj, patchOptions) {
        if (!obj) {
            return false;
        }
        var useGlobalCallback = true;
        if (patchOptions && patchOptions.useG !== undefined) {
            useGlobalCallback = patchOptions.useG;
        }
        var validateHandler = patchOptions && patchOptions.vh;
        var checkDuplicate = true;
        if (patchOptions && patchOptions.chkDup !== undefined) {
            checkDuplicate = patchOptions.chkDup;
        }
        var returnTarget = false;
        if (patchOptions && patchOptions.rt !== undefined) {
            returnTarget = patchOptions.rt;
        }
        var proto = obj;
        while (proto && !proto.hasOwnProperty(ADD_EVENT_LISTENER)) {
            proto = ObjectGetPrototypeOf(proto);
        }
        if (!proto && obj[ADD_EVENT_LISTENER]) {
            // somehow we did not find it, but we can see it. This happens on IE for Window properties.
            proto = obj;
        }
        if (!proto) {
            return false;
        }
        if (proto[zoneSymbolAddEventListener]) {
            return false;
        }
        var eventNameToString = patchOptions && patchOptions.eventNameToString;
        // a shared global taskData to pass data for scheduleEventTask
        // so we do not need to create a new object just for pass some data
        var taskData = {};
        var nativeAddEventListener = proto[zoneSymbolAddEventListener] = proto[ADD_EVENT_LISTENER];
        var nativeRemoveEventListener = proto[zoneSymbol(REMOVE_EVENT_LISTENER)] =
            proto[REMOVE_EVENT_LISTENER];
        var nativeListeners = proto[zoneSymbol(LISTENERS_EVENT_LISTENER)] =
            proto[LISTENERS_EVENT_LISTENER];
        var nativeRemoveAllListeners = proto[zoneSymbol(REMOVE_ALL_LISTENERS_EVENT_LISTENER)] =
            proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER];
        var nativePrependEventListener;
        if (patchOptions && patchOptions.prepend) {
            nativePrependEventListener = proto[zoneSymbol(patchOptions.prepend)] =
                proto[patchOptions.prepend];
        }
        function checkIsPassive(task) {
            if (!passiveSupported && typeof taskData.options !== 'boolean' &&
                typeof taskData.options !== 'undefined' && taskData.options !== null) {
                // options is a non-null non-undefined object
                // passive is not supported
                // don't pass options as object
                // just pass capture as a boolean
                task.options = !!taskData.options.capture;
                taskData.options = task.options;
            }
        }
        var customScheduleGlobal = function (task) {
            // if there is already a task for the eventName + capture,
            // just return, because we use the shared globalZoneAwareCallback here.
            if (taskData.isExisting) {
                return;
            }
            checkIsPassive(task);
            return nativeAddEventListener.call(taskData.target, taskData.eventName, taskData.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, taskData.options);
        };
        var customCancelGlobal = function (task) {
            // if task is not marked as isRemoved, this call is directly
            // from Zone.prototype.cancelTask, we should remove the task
            // from tasksList of target first
            if (!task.isRemoved) {
                var symbolEventNames = zoneSymbolEventNames$1[task.eventName];
                var symbolEventName = void 0;
                if (symbolEventNames) {
                    symbolEventName = symbolEventNames[task.capture ? TRUE_STR : FALSE_STR];
                }
                var existingTasks = symbolEventName && task.target[symbolEventName];
                if (existingTasks) {
                    for (var i = 0; i < existingTasks.length; i++) {
                        var existingTask = existingTasks[i];
                        if (existingTask === task) {
                            existingTasks.splice(i, 1);
                            // set isRemoved to data for faster invokeTask check
                            task.isRemoved = true;
                            if (existingTasks.length === 0) {
                                // all tasks for the eventName + capture have gone,
                                // remove globalZoneAwareCallback and remove the task cache from target
                                task.allRemoved = true;
                                task.target[symbolEventName] = null;
                            }
                            break;
                        }
                    }
                }
            }
            // if all tasks for the eventName + capture have gone,
            // we will really remove the global event callback,
            // if not, return
            if (!task.allRemoved) {
                return;
            }
            return nativeRemoveEventListener.call(task.target, task.eventName, task.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, task.options);
        };
        var customScheduleNonGlobal = function (task) {
            checkIsPassive(task);
            return nativeAddEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
        };
        var customSchedulePrepend = function (task) {
            return nativePrependEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
        };
        var customCancelNonGlobal = function (task) {
            return nativeRemoveEventListener.call(task.target, task.eventName, task.invoke, task.options);
        };
        var customSchedule = useGlobalCallback ? customScheduleGlobal : customScheduleNonGlobal;
        var customCancel = useGlobalCallback ? customCancelGlobal : customCancelNonGlobal;
        var compareTaskCallbackVsDelegate = function (task, delegate) {
            var typeOfDelegate = typeof delegate;
            return (typeOfDelegate === 'function' && task.callback === delegate) ||
                (typeOfDelegate === 'object' && task.originalDelegate === delegate);
        };
        var compare = (patchOptions && patchOptions.diff) ? patchOptions.diff : compareTaskCallbackVsDelegate;
        var blackListedEvents = Zone[Zone.__symbol__('BLACK_LISTED_EVENTS')];
        var makeAddListener = function (nativeListener, addSource, customScheduleFn, customCancelFn, returnTarget, prepend) {
            if (returnTarget === void 0) { returnTarget = false; }
            if (prepend === void 0) { prepend = false; }
            return function () {
                var target = this || _global;
                var eventName = arguments[0];
                var delegate = arguments[1];
                if (!delegate) {
                    return nativeListener.apply(this, arguments);
                }
                if (isNode && eventName === 'uncaughtException') {
                    // don't patch uncaughtException of nodejs to prevent endless loop
                    return nativeListener.apply(this, arguments);
                }
                // don't create the bind delegate function for handleEvent
                // case here to improve addEventListener performance
                // we will create the bind delegate when invoke
                var isHandleEvent = false;
                if (typeof delegate !== 'function') {
                    if (!delegate.handleEvent) {
                        return nativeListener.apply(this, arguments);
                    }
                    isHandleEvent = true;
                }
                if (validateHandler && !validateHandler(nativeListener, delegate, target, arguments)) {
                    return;
                }
                var options = arguments[2];
                if (blackListedEvents) {
                    // check black list
                    for (var i = 0; i < blackListedEvents.length; i++) {
                        if (eventName === blackListedEvents[i]) {
                            return nativeListener.apply(this, arguments);
                        }
                    }
                }
                var capture;
                var once = false;
                if (options === undefined) {
                    capture = false;
                }
                else if (options === true) {
                    capture = true;
                }
                else if (options === false) {
                    capture = false;
                }
                else {
                    capture = options ? !!options.capture : false;
                    once = options ? !!options.once : false;
                }
                var zone = Zone.current;
                var symbolEventNames = zoneSymbolEventNames$1[eventName];
                var symbolEventName;
                if (!symbolEventNames) {
                    // the code is duplicate, but I just want to get some better performance
                    var falseEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + FALSE_STR;
                    var trueEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + TRUE_STR;
                    var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
                    var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
                    zoneSymbolEventNames$1[eventName] = {};
                    zoneSymbolEventNames$1[eventName][FALSE_STR] = symbol;
                    zoneSymbolEventNames$1[eventName][TRUE_STR] = symbolCapture;
                    symbolEventName = capture ? symbolCapture : symbol;
                }
                else {
                    symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
                }
                var existingTasks = target[symbolEventName];
                var isExisting = false;
                if (existingTasks) {
                    // already have task registered
                    isExisting = true;
                    if (checkDuplicate) {
                        for (var i = 0; i < existingTasks.length; i++) {
                            if (compare(existingTasks[i], delegate)) {
                                // same callback, same capture, same event name, just return
                                return;
                            }
                        }
                    }
                }
                else {
                    existingTasks = target[symbolEventName] = [];
                }
                var source;
                var constructorName = target.constructor['name'];
                var targetSource = globalSources[constructorName];
                if (targetSource) {
                    source = targetSource[eventName];
                }
                if (!source) {
                    source = constructorName + addSource +
                        (eventNameToString ? eventNameToString(eventName) : eventName);
                }
                // do not create a new object as task.data to pass those things
                // just use the global shared one
                taskData.options = options;
                if (once) {
                    // if addEventListener with once options, we don't pass it to
                    // native addEventListener, instead we keep the once setting
                    // and handle ourselves.
                    taskData.options.once = false;
                }
                taskData.target = target;
                taskData.capture = capture;
                taskData.eventName = eventName;
                taskData.isExisting = isExisting;
                var data = useGlobalCallback ? OPTIMIZED_ZONE_EVENT_TASK_DATA : undefined;
                // keep taskData into data to allow onScheduleEventTask to access the task information
                if (data) {
                    data.taskData = taskData;
                }
                var task = zone.scheduleEventTask(source, delegate, data, customScheduleFn, customCancelFn);
                // should clear taskData.target to avoid memory leak
                // issue, https://github.com/angular/angular/issues/20442
                taskData.target = null;
                // need to clear up taskData because it is a global object
                if (data) {
                    data.taskData = null;
                }
                // have to save those information to task in case
                // application may call task.zone.cancelTask() directly
                if (once) {
                    options.once = true;
                }
                if (!(!passiveSupported && typeof task.options === 'boolean')) {
                    // if not support passive, and we pass an option object
                    // to addEventListener, we should save the options to task
                    task.options = options;
                }
                task.target = target;
                task.capture = capture;
                task.eventName = eventName;
                if (isHandleEvent) {
                    // save original delegate for compare to check duplicate
                    task.originalDelegate = delegate;
                }
                if (!prepend) {
                    existingTasks.push(task);
                }
                else {
                    existingTasks.unshift(task);
                }
                if (returnTarget) {
                    return target;
                }
            };
        };
        proto[ADD_EVENT_LISTENER] = makeAddListener(nativeAddEventListener, ADD_EVENT_LISTENER_SOURCE, customSchedule, customCancel, returnTarget);
        if (nativePrependEventListener) {
            proto[PREPEND_EVENT_LISTENER] = makeAddListener(nativePrependEventListener, PREPEND_EVENT_LISTENER_SOURCE, customSchedulePrepend, customCancel, returnTarget, true);
        }
        proto[REMOVE_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];
            var options = arguments[2];
            var capture;
            if (options === undefined) {
                capture = false;
            }
            else if (options === true) {
                capture = true;
            }
            else if (options === false) {
                capture = false;
            }
            else {
                capture = options ? !!options.capture : false;
            }
            var delegate = arguments[1];
            if (!delegate) {
                return nativeRemoveEventListener.apply(this, arguments);
            }
            if (validateHandler &&
                !validateHandler(nativeRemoveEventListener, delegate, target, arguments)) {
                return;
            }
            var symbolEventNames = zoneSymbolEventNames$1[eventName];
            var symbolEventName;
            if (symbolEventNames) {
                symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
            }
            var existingTasks = symbolEventName && target[symbolEventName];
            if (existingTasks) {
                for (var i = 0; i < existingTasks.length; i++) {
                    var existingTask = existingTasks[i];
                    if (compare(existingTask, delegate)) {
                        existingTasks.splice(i, 1);
                        // set isRemoved to data for faster invokeTask check
                        existingTask.isRemoved = true;
                        if (existingTasks.length === 0) {
                            // all tasks for the eventName + capture have gone,
                            // remove globalZoneAwareCallback and remove the task cache from target
                            existingTask.allRemoved = true;
                            target[symbolEventName] = null;
                        }
                        existingTask.zone.cancelTask(existingTask);
                        if (returnTarget) {
                            return target;
                        }
                        return;
                    }
                }
            }
            // issue 930, didn't find the event name or callback
            // from zone kept existingTasks, the callback maybe
            // added outside of zone, we need to call native removeEventListener
            // to try to remove it.
            return nativeRemoveEventListener.apply(this, arguments);
        };
        proto[LISTENERS_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];
            var listeners = [];
            var tasks = findEventTasks(target, eventNameToString ? eventNameToString(eventName) : eventName);
            for (var i = 0; i < tasks.length; i++) {
                var task = tasks[i];
                var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                listeners.push(delegate);
            }
            return listeners;
        };
        proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];
            if (!eventName) {
                var keys = Object.keys(target);
                for (var i = 0; i < keys.length; i++) {
                    var prop = keys[i];
                    var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
                    var evtName = match && match[1];
                    // in nodejs EventEmitter, removeListener event is
                    // used for monitoring the removeListener call,
                    // so just keep removeListener eventListener until
                    // all other eventListeners are removed
                    if (evtName && evtName !== 'removeListener') {
                        this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, evtName);
                    }
                }
                // remove removeListener listener finally
                this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, 'removeListener');
            }
            else {
                var symbolEventNames = zoneSymbolEventNames$1[eventName];
                if (symbolEventNames) {
                    var symbolEventName = symbolEventNames[FALSE_STR];
                    var symbolCaptureEventName = symbolEventNames[TRUE_STR];
                    var tasks = target[symbolEventName];
                    var captureTasks = target[symbolCaptureEventName];
                    if (tasks) {
                        var removeTasks = tasks.slice();
                        for (var i = 0; i < removeTasks.length; i++) {
                            var task = removeTasks[i];
                            var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                            this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                        }
                    }
                    if (captureTasks) {
                        var removeTasks = captureTasks.slice();
                        for (var i = 0; i < removeTasks.length; i++) {
                            var task = removeTasks[i];
                            var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                            this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                        }
                    }
                }
            }
            if (returnTarget) {
                return this;
            }
        };
        // for native toString patch
        attachOriginToPatched(proto[ADD_EVENT_LISTENER], nativeAddEventListener);
        attachOriginToPatched(proto[REMOVE_EVENT_LISTENER], nativeRemoveEventListener);
        if (nativeRemoveAllListeners) {
            attachOriginToPatched(proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER], nativeRemoveAllListeners);
        }
        if (nativeListeners) {
            attachOriginToPatched(proto[LISTENERS_EVENT_LISTENER], nativeListeners);
        }
        return true;
    }
    var results = [];
    for (var i = 0; i < apis.length; i++) {
        results[i] = patchEventTargetMethods(apis[i], patchOptions);
    }
    return results;
}
function findEventTasks(target, eventName) {
    var foundTasks = [];
    for (var prop in target) {
        var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
        var evtName = match && match[1];
        if (evtName && (!eventName || evtName === eventName)) {
            var tasks = target[prop];
            if (tasks) {
                for (var i = 0; i < tasks.length; i++) {
                    foundTasks.push(tasks[i]);
                }
            }
        }
    }
    return foundTasks;
}
function patchEventPrototype(global, api) {
    var Event = global['Event'];
    if (Event && Event.prototype) {
        api.patchMethod(Event.prototype, 'stopImmediatePropagation', function (delegate) { return function (self, args) {
            self[IMMEDIATE_PROPAGATION_SYMBOL] = true;
            // we need to call the native stopImmediatePropagation
            // in case in some hybrid application, some part of
            // application will be controlled by zone, some are not
            delegate && delegate.apply(self, args);
        }; });
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function patchCallbacks(api, target, targetName, method, callbacks) {
    var symbol = Zone.__symbol__(method);
    if (target[symbol]) {
        return;
    }
    var nativeDelegate = target[symbol] = target[method];
    target[method] = function (name, opts, options) {
        if (opts && opts.prototype) {
            callbacks.forEach(function (callback) {
                var source = targetName + "." + method + "::" + callback;
                var prototype = opts.prototype;
                if (prototype.hasOwnProperty(callback)) {
                    var descriptor = api.ObjectGetOwnPropertyDescriptor(prototype, callback);
                    if (descriptor && descriptor.value) {
                        descriptor.value = api.wrapWithCurrentZone(descriptor.value, source);
                        api._redefineProperty(opts.prototype, callback, descriptor);
                    }
                    else if (prototype[callback]) {
                        prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
                    }
                }
                else if (prototype[callback]) {
                    prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
                }
            });
        }
        return nativeDelegate.call(target, name, opts, options);
    };
    api.attachOriginToPatched(target[method], nativeDelegate);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/*
 * This is necessary for Chrome and Chrome mobile, to enable
 * things like redefining `createdCallback` on an element.
 */
var zoneSymbol$1 = Zone.__symbol__;
var _defineProperty = Object[zoneSymbol$1('defineProperty')] = Object.defineProperty;
var _getOwnPropertyDescriptor = Object[zoneSymbol$1('getOwnPropertyDescriptor')] =
    Object.getOwnPropertyDescriptor;
var _create = Object.create;
var unconfigurablesKey = zoneSymbol$1('unconfigurables');
function propertyPatch() {
    Object.defineProperty = function (obj, prop, desc) {
        if (isUnconfigurable(obj, prop)) {
            throw new TypeError('Cannot assign to read only property \'' + prop + '\' of ' + obj);
        }
        var originalConfigurableFlag = desc.configurable;
        if (prop !== 'prototype') {
            desc = rewriteDescriptor(obj, prop, desc);
        }
        return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
    };
    Object.defineProperties = function (obj, props) {
        Object.keys(props).forEach(function (prop) {
            Object.defineProperty(obj, prop, props[prop]);
        });
        return obj;
    };
    Object.create = function (obj, proto) {
        if (typeof proto === 'object' && !Object.isFrozen(proto)) {
            Object.keys(proto).forEach(function (prop) {
                proto[prop] = rewriteDescriptor(obj, prop, proto[prop]);
            });
        }
        return _create(obj, proto);
    };
    Object.getOwnPropertyDescriptor = function (obj, prop) {
        var desc = _getOwnPropertyDescriptor(obj, prop);
        if (desc && isUnconfigurable(obj, prop)) {
            desc.configurable = false;
        }
        return desc;
    };
}
function _redefineProperty(obj, prop, desc) {
    var originalConfigurableFlag = desc.configurable;
    desc = rewriteDescriptor(obj, prop, desc);
    return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
}
function isUnconfigurable(obj, prop) {
    return obj && obj[unconfigurablesKey] && obj[unconfigurablesKey][prop];
}
function rewriteDescriptor(obj, prop, desc) {
    // issue-927, if the desc is frozen, don't try to change the desc
    if (!Object.isFrozen(desc)) {
        desc.configurable = true;
    }
    if (!desc.configurable) {
        // issue-927, if the obj is frozen, don't try to set the desc to obj
        if (!obj[unconfigurablesKey] && !Object.isFrozen(obj)) {
            _defineProperty(obj, unconfigurablesKey, { writable: true, value: {} });
        }
        if (obj[unconfigurablesKey]) {
            obj[unconfigurablesKey][prop] = true;
        }
    }
    return desc;
}
function _tryDefineProperty(obj, prop, desc, originalConfigurableFlag) {
    try {
        return _defineProperty(obj, prop, desc);
    }
    catch (error) {
        if (desc.configurable) {
            // In case of errors, when the configurable flag was likely set by rewriteDescriptor(), let's
            // retry with the original flag value
            if (typeof originalConfigurableFlag == 'undefined') {
                delete desc.configurable;
            }
            else {
                desc.configurable = originalConfigurableFlag;
            }
            try {
                return _defineProperty(obj, prop, desc);
            }
            catch (error) {
                var descJson = null;
                try {
                    descJson = JSON.stringify(desc);
                }
                catch (error) {
                    descJson = desc.toString();
                }
                console.log("Attempting to configure '" + prop + "' with descriptor '" + descJson + "' on object '" + obj + "' and got error, giving up: " + error);
            }
        }
        else {
            throw error;
        }
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {globalThis}
 */
var globalEventHandlersEventNames = [
    'abort',
    'animationcancel',
    'animationend',
    'animationiteration',
    'auxclick',
    'beforeinput',
    'blur',
    'cancel',
    'canplay',
    'canplaythrough',
    'change',
    'compositionstart',
    'compositionupdate',
    'compositionend',
    'cuechange',
    'click',
    'close',
    'contextmenu',
    'curechange',
    'dblclick',
    'drag',
    'dragend',
    'dragenter',
    'dragexit',
    'dragleave',
    'dragover',
    'drop',
    'durationchange',
    'emptied',
    'ended',
    'error',
    'focus',
    'focusin',
    'focusout',
    'gotpointercapture',
    'input',
    'invalid',
    'keydown',
    'keypress',
    'keyup',
    'load',
    'loadstart',
    'loadeddata',
    'loadedmetadata',
    'lostpointercapture',
    'mousedown',
    'mouseenter',
    'mouseleave',
    'mousemove',
    'mouseout',
    'mouseover',
    'mouseup',
    'mousewheel',
    'orientationchange',
    'pause',
    'play',
    'playing',
    'pointercancel',
    'pointerdown',
    'pointerenter',
    'pointerleave',
    'pointerlockchange',
    'mozpointerlockchange',
    'webkitpointerlockerchange',
    'pointerlockerror',
    'mozpointerlockerror',
    'webkitpointerlockerror',
    'pointermove',
    'pointout',
    'pointerover',
    'pointerup',
    'progress',
    'ratechange',
    'reset',
    'resize',
    'scroll',
    'seeked',
    'seeking',
    'select',
    'selectionchange',
    'selectstart',
    'show',
    'sort',
    'stalled',
    'submit',
    'suspend',
    'timeupdate',
    'volumechange',
    'touchcancel',
    'touchmove',
    'touchstart',
    'touchend',
    'transitioncancel',
    'transitionend',
    'waiting',
    'wheel'
];
var documentEventNames = [
    'afterscriptexecute', 'beforescriptexecute', 'DOMContentLoaded', 'freeze', 'fullscreenchange',
    'mozfullscreenchange', 'webkitfullscreenchange', 'msfullscreenchange', 'fullscreenerror',
    'mozfullscreenerror', 'webkitfullscreenerror', 'msfullscreenerror', 'readystatechange',
    'visibilitychange', 'resume'
];
var windowEventNames = [
    'absolutedeviceorientation',
    'afterinput',
    'afterprint',
    'appinstalled',
    'beforeinstallprompt',
    'beforeprint',
    'beforeunload',
    'devicelight',
    'devicemotion',
    'deviceorientation',
    'deviceorientationabsolute',
    'deviceproximity',
    'hashchange',
    'languagechange',
    'message',
    'mozbeforepaint',
    'offline',
    'online',
    'paint',
    'pageshow',
    'pagehide',
    'popstate',
    'rejectionhandled',
    'storage',
    'unhandledrejection',
    'unload',
    'userproximity',
    'vrdisplyconnected',
    'vrdisplaydisconnected',
    'vrdisplaypresentchange'
];
var htmlElementEventNames = [
    'beforecopy', 'beforecut', 'beforepaste', 'copy', 'cut', 'paste', 'dragstart', 'loadend',
    'animationstart', 'search', 'transitionrun', 'transitionstart', 'webkitanimationend',
    'webkitanimationiteration', 'webkitanimationstart', 'webkittransitionend'
];
var mediaElementEventNames = ['encrypted', 'waitingforkey', 'msneedkey', 'mozinterruptbegin', 'mozinterruptend'];
var ieElementEventNames = [
    'activate',
    'afterupdate',
    'ariarequest',
    'beforeactivate',
    'beforedeactivate',
    'beforeeditfocus',
    'beforeupdate',
    'cellchange',
    'controlselect',
    'dataavailable',
    'datasetchanged',
    'datasetcomplete',
    'errorupdate',
    'filterchange',
    'layoutcomplete',
    'losecapture',
    'move',
    'moveend',
    'movestart',
    'propertychange',
    'resizeend',
    'resizestart',
    'rowenter',
    'rowexit',
    'rowsdelete',
    'rowsinserted',
    'command',
    'compassneedscalibration',
    'deactivate',
    'help',
    'mscontentzoom',
    'msmanipulationstatechanged',
    'msgesturechange',
    'msgesturedoubletap',
    'msgestureend',
    'msgesturehold',
    'msgesturestart',
    'msgesturetap',
    'msgotpointercapture',
    'msinertiastart',
    'mslostpointercapture',
    'mspointercancel',
    'mspointerdown',
    'mspointerenter',
    'mspointerhover',
    'mspointerleave',
    'mspointermove',
    'mspointerout',
    'mspointerover',
    'mspointerup',
    'pointerout',
    'mssitemodejumplistitemremoved',
    'msthumbnailclick',
    'stop',
    'storagecommit'
];
var webglEventNames = ['webglcontextrestored', 'webglcontextlost', 'webglcontextcreationerror'];
var formEventNames = ['autocomplete', 'autocompleteerror'];
var detailEventNames = ['toggle'];
var frameEventNames = ['load'];
var frameSetEventNames = ['blur', 'error', 'focus', 'load', 'resize', 'scroll', 'messageerror'];
var marqueeEventNames = ['bounce', 'finish', 'start'];
var XMLHttpRequestEventNames = [
    'loadstart', 'progress', 'abort', 'error', 'load', 'progress', 'timeout', 'loadend',
    'readystatechange'
];
var IDBIndexEventNames = ['upgradeneeded', 'complete', 'abort', 'success', 'error', 'blocked', 'versionchange', 'close'];
var websocketEventNames = ['close', 'error', 'open', 'message'];
var workerEventNames = ['error', 'message'];
var eventNames = globalEventHandlersEventNames.concat(webglEventNames, formEventNames, detailEventNames, documentEventNames, windowEventNames, htmlElementEventNames, ieElementEventNames);
function filterProperties(target, onProperties, ignoreProperties) {
    if (!ignoreProperties || ignoreProperties.length === 0) {
        return onProperties;
    }
    var tip = ignoreProperties.filter(function (ip) { return ip.target === target; });
    if (!tip || tip.length === 0) {
        return onProperties;
    }
    var targetIgnoreProperties = tip[0].ignoreProperties;
    return onProperties.filter(function (op) { return targetIgnoreProperties.indexOf(op) === -1; });
}
function patchFilteredProperties(target, onProperties, ignoreProperties, prototype) {
    // check whether target is available, sometimes target will be undefined
    // because different browser or some 3rd party plugin.
    if (!target) {
        return;
    }
    var filteredProperties = filterProperties(target, onProperties, ignoreProperties);
    patchOnProperties(target, filteredProperties, prototype);
}
function propertyDescriptorPatch(api, _global) {
    if (isNode && !isMix) {
        return;
    }
    if (Zone[api.symbol('patchEvents')]) {
        // events are already been patched by legacy patch.
        return;
    }
    var supportsWebSocket = typeof WebSocket !== 'undefined';
    var ignoreProperties = _global['__Zone_ignore_on_properties'];
    // for browsers that we can patch the descriptor:  Chrome & Firefox
    if (isBrowser) {
        var internalWindow = window;
        var ignoreErrorProperties = isIE ? [{ target: internalWindow, ignoreProperties: ['error'] }] : [];
        // in IE/Edge, onProp not exist in window object, but in WindowPrototype
        // so we need to pass WindowPrototype to check onProp exist or not
        patchFilteredProperties(internalWindow, eventNames.concat(['messageerror']), ignoreProperties ? ignoreProperties.concat(ignoreErrorProperties) : ignoreProperties, ObjectGetPrototypeOf(internalWindow));
        patchFilteredProperties(Document.prototype, eventNames, ignoreProperties);
        if (typeof internalWindow['SVGElement'] !== 'undefined') {
            patchFilteredProperties(internalWindow['SVGElement'].prototype, eventNames, ignoreProperties);
        }
        patchFilteredProperties(Element.prototype, eventNames, ignoreProperties);
        patchFilteredProperties(HTMLElement.prototype, eventNames, ignoreProperties);
        patchFilteredProperties(HTMLMediaElement.prototype, mediaElementEventNames, ignoreProperties);
        patchFilteredProperties(HTMLFrameSetElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
        patchFilteredProperties(HTMLBodyElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
        patchFilteredProperties(HTMLFrameElement.prototype, frameEventNames, ignoreProperties);
        patchFilteredProperties(HTMLIFrameElement.prototype, frameEventNames, ignoreProperties);
        var HTMLMarqueeElement_1 = internalWindow['HTMLMarqueeElement'];
        if (HTMLMarqueeElement_1) {
            patchFilteredProperties(HTMLMarqueeElement_1.prototype, marqueeEventNames, ignoreProperties);
        }
        var Worker_1 = internalWindow['Worker'];
        if (Worker_1) {
            patchFilteredProperties(Worker_1.prototype, workerEventNames, ignoreProperties);
        }
    }
    var XMLHttpRequest = _global['XMLHttpRequest'];
    if (XMLHttpRequest) {
        // XMLHttpRequest is not available in ServiceWorker, so we need to check here
        patchFilteredProperties(XMLHttpRequest.prototype, XMLHttpRequestEventNames, ignoreProperties);
    }
    var XMLHttpRequestEventTarget = _global['XMLHttpRequestEventTarget'];
    if (XMLHttpRequestEventTarget) {
        patchFilteredProperties(XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype, XMLHttpRequestEventNames, ignoreProperties);
    }
    if (typeof IDBIndex !== 'undefined') {
        patchFilteredProperties(IDBIndex.prototype, IDBIndexEventNames, ignoreProperties);
        patchFilteredProperties(IDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
        patchFilteredProperties(IDBOpenDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
        patchFilteredProperties(IDBDatabase.prototype, IDBIndexEventNames, ignoreProperties);
        patchFilteredProperties(IDBTransaction.prototype, IDBIndexEventNames, ignoreProperties);
        patchFilteredProperties(IDBCursor.prototype, IDBIndexEventNames, ignoreProperties);
    }
    if (supportsWebSocket) {
        patchFilteredProperties(WebSocket.prototype, websocketEventNames, ignoreProperties);
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Zone.__load_patch('util', function (global, Zone, api) {
    api.patchOnProperties = patchOnProperties;
    api.patchMethod = patchMethod;
    api.bindArguments = bindArguments;
    api.patchMacroTask = patchMacroTask;
    // In earlier version of zone.js (<0.9.0), we use env name `__zone_symbol__BLACK_LISTED_EVENTS` to
    // define which events will not be patched by `Zone.js`.
    // In newer version (>=0.9.0), we change the env name to `__zone_symbol__UNPATCHED_EVENTS` to keep
    // the name consistent with angular repo.
    // The  `__zone_symbol__BLACK_LISTED_EVENTS` is deprecated, but it is still be supported for
    // backwards compatibility.
    var SYMBOL_BLACK_LISTED_EVENTS = Zone.__symbol__('BLACK_LISTED_EVENTS');
    var SYMBOL_UNPATCHED_EVENTS = Zone.__symbol__('UNPATCHED_EVENTS');
    if (global[SYMBOL_UNPATCHED_EVENTS]) {
        global[SYMBOL_BLACK_LISTED_EVENTS] = global[SYMBOL_UNPATCHED_EVENTS];
    }
    if (global[SYMBOL_BLACK_LISTED_EVENTS]) {
        Zone[SYMBOL_BLACK_LISTED_EVENTS] = Zone[SYMBOL_UNPATCHED_EVENTS] =
            global[SYMBOL_BLACK_LISTED_EVENTS];
    }
    api.patchEventPrototype = patchEventPrototype;
    api.patchEventTarget = patchEventTarget;
    api.isIEOrEdge = isIEOrEdge;
    api.ObjectDefineProperty = ObjectDefineProperty;
    api.ObjectGetOwnPropertyDescriptor = ObjectGetOwnPropertyDescriptor;
    api.ObjectCreate = ObjectCreate;
    api.ArraySlice = ArraySlice;
    api.patchClass = patchClass;
    api.wrapWithCurrentZone = wrapWithCurrentZone;
    api.filterProperties = filterProperties;
    api.attachOriginToPatched = attachOriginToPatched;
    api._redefineProperty = _redefineProperty;
    api.patchCallbacks = patchCallbacks;
    api.getGlobalObjects = function () { return ({
        globalSources: globalSources,
        zoneSymbolEventNames: zoneSymbolEventNames$1,
        eventNames: eventNames,
        isBrowser: isBrowser,
        isMix: isMix,
        isNode: isNode,
        TRUE_STR: TRUE_STR,
        FALSE_STR: FALSE_STR,
        ZONE_SYMBOL_PREFIX: ZONE_SYMBOL_PREFIX,
        ADD_EVENT_LISTENER_STR: ADD_EVENT_LISTENER_STR,
        REMOVE_EVENT_LISTENER_STR: REMOVE_EVENT_LISTENER_STR
    }); };
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function eventTargetLegacyPatch(_global, api) {
    var _a = api.getGlobalObjects(), eventNames = _a.eventNames, globalSources = _a.globalSources, zoneSymbolEventNames = _a.zoneSymbolEventNames, TRUE_STR = _a.TRUE_STR, FALSE_STR = _a.FALSE_STR, ZONE_SYMBOL_PREFIX = _a.ZONE_SYMBOL_PREFIX;
    var WTF_ISSUE_555 = 'Anchor,Area,Audio,BR,Base,BaseFont,Body,Button,Canvas,Content,DList,Directory,Div,Embed,FieldSet,Font,Form,Frame,FrameSet,HR,Head,Heading,Html,IFrame,Image,Input,Keygen,LI,Label,Legend,Link,Map,Marquee,Media,Menu,Meta,Meter,Mod,OList,Object,OptGroup,Option,Output,Paragraph,Pre,Progress,Quote,Script,Select,Source,Span,Style,TableCaption,TableCell,TableCol,Table,TableRow,TableSection,TextArea,Title,Track,UList,Unknown,Video';
    var NO_EVENT_TARGET = 'ApplicationCache,EventSource,FileReader,InputMethodContext,MediaController,MessagePort,Node,Performance,SVGElementInstance,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebKitNamedFlow,Window,Worker,WorkerGlobalScope,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload,IDBRequest,IDBOpenDBRequest,IDBDatabase,IDBTransaction,IDBCursor,DBIndex,WebSocket'
        .split(',');
    var EVENT_TARGET = 'EventTarget';
    var apis = [];
    var isWtf = _global['wtf'];
    var WTF_ISSUE_555_ARRAY = WTF_ISSUE_555.split(',');
    if (isWtf) {
        // Workaround for: https://github.com/google/tracing-framework/issues/555
        apis = WTF_ISSUE_555_ARRAY.map(function (v) { return 'HTML' + v + 'Element'; }).concat(NO_EVENT_TARGET);
    }
    else if (_global[EVENT_TARGET]) {
        apis.push(EVENT_TARGET);
    }
    else {
        // Note: EventTarget is not available in all browsers,
        // if it's not available, we instead patch the APIs in the IDL that inherit from EventTarget
        apis = NO_EVENT_TARGET;
    }
    var isDisableIECheck = _global['__Zone_disable_IE_check'] || false;
    var isEnableCrossContextCheck = _global['__Zone_enable_cross_context_check'] || false;
    var ieOrEdge = api.isIEOrEdge();
    var ADD_EVENT_LISTENER_SOURCE = '.addEventListener:';
    var FUNCTION_WRAPPER = '[object FunctionWrapper]';
    var BROWSER_TOOLS = 'function __BROWSERTOOLS_CONSOLE_SAFEFUNC() { [native code] }';
    //  predefine all __zone_symbol__ + eventName + true/false string
    for (var i = 0; i < eventNames.length; i++) {
        var eventName = eventNames[i];
        var falseEventName = eventName + FALSE_STR;
        var trueEventName = eventName + TRUE_STR;
        var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
        var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
        zoneSymbolEventNames[eventName] = {};
        zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
        zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
    }
    //  predefine all task.source string
    for (var i = 0; i < WTF_ISSUE_555.length; i++) {
        var target = WTF_ISSUE_555_ARRAY[i];
        var targets = globalSources[target] = {};
        for (var j = 0; j < eventNames.length; j++) {
            var eventName = eventNames[j];
            targets[eventName] = target + ADD_EVENT_LISTENER_SOURCE + eventName;
        }
    }
    var checkIEAndCrossContext = function (nativeDelegate, delegate, target, args) {
        if (!isDisableIECheck && ieOrEdge) {
            if (isEnableCrossContextCheck) {
                try {
                    var testString = delegate.toString();
                    if ((testString === FUNCTION_WRAPPER || testString == BROWSER_TOOLS)) {
                        nativeDelegate.apply(target, args);
                        return false;
                    }
                }
                catch (error) {
                    nativeDelegate.apply(target, args);
                    return false;
                }
            }
            else {
                var testString = delegate.toString();
                if ((testString === FUNCTION_WRAPPER || testString == BROWSER_TOOLS)) {
                    nativeDelegate.apply(target, args);
                    return false;
                }
            }
        }
        else if (isEnableCrossContextCheck) {
            try {
                delegate.toString();
            }
            catch (error) {
                nativeDelegate.apply(target, args);
                return false;
            }
        }
        return true;
    };
    var apiTypes = [];
    for (var i = 0; i < apis.length; i++) {
        var type = _global[apis[i]];
        apiTypes.push(type && type.prototype);
    }
    // vh is validateHandler to check event handler
    // is valid or not(for security check)
    api.patchEventTarget(_global, apiTypes, { vh: checkIEAndCrossContext });
    Zone[api.symbol('patchEventTarget')] = !!_global[EVENT_TARGET];
    return true;
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// we have to patch the instance since the proto is non-configurable
function apply(api, _global) {
    var _a = api.getGlobalObjects(), ADD_EVENT_LISTENER_STR = _a.ADD_EVENT_LISTENER_STR, REMOVE_EVENT_LISTENER_STR = _a.REMOVE_EVENT_LISTENER_STR;
    var WS = _global.WebSocket;
    // On Safari window.EventTarget doesn't exist so need to patch WS add/removeEventListener
    // On older Chrome, no need since EventTarget was already patched
    if (!_global.EventTarget) {
        api.patchEventTarget(_global, [WS.prototype]);
    }
    _global.WebSocket = function (x, y) {
        var socket = arguments.length > 1 ? new WS(x, y) : new WS(x);
        var proxySocket;
        var proxySocketProto;
        // Safari 7.0 has non-configurable own 'onmessage' and friends properties on the socket instance
        var onmessageDesc = api.ObjectGetOwnPropertyDescriptor(socket, 'onmessage');
        if (onmessageDesc && onmessageDesc.configurable === false) {
            proxySocket = api.ObjectCreate(socket);
            // socket have own property descriptor 'onopen', 'onmessage', 'onclose', 'onerror'
            // but proxySocket not, so we will keep socket as prototype and pass it to
            // patchOnProperties method
            proxySocketProto = socket;
            [ADD_EVENT_LISTENER_STR, REMOVE_EVENT_LISTENER_STR, 'send', 'close'].forEach(function (propName) {
                proxySocket[propName] = function () {
                    var args = api.ArraySlice.call(arguments);
                    if (propName === ADD_EVENT_LISTENER_STR || propName === REMOVE_EVENT_LISTENER_STR) {
                        var eventName = args.length > 0 ? args[0] : undefined;
                        if (eventName) {
                            var propertySymbol = Zone.__symbol__('ON_PROPERTY' + eventName);
                            socket[propertySymbol] = proxySocket[propertySymbol];
                        }
                    }
                    return socket[propName].apply(socket, args);
                };
            });
        }
        else {
            // we can patch the real socket
            proxySocket = socket;
        }
        api.patchOnProperties(proxySocket, ['close', 'error', 'message', 'open'], proxySocketProto);
        return proxySocket;
    };
    var globalWebSocket = _global['WebSocket'];
    for (var prop in WS) {
        globalWebSocket[prop] = WS[prop];
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {globalThis}
 */
function propertyDescriptorLegacyPatch(api, _global) {
    var _a = api.getGlobalObjects(), isNode = _a.isNode, isMix = _a.isMix;
    if (isNode && !isMix) {
        return;
    }
    if (!canPatchViaPropertyDescriptor(api, _global)) {
        var supportsWebSocket = typeof WebSocket !== 'undefined';
        // Safari, Android browsers (Jelly Bean)
        patchViaCapturingAllTheEvents(api);
        api.patchClass('XMLHttpRequest');
        if (supportsWebSocket) {
            apply(api, _global);
        }
        Zone[api.symbol('patchEvents')] = true;
    }
}
function canPatchViaPropertyDescriptor(api, _global) {
    var _a = api.getGlobalObjects(), isBrowser = _a.isBrowser, isMix = _a.isMix;
    if ((isBrowser || isMix) &&
        !api.ObjectGetOwnPropertyDescriptor(HTMLElement.prototype, 'onclick') &&
        typeof Element !== 'undefined') {
        // WebKit https://bugs.webkit.org/show_bug.cgi?id=134364
        // IDL interface attributes are not configurable
        var desc = api.ObjectGetOwnPropertyDescriptor(Element.prototype, 'onclick');
        if (desc && !desc.configurable)
            return false;
        // try to use onclick to detect whether we can patch via propertyDescriptor
        // because XMLHttpRequest is not available in service worker
        if (desc) {
            api.ObjectDefineProperty(Element.prototype, 'onclick', {
                enumerable: true,
                configurable: true,
                get: function () {
                    return true;
                }
            });
            var div = document.createElement('div');
            var result = !!div.onclick;
            api.ObjectDefineProperty(Element.prototype, 'onclick', desc);
            return result;
        }
    }
    var XMLHttpRequest = _global['XMLHttpRequest'];
    if (!XMLHttpRequest) {
        // XMLHttpRequest is not available in service worker
        return false;
    }
    var ON_READY_STATE_CHANGE = 'onreadystatechange';
    var XMLHttpRequestPrototype = XMLHttpRequest.prototype;
    var xhrDesc = api.ObjectGetOwnPropertyDescriptor(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE);
    // add enumerable and configurable here because in opera
    // by default XMLHttpRequest.prototype.onreadystatechange is undefined
    // without adding enumerable and configurable will cause onreadystatechange
    // non-configurable
    // and if XMLHttpRequest.prototype.onreadystatechange is undefined,
    // we should set a real desc instead a fake one
    if (xhrDesc) {
        api.ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, {
            enumerable: true,
            configurable: true,
            get: function () {
                return true;
            }
        });
        var req = new XMLHttpRequest();
        var result = !!req.onreadystatechange;
        // restore original desc
        api.ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, xhrDesc || {});
        return result;
    }
    else {
        var SYMBOL_FAKE_ONREADYSTATECHANGE_1 = api.symbol('fake');
        api.ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, {
            enumerable: true,
            configurable: true,
            get: function () {
                return this[SYMBOL_FAKE_ONREADYSTATECHANGE_1];
            },
            set: function (value) {
                this[SYMBOL_FAKE_ONREADYSTATECHANGE_1] = value;
            }
        });
        var req = new XMLHttpRequest();
        var detectFunc = function () { };
        req.onreadystatechange = detectFunc;
        var result = req[SYMBOL_FAKE_ONREADYSTATECHANGE_1] === detectFunc;
        req.onreadystatechange = null;
        return result;
    }
}
// Whenever any eventListener fires, we check the eventListener target and all parents
// for `onwhatever` properties and replace them with zone-bound functions
// - Chrome (for now)
function patchViaCapturingAllTheEvents(api) {
    var eventNames = api.getGlobalObjects().eventNames;
    var unboundKey = api.symbol('unbound');
    var _loop_1 = function (i) {
        var property = eventNames[i];
        var onproperty = 'on' + property;
        self.addEventListener(property, function (event) {
            var elt = event.target, bound, source;
            if (elt) {
                source = elt.constructor['name'] + '.' + onproperty;
            }
            else {
                source = 'unknown.' + onproperty;
            }
            while (elt) {
                if (elt[onproperty] && !elt[onproperty][unboundKey]) {
                    bound = api.wrapWithCurrentZone(elt[onproperty], source);
                    bound[unboundKey] = elt[onproperty];
                    elt[onproperty] = bound;
                }
                elt = elt.parentElement;
            }
        }, true);
    };
    for (var i = 0; i < eventNames.length; i++) {
        _loop_1(i);
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function registerElementPatch(_global, api) {
    var _a = api.getGlobalObjects(), isBrowser = _a.isBrowser, isMix = _a.isMix;
    if ((!isBrowser && !isMix) || !('registerElement' in _global.document)) {
        return;
    }
    var callbacks = ['createdCallback', 'attachedCallback', 'detachedCallback', 'attributeChangedCallback'];
    api.patchCallbacks(api, document, 'Document', 'registerElement', callbacks);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
(function (_global) {
    _global['__zone_symbol__legacyPatch'] = function () {
        var Zone = _global['Zone'];
        Zone.__load_patch('registerElement', function (global, Zone, api) {
            registerElementPatch(global, api);
        });
        Zone.__load_patch('EventTargetLegacy', function (global, Zone, api) {
            eventTargetLegacyPatch(global, api);
            propertyDescriptorLegacyPatch(api, global);
        });
    };
})(typeof window !== 'undefined' && window || typeof self !== 'undefined' && self || global);

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
var taskSymbol = zoneSymbol('zoneTask');
function patchTimer(window, setName, cancelName, nameSuffix) {
    var setNative = null;
    var clearNative = null;
    setName += nameSuffix;
    cancelName += nameSuffix;
    var tasksByHandleId = {};
    function scheduleTask(task) {
        var data = task.data;
        function timer() {
            try {
                task.invoke.apply(this, arguments);
            }
            finally {
                // issue-934, task will be cancelled
                // even it is a periodic task such as
                // setInterval
                if (!(task.data && task.data.isPeriodic)) {
                    if (typeof data.handleId === 'number') {
                        // in non-nodejs env, we remove timerId
                        // from local cache
                        delete tasksByHandleId[data.handleId];
                    }
                    else if (data.handleId) {
                        // Node returns complex objects as handleIds
                        // we remove task reference from timer object
                        data.handleId[taskSymbol] = null;
                    }
                }
            }
        }
        data.args[0] = timer;
        data.handleId = setNative.apply(window, data.args);
        return task;
    }
    function clearTask(task) {
        return clearNative(task.data.handleId);
    }
    setNative =
        patchMethod(window, setName, function (delegate) { return function (self, args) {
            if (typeof args[0] === 'function') {
                var options = {
                    isPeriodic: nameSuffix === 'Interval',
                    delay: (nameSuffix === 'Timeout' || nameSuffix === 'Interval') ? args[1] || 0 :
                        undefined,
                    args: args
                };
                var task = scheduleMacroTaskWithCurrentZone(setName, args[0], options, scheduleTask, clearTask);
                if (!task) {
                    return task;
                }
                // Node.js must additionally support the ref and unref functions.
                var handle = task.data.handleId;
                if (typeof handle === 'number') {
                    // for non nodejs env, we save handleId: task
                    // mapping in local cache for clearTimeout
                    tasksByHandleId[handle] = task;
                }
                else if (handle) {
                    // for nodejs env, we save task
                    // reference in timerId Object for clearTimeout
                    handle[taskSymbol] = task;
                }
                // check whether handle is null, because some polyfill or browser
                // may return undefined from setTimeout/setInterval/setImmediate/requestAnimationFrame
                if (handle && handle.ref && handle.unref && typeof handle.ref === 'function' &&
                    typeof handle.unref === 'function') {
                    task.ref = handle.ref.bind(handle);
                    task.unref = handle.unref.bind(handle);
                }
                if (typeof handle === 'number' || handle) {
                    return handle;
                }
                return task;
            }
            else {
                // cause an error by calling it directly.
                return delegate.apply(window, args);
            }
        }; });
    clearNative =
        patchMethod(window, cancelName, function (delegate) { return function (self, args) {
            var id = args[0];
            var task;
            if (typeof id === 'number') {
                // non nodejs env.
                task = tasksByHandleId[id];
            }
            else {
                // nodejs env.
                task = id && id[taskSymbol];
                // other environments.
                if (!task) {
                    task = id;
                }
            }
            if (task && typeof task.type === 'string') {
                if (task.state !== 'notScheduled' &&
                    (task.cancelFn && task.data.isPeriodic || task.runCount === 0)) {
                    if (typeof id === 'number') {
                        delete tasksByHandleId[id];
                    }
                    else if (id) {
                        id[taskSymbol] = null;
                    }
                    // Do not cancel already canceled functions
                    task.zone.cancelTask(task);
                }
            }
            else {
                // cause an error by calling it directly.
                delegate.apply(window, args);
            }
        }; });
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function patchCustomElements(_global, api) {
    var _a = api.getGlobalObjects(), isBrowser = _a.isBrowser, isMix = _a.isMix;
    if ((!isBrowser && !isMix) || !_global['customElements'] || !('customElements' in _global)) {
        return;
    }
    var callbacks = ['connectedCallback', 'disconnectedCallback', 'adoptedCallback', 'attributeChangedCallback'];
    api.patchCallbacks(api, _global.customElements, 'customElements', 'define', callbacks);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function eventTargetPatch(_global, api) {
    if (Zone[api.symbol('patchEventTarget')]) {
        // EventTarget is already patched.
        return;
    }
    var _a = api.getGlobalObjects(), eventNames = _a.eventNames, zoneSymbolEventNames = _a.zoneSymbolEventNames, TRUE_STR = _a.TRUE_STR, FALSE_STR = _a.FALSE_STR, ZONE_SYMBOL_PREFIX = _a.ZONE_SYMBOL_PREFIX;
    //  predefine all __zone_symbol__ + eventName + true/false string
    for (var i = 0; i < eventNames.length; i++) {
        var eventName = eventNames[i];
        var falseEventName = eventName + FALSE_STR;
        var trueEventName = eventName + TRUE_STR;
        var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
        var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
        zoneSymbolEventNames[eventName] = {};
        zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
        zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
    }
    var EVENT_TARGET = _global['EventTarget'];
    if (!EVENT_TARGET || !EVENT_TARGET.prototype) {
        return;
    }
    api.patchEventTarget(_global, [EVENT_TARGET && EVENT_TARGET.prototype]);
    return true;
}
function patchEvent$1(global, api) {
    api.patchEventPrototype(global, api);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
Zone.__load_patch('legacy', function (global) {
    var legacyPatch = global[Zone.__symbol__('legacyPatch')];
    if (legacyPatch) {
        legacyPatch();
    }
});
Zone.__load_patch('timers', function (global) {
    var set = 'set';
    var clear = 'clear';
    patchTimer(global, set, clear, 'Timeout');
    patchTimer(global, set, clear, 'Interval');
    patchTimer(global, set, clear, 'Immediate');
});
Zone.__load_patch('requestAnimationFrame', function (global) {
    patchTimer(global, 'request', 'cancel', 'AnimationFrame');
    patchTimer(global, 'mozRequest', 'mozCancel', 'AnimationFrame');
    patchTimer(global, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
});
Zone.__load_patch('blocking', function (global, Zone) {
    var blockingMethods = ['alert', 'prompt', 'confirm'];
    for (var i = 0; i < blockingMethods.length; i++) {
        var name_1 = blockingMethods[i];
        patchMethod(global, name_1, function (delegate, symbol, name) {
            return function (s, args) {
                return Zone.current.run(delegate, global, args, name);
            };
        });
    }
});
Zone.__load_patch('EventTarget', function (global, Zone, api) {
    patchEvent$1(global, api);
    eventTargetPatch(global, api);
    // patch XMLHttpRequestEventTarget's addEventListener/removeEventListener
    var XMLHttpRequestEventTarget = global['XMLHttpRequestEventTarget'];
    if (XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype) {
        api.patchEventTarget(global, [XMLHttpRequestEventTarget.prototype]);
    }
    patchClass('MutationObserver');
    patchClass('WebKitMutationObserver');
    patchClass('IntersectionObserver');
    patchClass('FileReader');
});
Zone.__load_patch('on_property', function (global, Zone, api) {
    propertyDescriptorPatch(api, global);
    propertyPatch();
});
Zone.__load_patch('customElements', function (global, Zone, api) {
    patchCustomElements(global, api);
});
Zone.__load_patch('XHR', function (global, Zone) {
    // Treat XMLHttpRequest as a macrotask.
    patchXHR(global);
    var XHR_TASK = zoneSymbol('xhrTask');
    var XHR_SYNC = zoneSymbol('xhrSync');
    var XHR_LISTENER = zoneSymbol('xhrListener');
    var XHR_SCHEDULED = zoneSymbol('xhrScheduled');
    var XHR_URL = zoneSymbol('xhrURL');
    var XHR_ERROR_BEFORE_SCHEDULED = zoneSymbol('xhrErrorBeforeScheduled');
    function patchXHR(window) {
        var XMLHttpRequest = window['XMLHttpRequest'];
        if (!XMLHttpRequest) {
            // XMLHttpRequest is not available in service worker
            return;
        }
        var XMLHttpRequestPrototype = XMLHttpRequest.prototype;
        function findPendingTask(target) {
            return target[XHR_TASK];
        }
        var oriAddListener = XMLHttpRequestPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
        var oriRemoveListener = XMLHttpRequestPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
        if (!oriAddListener) {
            var XMLHttpRequestEventTarget_1 = window['XMLHttpRequestEventTarget'];
            if (XMLHttpRequestEventTarget_1) {
                var XMLHttpRequestEventTargetPrototype = XMLHttpRequestEventTarget_1.prototype;
                oriAddListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
                oriRemoveListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
            }
        }
        var READY_STATE_CHANGE = 'readystatechange';
        var SCHEDULED = 'scheduled';
        function scheduleTask(task) {
            var data = task.data;
            var target = data.target;
            target[XHR_SCHEDULED] = false;
            target[XHR_ERROR_BEFORE_SCHEDULED] = false;
            // remove existing event listener
            var listener = target[XHR_LISTENER];
            if (!oriAddListener) {
                oriAddListener = target[ZONE_SYMBOL_ADD_EVENT_LISTENER];
                oriRemoveListener = target[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
            }
            if (listener) {
                oriRemoveListener.call(target, READY_STATE_CHANGE, listener);
            }
            var newListener = target[XHR_LISTENER] = function () {
                if (target.readyState === target.DONE) {
                    // sometimes on some browsers XMLHttpRequest will fire onreadystatechange with
                    // readyState=4 multiple times, so we need to check task state here
                    if (!data.aborted && target[XHR_SCHEDULED] && task.state === SCHEDULED) {
                        // check whether the xhr has registered onload listener
                        // if that is the case, the task should invoke after all
                        // onload listeners finish.
                        var loadTasks = target['__zone_symbol__loadfalse'];
                        if (loadTasks && loadTasks.length > 0) {
                            var oriInvoke_1 = task.invoke;
                            task.invoke = function () {
                                // need to load the tasks again, because in other
                                // load listener, they may remove themselves
                                var loadTasks = target['__zone_symbol__loadfalse'];
                                for (var i = 0; i < loadTasks.length; i++) {
                                    if (loadTasks[i] === task) {
                                        loadTasks.splice(i, 1);
                                    }
                                }
                                if (!data.aborted && task.state === SCHEDULED) {
                                    oriInvoke_1.call(task);
                                }
                            };
                            loadTasks.push(task);
                        }
                        else {
                            task.invoke();
                        }
                    }
                    else if (!data.aborted && target[XHR_SCHEDULED] === false) {
                        // error occurs when xhr.send()
                        target[XHR_ERROR_BEFORE_SCHEDULED] = true;
                    }
                }
            };
            oriAddListener.call(target, READY_STATE_CHANGE, newListener);
            var storedTask = target[XHR_TASK];
            if (!storedTask) {
                target[XHR_TASK] = task;
            }
            sendNative.apply(target, data.args);
            target[XHR_SCHEDULED] = true;
            return task;
        }
        function placeholderCallback() { }
        function clearTask(task) {
            var data = task.data;
            // Note - ideally, we would call data.target.removeEventListener here, but it's too late
            // to prevent it from firing. So instead, we store info for the event listener.
            data.aborted = true;
            return abortNative.apply(data.target, data.args);
        }
        var openNative = patchMethod(XMLHttpRequestPrototype, 'open', function () { return function (self, args) {
            self[XHR_SYNC] = args[2] == false;
            self[XHR_URL] = args[1];
            return openNative.apply(self, args);
        }; });
        var XMLHTTPREQUEST_SOURCE = 'XMLHttpRequest.send';
        var fetchTaskAborting = zoneSymbol('fetchTaskAborting');
        var fetchTaskScheduling = zoneSymbol('fetchTaskScheduling');
        var sendNative = patchMethod(XMLHttpRequestPrototype, 'send', function () { return function (self, args) {
            if (Zone.current[fetchTaskScheduling] === true) {
                // a fetch is scheduling, so we are using xhr to polyfill fetch
                // and because we already schedule macroTask for fetch, we should
                // not schedule a macroTask for xhr again
                return sendNative.apply(self, args);
            }
            if (self[XHR_SYNC]) {
                // if the XHR is sync there is no task to schedule, just execute the code.
                return sendNative.apply(self, args);
            }
            else {
                var options = { target: self, url: self[XHR_URL], isPeriodic: false, args: args, aborted: false };
                var task = scheduleMacroTaskWithCurrentZone(XMLHTTPREQUEST_SOURCE, placeholderCallback, options, scheduleTask, clearTask);
                if (self && self[XHR_ERROR_BEFORE_SCHEDULED] === true && !options.aborted &&
                    task.state === SCHEDULED) {
                    // xhr request throw error when send
                    // we should invoke task instead of leaving a scheduled
                    // pending macroTask
                    task.invoke();
                }
            }
        }; });
        var abortNative = patchMethod(XMLHttpRequestPrototype, 'abort', function () { return function (self, args) {
            var task = findPendingTask(self);
            if (task && typeof task.type == 'string') {
                // If the XHR has already completed, do nothing.
                // If the XHR has already been aborted, do nothing.
                // Fix #569, call abort multiple times before done will cause
                // macroTask task count be negative number
                if (task.cancelFn == null || (task.data && task.data.aborted)) {
                    return;
                }
                task.zone.cancelTask(task);
            }
            else if (Zone.current[fetchTaskAborting] === true) {
                // the abort is called from fetch polyfill, we need to call native abort of XHR.
                return abortNative.apply(self, args);
            }
            // Otherwise, we are trying to abort an XHR which has not yet been sent, so there is no
            // task
            // to cancel. Do nothing.
        }; });
    }
});
Zone.__load_patch('geolocation', function (global) {
    /// GEO_LOCATION
    if (global['navigator'] && global['navigator'].geolocation) {
        patchPrototype(global['navigator'].geolocation, ['getCurrentPosition', 'watchPosition']);
    }
});
Zone.__load_patch('PromiseRejectionEvent', function (global, Zone) {
    // handle unhandled promise rejection
    function findPromiseRejectionHandler(evtName) {
        return function (e) {
            var eventTasks = findEventTasks(global, evtName);
            eventTasks.forEach(function (eventTask) {
                // windows has added unhandledrejection event listener
                // trigger the event listener
                var PromiseRejectionEvent = global['PromiseRejectionEvent'];
                if (PromiseRejectionEvent) {
                    var evt = new PromiseRejectionEvent(evtName, { promise: e.promise, reason: e.rejection });
                    eventTask.invoke(evt);
                }
            });
        };
    }
    if (global['PromiseRejectionEvent']) {
        Zone[zoneSymbol('unhandledPromiseRejectionHandler')] =
            findPromiseRejectionHandler('unhandledrejection');
        Zone[zoneSymbol('rejectionHandledHandler')] =
            findPromiseRejectionHandler('rejectionhandled');
    }
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

})));


/***/ }),

/***/ "./src/app/_helpers/auth.interceptor.ts":
/*!**********************************************!*\
  !*** ./src/app/_helpers/auth.interceptor.ts ***!
  \**********************************************/
/*! exports provided: AuthInterceptor, authInterceptorProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authInterceptorProviders", function() { return authInterceptorProviders; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/token-storage.service */ "./src/app/services/token-storage.service.ts");




var TOKEN_HEADER_KEY = 'x-access-token'; // for Node.js Express back-end
var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(token) {
        this.token = token;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var authReq = req;
        var token = this.token.getToken();
        if (token != null) {
            // for Node.js Express back-end
            authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, token) });
        }
        return next.handle(authReq);
    };
    AuthInterceptor.ctorParameters = function () { return [
        { type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"] }
    ]; };
    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
    ], AuthInterceptor);
    return AuthInterceptor;
}());

var authInterceptorProviders = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"], useClass: AuthInterceptor, multi: true }
];


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_admin_components_add_employe_add_employe_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/admin-components/add-employe/add-employe.component */ "./src/app/components/admin-components/add-employe/add-employe.component.ts");
/* harmony import */ var _components_admin_components_list_employes_list_employes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/admin-components/list-employes/list-employes.component */ "./src/app/components/admin-components/list-employes/list-employes.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_admin_components_profile_employe_profile_employe_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/admin-components/profile-employe/profile-employe.component */ "./src/app/components/admin-components/profile-employe/profile-employe.component.ts");
/* harmony import */ var _components_admin_components_recrutements_recrutements_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/admin-components/recrutements/recrutements.component */ "./src/app/components/admin-components/recrutements/recrutements.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_employe_components_info_employe_info_employe_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/employe-components/info-employe/info-employe.component */ "./src/app/components/employe-components/info-employe/info-employe.component.ts");
/* harmony import */ var _components_admin_components_profil_candidat_profil_candidat_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/admin-components/profil-candidat/profil-candidat.component */ "./src/app/components/admin-components/profil-candidat/profil-candidat.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _public_layout_public_layout_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./public-layout/public-layout.component */ "./src/app/public-layout/public-layout.component.ts");
/* harmony import */ var _components_admin_components_update_employe_update_employe_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/admin-components/update-employe/update-employe.component */ "./src/app/components/admin-components/update-employe/update-employe.component.ts");
/* harmony import */ var _components_employe_components_update_info_employe_update_info_employe_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/employe-components/update-info-employe/update-info-employe.component */ "./src/app/components/employe-components/update-info-employe/update-info-employe.component.ts");
/* harmony import */ var _components_admin_components_update_photo_update_photo_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/admin-components/update-photo/update-photo.component */ "./src/app/components/admin-components/update-photo/update-photo.component.ts");
/* harmony import */ var _components_candidate_components_response_response_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/candidate-components/response/response.component */ "./src/app/components/candidate-components/response/response.component.ts");
/* harmony import */ var _components_update_profil_update_profil_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/update-profil/update-profil.component */ "./src/app/components/update-profil/update-profil.component.ts");
/* harmony import */ var _board_user_board_user_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./board-user/board-user.component */ "./src/app/board-user/board-user.component.ts");
/* harmony import */ var _board_moderator_board_moderator_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./board-moderator/board-moderator.component */ "./src/app/board-moderator/board-moderator.component.ts");
/* harmony import */ var _board_admin_board_admin_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./board-admin/board-admin.component */ "./src/app/board-admin/board-admin.component.ts");
/* harmony import */ var _components_employe_components_candidature_candidature_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/employe-components/candidature/candidature.component */ "./src/app/components/employe-components/candidature/candidature.component.ts");
/* harmony import */ var _components_employe_components_offres_actuelles_offres_actuelles_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/employe-components/offres-actuelles/offres-actuelles.component */ "./src/app/components/employe-components/offres-actuelles/offres-actuelles.component.ts");
/* harmony import */ var _components_admin_components_post_job_post_job_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/admin-components/post-job/post-job.component */ "./src/app/components/admin-components/post-job/post-job.component.ts");
/* harmony import */ var _components_employe_components_jobspage_jobspage_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/employe-components/jobspage/jobspage.component */ "./src/app/components/employe-components/jobspage/jobspage.component.ts");
/* harmony import */ var _components_employe_components_myfavjob_myfavjob_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/employe-components/myfavjob/myfavjob.component */ "./src/app/components/employe-components/myfavjob/myfavjob.component.ts");
/* harmony import */ var _components_employe_components_jobapp_form_jobapp_form_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/employe-components/jobapp-form/jobapp-form.component */ "./src/app/components/employe-components/jobapp-form/jobapp-form.component.ts");
/* harmony import */ var _components_employe_components_jobapp_form_jobapp_form_create_jobapp_form_create_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/employe-components/jobapp-form/jobapp-form-create/jobapp-form-create.component */ "./src/app/components/employe-components/jobapp-form/jobapp-form-create/jobapp-form-create.component.ts");
/* harmony import */ var _components_employe_components_jobapp_form_jobapp_form_review_jobapp_form_review_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/employe-components/jobapp-form/jobapp-form-review/jobapp-form-review.component */ "./src/app/components/employe-components/jobapp-form/jobapp-form-review/jobapp-form-review.component.ts");
/* harmony import */ var _components_employe_components_cand_profile_cand_profile_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/employe-components/cand-profile/cand-profile.component */ "./src/app/components/employe-components/cand-profile/cand-profile.component.ts");
/* harmony import */ var _components_employe_components_applications_applications_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/employe-components/applications/applications.component */ "./src/app/components/employe-components/applications/applications.component.ts");
/* harmony import */ var _components_employe_components_candidate_form_candidate_form_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/employe-components/candidate-form/candidate-form.component */ "./src/app/components/employe-components/candidate-form/candidate-form.component.ts");
/* harmony import */ var _components_admin_components_view_posting_view_posting_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/admin-components/view-posting/view-posting.component */ "./src/app/components/admin-components/view-posting/view-posting.component.ts");
/* harmony import */ var _components_admin_components_view_applicants_view_applicants_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/admin-components/view-applicants/view-applicants.component */ "./src/app/components/admin-components/view-applicants/view-applicants.component.ts");
/* harmony import */ var _components_admin_components_hr_profile_hr_profile_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/admin-components/hr-profile/hr-profile.component */ "./src/app/components/admin-components/hr-profile/hr-profile.component.ts");
/* harmony import */ var _components_admin_components_hr_form_hr_form_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/admin-components/hr-form/hr-form.component */ "./src/app/components/admin-components/hr-form/hr-form.component.ts");
/* harmony import */ var _components_admin_components_recruitment_recruitment_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/admin-components/recruitment/recruitment.component */ "./src/app/components/admin-components/recruitment/recruitment.component.ts");


























//import { HomeComponent } from './home/home.component';
//import { RegisterComponent } from './register/register.component';















var routes = [
    {
        path: '', component: _public_layout_public_layout_component__WEBPACK_IMPORTED_MODULE_16__["PublicLayoutComponent"], children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"] },
            { path: 'response', component: _components_candidate_components_response_response_component__WEBPACK_IMPORTED_MODULE_20__["ResponseComponent"] },
            { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
            { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"] },
            { path: 'user', component: _board_user_board_user_component__WEBPACK_IMPORTED_MODULE_22__["BoardUserComponent"] },
            { path: 'mod', component: _board_moderator_board_moderator_component__WEBPACK_IMPORTED_MODULE_23__["BoardModeratorComponent"] },
            { path: 'admin', component: _board_admin_board_admin_component__WEBPACK_IMPORTED_MODULE_24__["BoardAdminComponent"] },
        ]
    },
    { path: '', component: _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__["SidebarComponent"], children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_15__["DashboardComponent"] },
            { path: 'profil', component: _components_update_profil_update_profil_component__WEBPACK_IMPORTED_MODULE_21__["UpdateProfilComponent"] },
            { path: 'addEmploye', component: _components_admin_components_add_employe_add_employe_component__WEBPACK_IMPORTED_MODULE_3__["AddEmployeComponent"] },
            { path: 'OffresActuelles', component: _components_employe_components_offres_actuelles_offres_actuelles_component__WEBPACK_IMPORTED_MODULE_26__["OffresActuellesComponent"] },
            { path: 'candidature', component: _components_employe_components_candidature_candidature_component__WEBPACK_IMPORTED_MODULE_25__["CandidatureComponent"] },
            { path: 'listEmployes', component: _components_admin_components_list_employes_list_employes_component__WEBPACK_IMPORTED_MODULE_4__["ListEmployesComponent"] },
            //{ path: 'listEmployes/profilEmploye/:idUser', component: ProfileEmployeComponent },
            { path: 'profilEmploye/:id', component: _components_admin_components_profile_employe_profile_employe_component__WEBPACK_IMPORTED_MODULE_6__["ProfileEmployeComponent"] },
            { path: 'updateEmploye', component: _components_admin_components_update_employe_update_employe_component__WEBPACK_IMPORTED_MODULE_17__["UpdateEmployeComponent"] },
            { path: 'updatePhoto', component: _components_admin_components_update_photo_update_photo_component__WEBPACK_IMPORTED_MODULE_19__["UpdatePhotoComponent"] },
            { path: 'updateInfoEmploye', component: _components_employe_components_update_info_employe_update_info_employe_component__WEBPACK_IMPORTED_MODULE_18__["UpdateInfoEmployeComponent"] },
            { path: 'profilCandidat/:id', component: _components_admin_components_profil_candidat_profil_candidat_component__WEBPACK_IMPORTED_MODULE_14__["ProfilCandidatComponent"] },
            { path: 'post-job', component: _components_admin_components_post_job_post_job_component__WEBPACK_IMPORTED_MODULE_27__["PostJobComponent"] },
            { path: "jobspage", component: _components_employe_components_jobspage_jobspage_component__WEBPACK_IMPORTED_MODULE_28__["JobspageComponent"] },
            { path: "myfavjob", component: _components_employe_components_myfavjob_myfavjob_component__WEBPACK_IMPORTED_MODULE_29__["MyfavjobComponent"] },
            { path: "jobappform", component: _components_employe_components_jobapp_form_jobapp_form_component__WEBPACK_IMPORTED_MODULE_30__["JobappFormComponent"] },
            { path: "jobappform-create", component: _components_employe_components_jobapp_form_jobapp_form_create_jobapp_form_create_component__WEBPACK_IMPORTED_MODULE_31__["JobappFormCreateComponent"] },
            { path: "jobappform-review", component: _components_employe_components_jobapp_form_jobapp_form_review_jobapp_form_review_component__WEBPACK_IMPORTED_MODULE_32__["JobappFormReviewComponent"] },
            { path: "cand-profile", component: _components_employe_components_cand_profile_cand_profile_component__WEBPACK_IMPORTED_MODULE_33__["CandProfileComponent"] },
            { path: "applications", component: _components_employe_components_applications_applications_component__WEBPACK_IMPORTED_MODULE_34__["ApplicationsComponent"] },
            { path: "cand-form", component: _components_employe_components_candidate_form_candidate_form_component__WEBPACK_IMPORTED_MODULE_35__["CandidateFormComponent"] },
            { path: "view-posting", component: _components_admin_components_view_posting_view_posting_component__WEBPACK_IMPORTED_MODULE_36__["ViewPostingComponent"] },
            { path: "view-applicants", component: _components_admin_components_view_applicants_view_applicants_component__WEBPACK_IMPORTED_MODULE_37__["ViewApplicantsComponent"] },
            { path: "hr-profile", component: _components_admin_components_hr_profile_hr_profile_component__WEBPACK_IMPORTED_MODULE_38__["HrProfileComponent"] },
            { path: "hr-form", component: _components_admin_components_hr_form_hr_form_component__WEBPACK_IMPORTED_MODULE_39__["HrFormComponent"] },
            { path: "recruitment", component: _components_admin_components_recruitment_recruitment_component__WEBPACK_IMPORTED_MODULE_40__["RecruitmentComponent"] },
            { path: 'info-employe/:id', component: _components_employe_components_info_employe_info_employe_component__WEBPACK_IMPORTED_MODULE_13__["InfoEmployeComponent"] },
            { path: 'recrutement', component: _components_admin_components_recrutements_recrutements_component__WEBPACK_IMPORTED_MODULE_7__["RecrutementsComponent"] },
        ] },
    { path: 'footer', component: _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'managementProject';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fullcalendar/angular */ "./node_modules/@fullcalendar/angular/fesm5/fullcalendar-angular.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _components_admin_components_add_employe_add_employe_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/admin-components/add-employe/add-employe.component */ "./src/app/components/admin-components/add-employe/add-employe.component.ts");
/* harmony import */ var _services_employe_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/employe.service */ "./src/app/services/employe.service.ts");
/* harmony import */ var _services_employee_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/employee.service */ "./src/app/services/employee.service.ts");
/* harmony import */ var _components_candidate_components_info_candidate_info_candidate_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/candidate-components/info-candidate/info-candidate.component */ "./src/app/components/candidate-components/info-candidate/info-candidate.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ "./node_modules/angular-calendar/date-adapters/esm/date-fns/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angularx_flatpickr__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! angularx-flatpickr */ "./node_modules/angularx-flatpickr/fesm5/angularx-flatpickr.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _components_admin_components_list_employes_list_employes_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/admin-components/list-employes/list-employes.component */ "./src/app/components/admin-components/list-employes/list-employes.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _components_admin_components_profile_employe_profile_employe_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/admin-components/profile-employe/profile-employe.component */ "./src/app/components/admin-components/profile-employe/profile-employe.component.ts");
/* harmony import */ var _components_admin_components_update_employe_update_employe_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/admin-components/update-employe/update-employe.component */ "./src/app/components/admin-components/update-employe/update-employe.component.ts");
/* harmony import */ var _components_admin_components_recrutements_recrutements_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/admin-components/recrutements/recrutements.component */ "./src/app/components/admin-components/recrutements/recrutements.component.ts");
/* harmony import */ var _services_email_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./services/email.service */ "./src/app/services/email.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @syncfusion/ej2-angular-schedule */ "./node_modules/@syncfusion/ej2-angular-schedule/@syncfusion/ej2-angular-schedule.es5.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _helpers_auth_interceptor__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./_helpers/auth.interceptor */ "./src/app/_helpers/auth.interceptor.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_employe_components_info_employe_info_employe_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./components/employe-components/info-employe/info-employe.component */ "./src/app/components/employe-components/info-employe/info-employe.component.ts");
/* harmony import */ var _components_admin_components_profil_candidat_profil_candidat_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./components/admin-components/profil-candidat/profil-candidat.component */ "./src/app/components/admin-components/profil-candidat/profil-candidat.component.ts");
/* harmony import */ var _syncfusion_ej2_angular_charts__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! @syncfusion/ej2-angular-charts */ "./node_modules/@syncfusion/ej2-angular-charts/@syncfusion/ej2-angular-charts.es5.js");
/* harmony import */ var _profil_profil_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./profil/profil.component */ "./src/app/profil/profil.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! highcharts-angular */ "./node_modules/highcharts-angular/fesm2015/highcharts-angular.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _public_layout_public_layout_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./public-layout/public-layout.component */ "./src/app/public-layout/public-layout.component.ts");
/* harmony import */ var _shared_widgets_pie_pie_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./shared/widgets/pie/pie.component */ "./src/app/shared/widgets/pie/pie.component.ts");
/* harmony import */ var _shared_widgets_line_line_component__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./shared/widgets/line/line.component */ "./src/app/shared/widgets/line/line.component.ts");
/* harmony import */ var _shared_widgets_pie2_pie2_component__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./shared/widgets/pie2/pie2.component */ "./src/app/shared/widgets/pie2/pie2.component.ts");
/* harmony import */ var _components_employe_components_update_info_employe_update_info_employe_component__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./components/employe-components/update-info-employe/update-info-employe.component */ "./src/app/components/employe-components/update-info-employe/update-info-employe.component.ts");
/* harmony import */ var _components_admin_components_update_photo_update_photo_component__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./components/admin-components/update-photo/update-photo.component */ "./src/app/components/admin-components/update-photo/update-photo.component.ts");
/* harmony import */ var _components_candidate_components_response_response_component__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./components/candidate-components/response/response.component */ "./src/app/components/candidate-components/response/response.component.ts");
/* harmony import */ var _components_update_profil_update_profil_component__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./components/update-profil/update-profil.component */ "./src/app/components/update-profil/update-profil.component.ts");
/* harmony import */ var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! @tinymce/tinymce-angular */ "./node_modules/@tinymce/tinymce-angular/fesm5/tinymce-tinymce-angular.js");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./services/token-storage.service */ "./src/app/services/token-storage.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _board_admin_board_admin_component__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./board-admin/board-admin.component */ "./src/app/board-admin/board-admin.component.ts");
/* harmony import */ var _board_user_board_user_component__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./board-user/board-user.component */ "./src/app/board-user/board-user.component.ts");
/* harmony import */ var _board_moderator_board_moderator_component__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./board-moderator/board-moderator.component */ "./src/app/board-moderator/board-moderator.component.ts");
/* harmony import */ var _components_employe_components_candidature_candidature_component__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./components/employe-components/candidature/candidature.component */ "./src/app/components/employe-components/candidature/candidature.component.ts");
/* harmony import */ var _components_employe_components_offres_actuelles_offres_actuelles_component__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./components/employe-components/offres-actuelles/offres-actuelles.component */ "./src/app/components/employe-components/offres-actuelles/offres-actuelles.component.ts");
/* harmony import */ var _components_admin_components_post_job_post_job_component__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./components/admin-components/post-job/post-job.component */ "./src/app/components/admin-components/post-job/post-job.component.ts");
/* harmony import */ var _components_employe_components_jobspage_jobspage_component__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ./components/employe-components/jobspage/jobspage.component */ "./src/app/components/employe-components/jobspage/jobspage.component.ts");
/* harmony import */ var _components_employe_components_jobspage_jobspage_popup_jobspage_popup_component__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ./components/employe-components/jobspage/jobspage-popup/jobspage-popup.component */ "./src/app/components/employe-components/jobspage/jobspage-popup/jobspage-popup.component.ts");
/* harmony import */ var _components_employe_components_myfavjob_myfavjob_component__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ./components/employe-components/myfavjob/myfavjob.component */ "./src/app/components/employe-components/myfavjob/myfavjob.component.ts");
/* harmony import */ var _components_employe_components_jobapp_form_jobapp_form_component__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ./components/employe-components/jobapp-form/jobapp-form.component */ "./src/app/components/employe-components/jobapp-form/jobapp-form.component.ts");
/* harmony import */ var _components_employe_components_jobapp_form_jobapp_form_create_jobapp_form_create_component__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ./components/employe-components/jobapp-form/jobapp-form-create/jobapp-form-create.component */ "./src/app/components/employe-components/jobapp-form/jobapp-form-create/jobapp-form-create.component.ts");
/* harmony import */ var _components_employe_components_jobapp_form_jobapp_form_review_jobapp_form_review_component__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ./components/employe-components/jobapp-form/jobapp-form-review/jobapp-form-review.component */ "./src/app/components/employe-components/jobapp-form/jobapp-form-review/jobapp-form-review.component.ts");
/* harmony import */ var _components_employe_components_applications_applications_component__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! ./components/employe-components/applications/applications.component */ "./src/app/components/employe-components/applications/applications.component.ts");
/* harmony import */ var _components_employe_components_applications_applications_popup_applications_popup_component__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! ./components/employe-components/applications/applications-popup/applications-popup.component */ "./src/app/components/employe-components/applications/applications-popup/applications-popup.component.ts");
/* harmony import */ var _components_employe_components_myfavjob_myfavjob_popup_myfavjob_popup_component__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! ./components/employe-components/myfavjob/myfavjob-popup/myfavjob-popup.component */ "./src/app/components/employe-components/myfavjob/myfavjob-popup/myfavjob-popup.component.ts");
/* harmony import */ var _components_admin_components_view_posting_edit_popup_edit_popup_component__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! ./components/admin-components/view-posting/edit-popup/edit-popup.component */ "./src/app/components/admin-components/view-posting/edit-popup/edit-popup.component.ts");
/* harmony import */ var _components_admin_components_hr_form_hrprofile_popup_hrprofile_popup_component__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! ./components/admin-components/hr-form/hrprofile-popup/hrprofile-popup.component */ "./src/app/components/admin-components/hr-form/hrprofile-popup/hrprofile-popup.component.ts");
/* harmony import */ var _components_employe_components_candidate_form_can_form_popup_can_form_popup_component__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! ./components/employe-components/candidate-form/can-form-popup/can-form-popup.component */ "./src/app/components/employe-components/candidate-form/can-form-popup/can-form-popup.component.ts");
/* harmony import */ var _components_admin_components_hr_profile_hr_profile_component__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(/*! ./components/admin-components/hr-profile/hr-profile.component */ "./src/app/components/admin-components/hr-profile/hr-profile.component.ts");
/* harmony import */ var _components_employe_components_cand_profile_cand_profile_component__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(/*! ./components/employe-components/cand-profile/cand-profile.component */ "./src/app/components/employe-components/cand-profile/cand-profile.component.ts");
/* harmony import */ var _components_employe_components_candidate_form_candidate_form_component__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(/*! ./components/employe-components/candidate-form/candidate-form.component */ "./src/app/components/employe-components/candidate-form/candidate-form.component.ts");
/* harmony import */ var _components_admin_components_view_posting_view_posting_component__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(/*! ./components/admin-components/view-posting/view-posting.component */ "./src/app/components/admin-components/view-posting/view-posting.component.ts");
/* harmony import */ var _components_admin_components_view_applicants_view_applicants_component__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(/*! ./components/admin-components/view-applicants/view-applicants.component */ "./src/app/components/admin-components/view-applicants/view-applicants.component.ts");
/* harmony import */ var _components_admin_components_view_applicants_view_popup_view_popup_component__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(/*! ./components/admin-components/view-applicants/view-popup/view-popup.component */ "./src/app/components/admin-components/view-applicants/view-popup/view-popup.component.ts");
/* harmony import */ var _components_admin_components_hr_form_hr_form_component__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(/*! ./components/admin-components/hr-form/hr-form.component */ "./src/app/components/admin-components/hr-form/hr-form.component.ts");
/* harmony import */ var _components_admin_components_list_employes_update_popup_update_popup_component__WEBPACK_IMPORTED_MODULE_102__ = __webpack_require__(/*! ./components/admin-components/list-employes/update-popup/update-popup.component */ "./src/app/components/admin-components/list-employes/update-popup/update-popup.component.ts");
/* harmony import */ var _components_admin_components_recruitment_recruitment_component__WEBPACK_IMPORTED_MODULE_103__ = __webpack_require__(/*! ./components/admin-components/recruitment/recruitment.component */ "./src/app/components/admin-components/recruitment/recruitment.component.ts");










































































































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
            declarations: [
                _board_admin_board_admin_component__WEBPACK_IMPORTED_MODULE_77__["BoardAdminComponent"],
                _board_user_board_user_component__WEBPACK_IMPORTED_MODULE_78__["BoardUserComponent"],
                _board_moderator_board_moderator_component__WEBPACK_IMPORTED_MODULE_79__["BoardModeratorComponent"],
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
                _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_11__["SidebarComponent"],
                _components_admin_components_add_employe_add_employe_component__WEBPACK_IMPORTED_MODULE_12__["AddEmployeComponent"],
                _components_candidate_components_info_candidate_info_candidate_component__WEBPACK_IMPORTED_MODULE_15__["InfoCandidateComponent"],
                _components_admin_components_post_job_post_job_component__WEBPACK_IMPORTED_MODULE_82__["PostJobComponent"],
                _components_employe_components_jobspage_jobspage_component__WEBPACK_IMPORTED_MODULE_83__["JobspageComponent"],
                _components_employe_components_myfavjob_myfavjob_component__WEBPACK_IMPORTED_MODULE_85__["MyfavjobComponent"],
                _components_employe_components_jobapp_form_jobapp_form_component__WEBPACK_IMPORTED_MODULE_86__["JobappFormComponent"],
                _components_employe_components_jobapp_form_jobapp_form_create_jobapp_form_create_component__WEBPACK_IMPORTED_MODULE_87__["JobappFormCreateComponent"],
                _components_employe_components_jobapp_form_jobapp_form_review_jobapp_form_review_component__WEBPACK_IMPORTED_MODULE_88__["JobappFormReviewComponent"],
                _components_employe_components_cand_profile_cand_profile_component__WEBPACK_IMPORTED_MODULE_96__["CandProfileComponent"],
                _components_employe_components_candidate_form_candidate_form_component__WEBPACK_IMPORTED_MODULE_97__["CandidateFormComponent"],
                _components_admin_components_view_posting_view_posting_component__WEBPACK_IMPORTED_MODULE_98__["ViewPostingComponent"],
                //EditPopupComponent,
                _components_admin_components_view_applicants_view_applicants_component__WEBPACK_IMPORTED_MODULE_99__["ViewApplicantsComponent"],
                _components_admin_components_hr_profile_hr_profile_component__WEBPACK_IMPORTED_MODULE_95__["HrProfileComponent"],
                _components_admin_components_hr_form_hr_form_component__WEBPACK_IMPORTED_MODULE_101__["HrFormComponent"],
                _components_admin_components_list_employes_list_employes_component__WEBPACK_IMPORTED_MODULE_25__["ListEmployesComponent"],
                _components_admin_components_profile_employe_profile_employe_component__WEBPACK_IMPORTED_MODULE_27__["ProfileEmployeComponent"],
                _components_admin_components_update_employe_update_employe_component__WEBPACK_IMPORTED_MODULE_28__["UpdateEmployeComponent"],
                _components_admin_components_recrutements_recrutements_component__WEBPACK_IMPORTED_MODULE_29__["RecrutementsComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_54__["LoginComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_55__["RegisterComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_57__["HomeComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_58__["FooterComponent"],
                _components_employe_components_info_employe_info_employe_component__WEBPACK_IMPORTED_MODULE_59__["InfoEmployeComponent"],
                _components_admin_components_profil_candidat_profil_candidat_component__WEBPACK_IMPORTED_MODULE_60__["ProfilCandidatComponent"],
                _profil_profil_component__WEBPACK_IMPORTED_MODULE_62__["ProfilComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_63__["DashboardComponent"],
                _public_layout_public_layout_component__WEBPACK_IMPORTED_MODULE_66__["PublicLayoutComponent"],
                _shared_widgets_pie_pie_component__WEBPACK_IMPORTED_MODULE_67__["PieComponent"],
                _shared_widgets_line_line_component__WEBPACK_IMPORTED_MODULE_68__["LineComponent"],
                _shared_widgets_pie2_pie2_component__WEBPACK_IMPORTED_MODULE_69__["Pie2Component"],
                _components_employe_components_update_info_employe_update_info_employe_component__WEBPACK_IMPORTED_MODULE_70__["UpdateInfoEmployeComponent"],
                _components_admin_components_update_photo_update_photo_component__WEBPACK_IMPORTED_MODULE_71__["UpdatePhotoComponent"],
                _components_candidate_components_response_response_component__WEBPACK_IMPORTED_MODULE_72__["ResponseComponent"],
                _components_update_profil_update_profil_component__WEBPACK_IMPORTED_MODULE_73__["UpdateProfilComponent"],
                _components_employe_components_candidature_candidature_component__WEBPACK_IMPORTED_MODULE_80__["CandidatureComponent"],
                _components_employe_components_offres_actuelles_offres_actuelles_component__WEBPACK_IMPORTED_MODULE_81__["OffresActuellesComponent"],
                _components_employe_components_jobspage_jobspage_popup_jobspage_popup_component__WEBPACK_IMPORTED_MODULE_84__["JobspagePopupComponent"],
                _components_employe_components_applications_applications_popup_applications_popup_component__WEBPACK_IMPORTED_MODULE_90__["ApplicationsPopupComponent"],
                _components_employe_components_applications_applications_component__WEBPACK_IMPORTED_MODULE_89__["ApplicationsComponent"],
                _components_employe_components_myfavjob_myfavjob_popup_myfavjob_popup_component__WEBPACK_IMPORTED_MODULE_91__["MyfavjobPopupComponent"],
                _components_admin_components_view_posting_edit_popup_edit_popup_component__WEBPACK_IMPORTED_MODULE_92__["EditPopupComponent"],
                _components_admin_components_hr_form_hrprofile_popup_hrprofile_popup_component__WEBPACK_IMPORTED_MODULE_93__["HrprofilePopupComponent"],
                _components_employe_components_candidate_form_can_form_popup_can_form_popup_component__WEBPACK_IMPORTED_MODULE_94__["CanFormPopupComponent"],
                _components_admin_components_view_applicants_view_popup_view_popup_component__WEBPACK_IMPORTED_MODULE_100__["ViewPopupComponent"],
                _components_admin_components_list_employes_update_popup_update_popup_component__WEBPACK_IMPORTED_MODULE_102__["UpdatePopupComponent"],
                _components_admin_components_recruitment_recruitment_component__WEBPACK_IMPORTED_MODULE_103__["RecruitmentComponent"],
            ],
            imports: [
                ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot(),
                _angular_material_core__WEBPACK_IMPORTED_MODULE_52__["MatNativeDateModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_52__["MatRippleModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_51__["MatRadioModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_50__["MatStepperModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_49__["MatAutocompleteModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__["MatDialogModule"],
                _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_53__["ScheduleModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_22__["ModalModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_19__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__["NgbModalModule"],
                angularx_flatpickr__WEBPACK_IMPORTED_MODULE_20__["FlatpickrModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_22__["ModalModule"].forRoot(),
                angular_calendar__WEBPACK_IMPORTED_MODULE_17__["CalendarModule"].forRoot({
                    provide: angular_calendar__WEBPACK_IMPORTED_MODULE_17__["DateAdapter"],
                    useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_18__["adapterFactory"]
                }),
                _angular_material_button__WEBPACK_IMPORTED_MODULE_35__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_42__["MatIconModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_39__["MatToolbarModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_35__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_42__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_31__["MatCheckboxModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__["MatDialogModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_46__["MatExpansionModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_41__["MatInputModule"],
                _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_2__["FullCalendarModule"],
                _syncfusion_ej2_angular_charts__WEBPACK_IMPORTED_MODULE_61__["AccumulationChartModule"],
                highcharts_angular__WEBPACK_IMPORTED_MODULE_64__["HighchartsChartModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_33__["MatCardModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_32__["MatDividerModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_65__["FlexLayoutModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_33__["MatCardModule"],
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_23__["Ng2SearchPipeModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_24__["NgxPaginationModule"],
                _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_74__["EditorModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_38__["MatSnackBarModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_32__["MatDividerModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_33__["MatCardModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_34__["MatFormFieldModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_35__["MatButtonModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_36__["MatTableModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_37__["MatSelectModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_38__["MatSnackBarModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_39__["MatToolbarModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_40__["MatSortModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_41__["MatInputModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_42__["MatIconModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_43__["MatListModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_44__["MatMenuModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_45__["MatDatepickerModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_52__["MatNativeDateModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_46__["MatExpansionModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_47__["MatTooltipModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_48__["MatProgressSpinnerModule"]
            ],
            exports: [
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_49__["MatAutocompleteModule"],
                _shared_widgets_pie_pie_component__WEBPACK_IMPORTED_MODULE_67__["PieComponent"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_32__["MatDividerModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_33__["MatCardModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_34__["MatFormFieldModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_35__["MatButtonModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_36__["MatTableModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_37__["MatSelectModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_38__["MatSnackBarModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_39__["MatToolbarModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_40__["MatSortModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_41__["MatInputModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_42__["MatIconModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_43__["MatListModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_44__["MatMenuModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_45__["MatDatepickerModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_52__["MatNativeDateModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_46__["MatExpansionModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_47__["MatTooltipModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_48__["MatProgressSpinnerModule"]
            ],
            providers: [_angular_material_datepicker__WEBPACK_IMPORTED_MODULE_45__["MatDatepickerModule"], _services_employe_service__WEBPACK_IMPORTED_MODULE_13__["EmployeService"], _services_employee_service__WEBPACK_IMPORTED_MODULE_14__["EmployeeService"], , _services_email_service__WEBPACK_IMPORTED_MODULE_30__["EmailService"], _helpers_auth_interceptor__WEBPACK_IMPORTED_MODULE_56__["authInterceptorProviders"], _services_auth_service__WEBPACK_IMPORTED_MODULE_76__["AuthService"], _services_token_storage_service__WEBPACK_IMPORTED_MODULE_75__["TokenStorageService"], { provide: _angular_material__WEBPACK_IMPORTED_MODULE_31__["MAT_DIALOG_DATA"], useValue: {} },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_31__["MatDialogRef"], useValue: {} }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
            entryComponents: [_components_employe_components_jobspage_jobspage_popup_jobspage_popup_component__WEBPACK_IMPORTED_MODULE_84__["JobspagePopupComponent"],
                _components_employe_components_applications_applications_popup_applications_popup_component__WEBPACK_IMPORTED_MODULE_90__["ApplicationsPopupComponent"],
                _components_employe_components_myfavjob_myfavjob_popup_myfavjob_popup_component__WEBPACK_IMPORTED_MODULE_91__["MyfavjobPopupComponent"],
                _components_admin_components_view_posting_edit_popup_edit_popup_component__WEBPACK_IMPORTED_MODULE_92__["EditPopupComponent"],
                _components_admin_components_hr_form_hrprofile_popup_hrprofile_popup_component__WEBPACK_IMPORTED_MODULE_93__["HrprofilePopupComponent"],
                _components_employe_components_candidate_form_can_form_popup_can_form_popup_component__WEBPACK_IMPORTED_MODULE_94__["CanFormPopupComponent"],
                _components_admin_components_view_applicants_view_popup_view_popup_component__WEBPACK_IMPORTED_MODULE_100__["ViewPopupComponent"],
                _components_admin_components_list_employes_update_popup_update_popup_component__WEBPACK_IMPORTED_MODULE_102__["UpdatePopupComponent"],
            ],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/board-admin/board-admin.component.css":
/*!*******************************************************!*\
  !*** ./src/app/board-admin/board-admin.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvYXJkLWFkbWluL2JvYXJkLWFkbWluLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/board-admin/board-admin.component.ts":
/*!******************************************************!*\
  !*** ./src/app/board-admin/board-admin.component.ts ***!
  \******************************************************/
/*! exports provided: BoardAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardAdminComponent", function() { return BoardAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");



var BoardAdminComponent = /** @class */ (function () {
    function BoardAdminComponent(userService) {
        this.userService = userService;
    }
    BoardAdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getAdminBoard().subscribe(function (data) {
            _this.content = data;
        }, function (err) {
            _this.content = JSON.parse(err.error).message;
        });
    };
    BoardAdminComponent.ctorParameters = function () { return [
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
    ]; };
    BoardAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-board-admin',
            template: __webpack_require__(/*! raw-loader!./board-admin.component.html */ "./node_modules/raw-loader/index.js!./src/app/board-admin/board-admin.component.html"),
            styles: [__webpack_require__(/*! ./board-admin.component.css */ "./src/app/board-admin/board-admin.component.css")]
        })
    ], BoardAdminComponent);
    return BoardAdminComponent;
}());



/***/ }),

/***/ "./src/app/board-moderator/board-moderator.component.css":
/*!***************************************************************!*\
  !*** ./src/app/board-moderator/board-moderator.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvYXJkLW1vZGVyYXRvci9ib2FyZC1tb2RlcmF0b3IuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/board-moderator/board-moderator.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/board-moderator/board-moderator.component.ts ***!
  \**************************************************************/
/*! exports provided: BoardModeratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardModeratorComponent", function() { return BoardModeratorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");



var BoardModeratorComponent = /** @class */ (function () {
    function BoardModeratorComponent(userService) {
        this.userService = userService;
    }
    BoardModeratorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getModeratorBoard().subscribe(function (data) {
            _this.content = data;
        }, function (err) {
            _this.content = JSON.parse(err.error).message;
        });
    };
    BoardModeratorComponent.ctorParameters = function () { return [
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
    ]; };
    BoardModeratorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-board-moderator',
            template: __webpack_require__(/*! raw-loader!./board-moderator.component.html */ "./node_modules/raw-loader/index.js!./src/app/board-moderator/board-moderator.component.html"),
            styles: [__webpack_require__(/*! ./board-moderator.component.css */ "./src/app/board-moderator/board-moderator.component.css")]
        })
    ], BoardModeratorComponent);
    return BoardModeratorComponent;
}());



/***/ }),

/***/ "./src/app/board-user/board-user.component.css":
/*!*****************************************************!*\
  !*** ./src/app/board-user/board-user.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvYXJkLXVzZXIvYm9hcmQtdXNlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/board-user/board-user.component.ts":
/*!****************************************************!*\
  !*** ./src/app/board-user/board-user.component.ts ***!
  \****************************************************/
/*! exports provided: BoardUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardUserComponent", function() { return BoardUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");



var BoardUserComponent = /** @class */ (function () {
    function BoardUserComponent(userService) {
        this.userService = userService;
    }
    BoardUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUserBoard().subscribe(function (data) {
            _this.content = data;
        }, function (err) {
            _this.content = JSON.parse(err.error).message;
        });
    };
    BoardUserComponent.ctorParameters = function () { return [
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
    ]; };
    BoardUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-board-user',
            template: __webpack_require__(/*! raw-loader!./board-user.component.html */ "./node_modules/raw-loader/index.js!./src/app/board-user/board-user.component.html"),
            styles: [__webpack_require__(/*! ./board-user.component.css */ "./src/app/board-user/board-user.component.css")]
        })
    ], BoardUserComponent);
    return BoardUserComponent;
}());



/***/ }),

/***/ "./src/app/components/admin-components/add-employe/add-employe.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/components/admin-components/add-employe/add-employe.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\n  width: 800px;\n  margin: 2em auto;\n  text-align: center;\n}\nh3 {\n  margin-top: 20px;\n  margin-bottom: 10px;\n  font-family: 'Montserrat', sans-serif;\n  font-weight: 500;\n  line-height: 1.1;\n  color: inherit;\n  font-size: 24px;\n}\nh1 {\n  margin-top: 20px;\n  margin-bottom: 10px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi1jb21wb25lbnRzL2FkZC1lbXBsb3llL2FkZC1lbXBsb3llLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixxQ0FBcUM7RUFDckMsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQixDQUFDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi1jb21wb25lbnRzL2FkZC1lbXBsb3llL2FkZC1lbXBsb3llLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xuICB3aWR0aDogODAwcHg7XG4gIG1hcmdpbjogMmVtIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmgzIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMTtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbmgxIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDt9Il19 */"

/***/ }),

/***/ "./src/app/components/admin-components/add-employe/add-employe.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/admin-components/add-employe/add-employe.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AddEmployeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEmployeComponent", function() { return AddEmployeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/token-storage.service */ "./src/app/services/token-storage.service.ts");








var AddEmployeComponent = /** @class */ (function () {
    function AddEmployeComponent(http, route, AuthService, TokenStorageService, router) {
        this.http = http;
        this.route = route;
        this.AuthService = AuthService;
        this.TokenStorageService = TokenStorageService;
        this.router = router;
        this.hr_id = "";
        this.date = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](new Date());
        this.serializedDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]((new Date()).toISOString());
    }
    AddEmployeComponent.prototype.ngOnInit = function () {
        var user = this.TokenStorageService.getUser();
        this.hr_id = user.id;
        this.posted = true;
    };
    AddEmployeComponent.prototype.submit = function () {
        var req = {
            rec_id: "",
            hr_id: this.hr_id,
            name: this.RecruiterName,
            poste: this.RecruiterPoste,
            phone: this.RecruiterPhone,
            email: this.RecruiterEmail,
        };
        console.log(req);
        this.http
            .post("/hr/create_recruiter", req)
            .subscribe(function (response) {
            console.log("recruiter post successed: ", response);
        });
        this.posted = false;
    };
    AddEmployeComponent.prototype.postAnother = function () {
        this.RecruiterName = "";
        this.RecruiterPoste = "";
        this.RecruiterPhone = "";
        this.RecruiterEmail = "";
    };
    AddEmployeComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
        { type: src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_6__["TokenStorageService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    AddEmployeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-employe',
            template: __webpack_require__(/*! raw-loader!./add-employe.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/admin-components/add-employe/add-employe.component.html"),
            styles: [__webpack_require__(/*! ./add-employe.component.css */ "./src/app/components/admin-components/add-employe/add-employe.component.css")]
        })
    ], AddEmployeComponent);
    return AddEmployeComponent;
}());



/***/ }),

/***/ "./src/app/components/admin-components/hr-form/hr-form.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/components/admin-components/hr-form/hr-form.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n  min-height: 70px;\n}\n\n\n.mat-stepper-horizontal {\n  margin-top: 8px;\n}\n\n\n.mat-form-field {\n  margin-top: 16px;\n}\n\n\n.mat-form-field {\n  margin-top: 20px;\n  margin-left: 8px;\n}\n\n\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n  max-height: 500px;\n}\n\n\n.example-full-width {\n  width: 100%;\n}\n\n\ntd {\n  padding-right: 8px;\n}\n\n\n.mat-card {\n  width: 80%;\n  margin: auto;\n}\n\n\ntextarea{\n    min-height:300px;\n}\n\n\nbody{\n  width: 800px;\n  margin: 2em auto;\n  text-align: center;\n}\n\n\nh1 {\n  margin-top: 20px;\n  margin-bottom: 10px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi1jb21wb25lbnRzL2hyLWZvcm0vaHItZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCOzs7QUFHQTtFQUNFLGVBQWU7QUFDakI7OztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7OztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COzs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7OztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7QUFDZDs7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7OztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7OztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQixDQUFDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi1jb21wb25lbnRzL2hyLWZvcm0vaHItZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhciB7XG4gIG1pbi1oZWlnaHQ6IDcwcHg7XG59XG5cblxuLm1hdC1zdGVwcGVyLWhvcml6b250YWwge1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG5cbi5leGFtcGxlLWZvcm0ge1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogNTAwcHg7XG59XG5cbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxudGQge1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG59XG5cbi5tYXQtY2FyZCB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogYXV0bztcbn1cblxudGV4dGFyZWF7XG4gICAgbWluLWhlaWdodDozMDBweDtcbn1cblxuYm9keXtcbiAgd2lkdGg6IDgwMHB4O1xuICBtYXJnaW46IDJlbSBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5oMSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7fSJdfQ== */"

/***/ }),

/***/ "./src/app/components/admin-components/hr-form/hr-form.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/admin-components/hr-form/hr-form.component.ts ***!
  \**************************************************************************/
/*! exports provided: HrFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HrFormComponent", function() { return HrFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _hr_form_hrprofile_popup_hrprofile_popup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hr-form/hrprofile-popup/hrprofile-popup.component */ "./src/app/components/admin-components/hr-form/hrprofile-popup/hrprofile-popup.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/token-storage.service */ "./src/app/services/token-storage.service.ts");









var HrFormComponent = /** @class */ (function () {
    function HrFormComponent(http, route, AuthService, router, TokenStorageService, dialog) {
        this.http = http;
        this.route = route;
        this.AuthService = AuthService;
        this.router = router;
        this.TokenStorageService = TokenStorageService;
        this.dialog = dialog;
        this.date = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](new Date());
        this.serializedDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]((new Date()).toISOString());
        this.hr_id = "";
        this.firstName = "";
        this.lastName = "";
        this.phone = "";
        this.title = "";
        this.company = "";
        this.startDate = "";
        this.note = "";
        this.contacts = "";
        this.isLinear = false;
        this.selectedFile = null;
    }
    HrFormComponent.prototype.ngOnInit = function () {
        var user = this.TokenStorageService.getUser();
        this.hr_id = user.id;
        this.getHrInfo();
        this.loadImg();
    };
    //get default info
    HrFormComponent.prototype.getHrInfo = function () {
        var _this = this;
        // console.log("client side:", this.hr_id);
        var req = {
            hr_num: this.hr_id,
        };
        this.http
            .post("/hr/get-profile", req)
            .subscribe(function (AccountData) {
            _this.firstName = AccountData["firstName"];
            _this.lastName = AccountData["lastName"];
            _this.phone = AccountData["phone"];
            _this.title = AccountData["title"];
            _this.company = AccountData["company"];
            _this.startDate = AccountData["startDate"];
            _this.note = AccountData["note"];
            _this.contacts = AccountData["contacts"];
        });
    };
    //save update 
    HrFormComponent.prototype.SaveUpdate = function () {
        var req = {
            hr_num: this.hr_id,
            firstName: this.firstName,
            lastName: this.lastName,
            phone: this.phone,
            title: this.title,
            company: this.company,
            startDate: this.startDate,
            note: this.note,
            contacts: this.contacts
        };
        this.http
            .put("/hr/update/", req)
            .subscribe(function (response) {
            console.log("res is :", response);
        });
        this.openDialog();
    };
    HrFormComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(_hr_form_hrprofile_popup_hrprofile_popup_component__WEBPACK_IMPORTED_MODULE_4__["HrprofilePopupComponent"], {
            width: '300px',
            height: '200px',
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    HrFormComponent.prototype.selectFile = function (event) {
        this.selectedFile = event.target.files[0];
    };
    HrFormComponent.prototype.uploadBotton = function () {
        // console.log("id is :", this.hr_id);
        var userInfo = this.hr_id;
        var fd = new FormData();
        // const fd1 = new FormData();
        fd.append('userImage', this.selectedFile, userInfo);
        // fd1.append('userImage', this.selectedFile, this.selectedFile.name);
        // console.log(fd);
        this.http
            .post("/images/update-pic", fd)
            .subscribe(function (response) {
            console.log("res is :", response);
        });
    };
    HrFormComponent.prototype.arrayBufferToBase64 = function (buffer) {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach(function (b) { return binary += String.fromCharCode(b); });
        return window.btoa(binary);
    };
    ;
    HrFormComponent.prototype.loadImg = function () {
        var _this = this;
        var req = {
            userInfo: this.hr_id
        };
        this.http
            .post("/images/load-pic", req)
            .subscribe(function (data) {
            var base64Flag = 'data:image/jpeg;base64,';
            var imageStr = _this.arrayBufferToBase64(data["img"].data.data);
            _this.pic = base64Flag + imageStr;
        });
    };
    HrFormComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_8__["TokenStorageService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }
    ]; };
    HrFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hr-form',
            template: __webpack_require__(/*! raw-loader!./hr-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/admin-components/hr-form/hr-form.component.html"),
            styles: [__webpack_require__(/*! ./hr-form.component.css */ "./src/app/components/admin-components/hr-form/hr-form.component.css")]
        })
    ], HrFormComponent);
    return HrFormComponent;
}());



/***/ }),

/***/ "./src/app/components/admin-components/hr-form/hrprofile-popup/hrprofile-popup.component.css":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/admin-components/hr-form/hrprofile-popup/hrprofile-popup.component.css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4tY29tcG9uZW50cy9oci1mb3JtL2hycHJvZmlsZS1wb3B1cC9ocnByb2ZpbGUtcG9wdXAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/admin-components/hr-form/hrprofile-popup/hrprofile-popup.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/components/admin-components/hr-form/hrprofile-popup/hrprofile-popup.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: HrprofilePopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HrprofilePopupComponent", function() { return HrprofilePopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var HrprofilePopupComponent = /** @class */ (function () {
    function HrprofilePopupComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    HrprofilePopupComponent.prototype.ngOnInit = function () {
    };
    HrprofilePopupComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    HrprofilePopupComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
    ]; };
    HrprofilePopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hrprofile-popup',
            template: __webpack_require__(/*! raw-loader!./hrprofile-popup.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/admin-components/hr-form/hrprofile-popup/hrprofile-popup.component.html"),
            styles: [__webpack_require__(/*! ./hrprofile-popup.component.css */ "./src/app/components/admin-components/hr-form/hrprofile-popup/hrprofile-popup.component.css")]
        })
    ], HrprofilePopupComponent);
    return HrprofilePopupComponent;
}());



/***/ }),

/***/ "./src/app/components/admin-components/hr-profile/hr-profile.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/components/admin-components/hr-profile/hr-profile.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.pro_photo {\n  width: 100%;\n  height: 15vw;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.navbar {\n  min-height: 70px;\n}\n\n.card {\n  margin: 0 auto; /* Added */\n  float: none; /* Added */\n  margin-bottom: 10px; /* Added */\n}\n\nbody{\n  width: 800px;\n  margin: 2em auto;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi1jb21wb25lbnRzL2hyLXByb2ZpbGUvaHItcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0JBQWlCO0tBQWpCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWMsRUFBRSxVQUFVO0VBQzFCLFdBQVcsRUFBRSxVQUFVO0VBQ3ZCLG1CQUFtQixFQUFFLFVBQVU7QUFDakM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4tY29tcG9uZW50cy9oci1wcm9maWxlL2hyLXByb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnByb19waG90byB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE1dnc7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4ubmF2YmFyIHtcbiAgbWluLWhlaWdodDogNzBweDtcbn1cblxuLmNhcmQge1xuICBtYXJnaW46IDAgYXV0bzsgLyogQWRkZWQgKi9cbiAgZmxvYXQ6IG5vbmU7IC8qIEFkZGVkICovXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7IC8qIEFkZGVkICovXG59XG5cbmJvZHl7XG4gIHdpZHRoOiA4MDBweDtcbiAgbWFyZ2luOiAyZW0gYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/admin-components/hr-profile/hr-profile.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/admin-components/hr-profile/hr-profile.component.ts ***!
  \********************************************************************************/
/*! exports provided: HrProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HrProfileComponent", function() { return HrProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/token-storage.service */ "./src/app/services/token-storage.service.ts");






var HrProfileComponent = /** @class */ (function () {
    function HrProfileComponent(http, route, AuthService, TokenStorageService) {
        this.http = http;
        this.route = route;
        this.AuthService = AuthService;
        this.TokenStorageService = TokenStorageService;
        this.hr_id = "";
        this.firstName = "";
        this.lastName = "";
        this.phone = "";
        this.title = "";
        this.company = "";
        this.startDate = "";
        this.note = "";
        this.contacts = "";
    }
    HrProfileComponent.prototype.ngOnInit = function () {
        var user = this.TokenStorageService.getUser();
        this.hr_id = user.id;
        this.getHrInfo();
        this.loadImg();
    };
    //get default account default
    HrProfileComponent.prototype.getHrInfo = function () {
        var _this = this;
        // console.log("client side:", this.hr_id);
        var req = {
            hr_num: this.hr_id,
        };
        this.http
            .post("/hr/get-profile", req)
            .subscribe(function (AccountData) {
            _this.firstName = AccountData["firstName"];
            _this.lastName = AccountData["lastName"];
            _this.phone = AccountData["phone"];
            _this.title = AccountData["title"];
            _this.company = AccountData["company"];
            _this.startDate = AccountData["startDate"];
            _this.note = AccountData["note"];
            _this.contacts = AccountData["contacts"];
        });
    };
    HrProfileComponent.prototype.getImage = function () {
        var _this = this;
        console.log("get image");
        var req = {
            userInfo: this.hr_id,
        };
        this.http
            .post("/images/get-pic", req)
            .subscribe(function (AccountData) {
            _this.filePath = AccountData["img"];
            console.log(" proflile path is : " + _this.filePath);
            // var path = '../../../';
            // var reader = new FileReader();
            // this.url = path + this.filePath;
            // console.log(this.url);
        });
    };
    HrProfileComponent.prototype.arrayBufferToBase64 = function (buffer) {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach(function (b) { return binary += String.fromCharCode(b); });
        return window.btoa(binary);
    };
    ;
    HrProfileComponent.prototype.loadImg = function () {
        var _this = this;
        var req = {
            userInfo: this.hr_id
        };
        this.http
            .post("/images/load-pic", req)
            .subscribe(function (data) {
            var base64Flag = 'data:image/jpeg;base64,';
            var imageStr = _this.arrayBufferToBase64(data["img"].data.data);
            _this.pic = base64Flag + imageStr;
        });
    };
    HrProfileComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_5__["TokenStorageService"] }
    ]; };
    HrProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hr-profile',
            template: __webpack_require__(/*! raw-loader!./hr-profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/admin-components/hr-profile/hr-profile.component.html"),
            styles: [__webpack_require__(/*! ./hr-profile.component.css */ "./src/app/components/admin-components/hr-profile/hr-profile.component.css")]
        })
    ], HrProfileComponent);
    return HrProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/admin-components/list-employes/list-employes.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/components/admin-components/list-employes/list-employes.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button{\n  width: 26px;\n  height: 26px;\n  margin : 2px;\n  font-size: 13px;\n  \n}\n\nh3 {\n  margin-top: 20px;\n  margin-bottom: 10px;\n  font-family: 'Montserrat', sans-serif;\n  font-weight: 500;\n  line-height: 1.1;\n  color: inherit;\n  font-size: 24px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi1jb21wb25lbnRzL2xpc3QtZW1wbG95ZXMvbGlzdC1lbXBsb3llcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTs7QUFFakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHFDQUFxQztFQUNyQyxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi1jb21wb25lbnRzL2xpc3QtZW1wbG95ZXMvbGlzdC1lbXBsb3llcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9ue1xuICB3aWR0aDogMjZweDtcbiAgaGVpZ2h0OiAyNnB4O1xuICBtYXJnaW4gOiAycHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgXG59XG5cbmgzIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMTtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/components/admin-components/list-employes/list-employes.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/admin-components/list-employes/list-employes.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ListEmployesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListEmployesComponent", function() { return ListEmployesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _update_popup_update_popup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update-popup/update-popup.component */ "./src/app/components/admin-components/list-employes/update-popup/update-popup.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/token-storage.service */ "./src/app/services/token-storage.service.ts");







var ListEmployesComponent = /** @class */ (function () {
    function ListEmployesComponent(http, AuthService, TokenStorageService, dialog) {
        this.http = http;
        this.AuthService = AuthService;
        this.TokenStorageService = TokenStorageService;
        this.dialog = dialog;
        this.panelOpenState = false;
        this.status = 'Enable';
        this.toggle = true;
    }
    ListEmployesComponent.prototype.ngOnInit = function () {
        var user = this.TokenStorageService.getUser();
        this.hrId = user.id;
        console.log("hr_id is: " + this.hrId);
        this.searchPostedRec();
    };
    ListEmployesComponent.prototype.searchPostedRec = function () {
        var _this = this;
        var req = {
            hr_id: this.hrId,
        };
        this.http
            .post("/hr/rec_list", req)
            .subscribe(function (postData) {
            _this.appResult = postData;
            // console.log(this.searchResault[0]);
            console.log("successed search");
        });
    };
    ListEmployesComponent.prototype.delete = function (emp) {
        var req = {
            rec_id: emp.rec_id,
        };
        // console.log(req);
        this.http
            .post("/hr/delete_recruiter", req)
            .subscribe(function (response) {
            console.log("Recruiter delete successed: ", response);
        });
    };
    ListEmployesComponent.prototype.openDialog = function (r) {
        var _this = this;
        this.changed = true;
        var dialogRef = this.dialog.open(_update_popup_update_popup_component__WEBPACK_IMPORTED_MODULE_3__["UpdatePopupComponent"], {
            width: '800px',
            height: '600px',
            data: { rec_id: r.rec_id,
                name: r.RecruiterName,
                email: r.RecruiterEmail,
                poste: r.RecruiterPoste,
                phone: r.RecruiterPhone,
                changed: r.changed }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.rec_id = result.rec_id;
                _this.RecruiterEmail = result.email;
                _this.RecruiterName = result.name;
                _this.RecruiterPoste = result.poste;
                _this.RecruiterPhone = result.phone;
                _this.updateRecruit();
            }
        });
    };
    ListEmployesComponent.prototype.update = function (r) {
        this.openDialog(r);
    };
    ListEmployesComponent.prototype.updateRecruit = function () {
        var req = {
            hr_id: this.hrId,
            rec_id: this.rec_id,
            name: this.RecruiterName,
            email: this.RecruiterEmail,
            poste: this.RecruiterPoste,
            phone: this.RecruiterPhone,
        };
        this.http
            .post("/hr/update_recruiter", req)
            .subscribe(function (response) {
            console.log("rec update successed: ", response);
        });
    };
    ListEmployesComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
        { type: src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_6__["TokenStorageService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
    ]; };
    ListEmployesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-employes',
            template: __webpack_require__(/*! raw-loader!./list-employes.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/admin-components/list-employes/list-employes.component.html"),
            styles: [__webpack_require__(/*! ./list-employes.component.css */ "./src/app/components/admin-components/list-employes/list-employes.component.css")]
        })
    ], ListEmployesComponent);
    return ListEmployesComponent;
}());



/***/ }),

/***/ "./src/app/components/admin-components/list-employes/update-popup/update-popup.component.css":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/admin-components/list-employes/update-popup/update-popup.component.css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4tY29tcG9uZW50cy9saXN0LWVtcGxveWVzL3VwZGF0ZS1wb3B1cC91cGRhdGUtcG9wdXAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/admin-components/list-employes/update-popup/update-popup.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/components/admin-components/list-employes/update-popup/update-popup.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: UpdatePopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePopupComponent", function() { return UpdatePopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/token-storage.service */ "./src/app/services/token-storage.service.ts");




var UpdatePopupComponent = /** @class */ (function () {
    function UpdatePopupComponent(dialogRef, TokenStorageService, data) {
        this.dialogRef = dialogRef;
        this.TokenStorageService = TokenStorageService;
        this.data = data;
    }
    UpdatePopupComponent.prototype.ngOnInit = function () {
        console.log(this.data.changed);
    };
    UpdatePopupComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    UpdatePopupComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
    ]; };
    UpdatePopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update-popup',
            template: __webpack_require__(/*! raw-loader!./update-popup.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/admin-components/list-employes/update-popup/update-popup.component.html"),
            styles: [__webpack_require__(/*! ./update-popup.component.css */ "./src/app/components/admin-components/list-employes/update-popup/update-popup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
    ], UpdatePopupComponent);
    return UpdatePopupComponent;
}());



/***/ }),

/***/ "./src/app/components/admin-components/post-job/post-job.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/components/admin-components/post-job/post-job.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\n  width: 800px;\n  margin: 2em auto;\n  text-align: center;\n}\nh3 {\n  margin-top: 20px;\n  margin-bottom: 10px;\n  font-family: 'Montserrat', sans-serif;\n  font-weight: 500;\n  line-height: 1.1;\n  color: inherit;\n  font-size: 24px;\n}\nh1 {\n  margin-top: 20px;\n  margin-bottom: 10px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi1jb21wb25lbnRzL3Bvc3Qtam9iL3Bvc3Qtam9iLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixxQ0FBcUM7RUFDckMsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQixDQUFDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi1jb21wb25lbnRzL3Bvc3Qtam9iL3Bvc3Qtam9iLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xuICB3aWR0aDogODAwcHg7XG4gIG1hcmdpbjogMmVtIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmgzIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMTtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbmgxIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDt9Il19 */"

/***/ }),

/***/ "./src/app/components/admin-components/post-job/post-job.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/admin-components/post-job/post-job.component.ts ***!
  \****************************************************************************/
/*! exports provided: PostJobComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostJobComponent", function() { return PostJobComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/token-storage.service */ "./src/app/services/token-storage.service.ts");









var PostJobComponent = /** @class */ (function () {
    function PostJobComponent(http, route, AuthService, TokenStorageService, router) {
        var _this = this;
        this.http = http;
        this.route = route;
        this.AuthService = AuthService;
        this.TokenStorageService = TokenStorageService;
        this.router = router;
        this.hr_id = "";
        this.date = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](new Date());
        this.serializedDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]((new Date()).toISOString());
        this.companyCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.company = [
            {
                name: 'IBM',
                flag: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg'
            },
            {
                name: 'Néopolise',
                flag: '../assets/img/neopolise.png'
            },
            {
                name: 'Whitecape',
                flag: '../assets/img/whitecape.png'
            },
            {
                name: 'NeoXam',
                flag: '../assets/img/NeoXam.svg'
            },
        ];
        this.jobtypes = [
            { value: 'Stage', viewValue: 'Stage' },
            { value: 'Full Time', viewValue: 'Full Time' },
            { value: 'Part Time', viewValue: 'Part Time' }
        ];
        this.locations = [
            { value: 'Tunis', viewValue: 'Tunis' },
            { value: 'Ariana', viewValue: 'Ariana' },
            { value: 'Nabeul', viewValue: 'Nabeul' },
            { value: 'Sousse', viewValue: 'Sousse' },
            { value: 'kairouan', viewValue: 'Kairouan' },
            { value: 'Sfax', viewValue: 'Sfax' },
            { value: 'Gabes', viewValue: 'Gabes' },
        ];
        this.industries = [
            { value: 'Informatique', viewValue: 'Informatique' },
            { value: 'Finance', viewValue: 'Finance' },
            { value: 'Marketing', viewValue: 'Marketing' },
            { value: 'Government/Education', viewValue: 'Government/Education' },
            { value: 'Consulting', viewValue: 'Consulting' },
            { value: 'Transportation/Logistics', viewValue: 'Transportation/Logistics' },
            { value: 'Others', viewValue: 'Others' }
        ];
        this.filteredCompany = this.companyCtrl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (state) { return state ? _this._filteredCompany(state) : _this.company.slice(); }));
    }
    PostJobComponent.prototype.ngOnInit = function () {
        var user = this.TokenStorageService.getUser();
        this.hr_id = user.id;
        this.posted = true;
    };
    PostJobComponent.prototype._filteredCompany = function (value) {
        var filterValue = value.toLowerCase();
        return this.company.filter(function (state) { return state.name.toLowerCase().indexOf(filterValue) === 0; });
    };
    PostJobComponent.prototype.submit = function () {
        var req = {
            job_id: Math.random().toString(36).substr(2, 9),
            hr_id: this.hr_id,
            name: this.name,
            title: this.jobTitle,
            jobType: this.jobType,
            company: this.companyName,
            location: this.location,
            industryType: this.industryType,
            startDate: this.startDate,
            expirationDate: this.expirationDate,
            jobDescription: this.description,
            candidate: [],
        };
        console.log(req);
        this.http
            .post("/hr/create_job", req)
            .subscribe(function (response) {
            console.log("job post successed: ", response);
        });
        this.posted = false;
    };
    PostJobComponent.prototype.postAnother = function () {
        this.jobTitle = "";
        this.companyName = "";
        this.location = "";
        this.industryType = "";
        this.jobType = "";
        this.startDate = null;
        this.expirationDate = null;
        this.description = "";
        this.posted = true;
    };
    PostJobComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
        { type: src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_7__["TokenStorageService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    PostJobComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post-job',
            template: __webpack_require__(/*! raw-loader!./post-job.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/admin-components/post-job/post-job.component.html"),
            styles: [__webpack_require__(/*! ./post-job.component.css */ "./src/app/components/admin-components/post-job/post-job.component.css")]
        })
    ], PostJobComponent);
    return PostJobComponent;
}());



/***/ }),

/***/ "./src/app/components/admin-components/profil-candidat/profil-candidat.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/admin-components/profil-candidat/profil-candidat.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');\n\n*{\n    margin:0;\n    padding:0;\n    box-sizing: border-box;\n    list-style: none;\n    font-family: 'Josefin Sans', sans-serif;\n}\n\nbody{\n    background: #f3f3f3;\n}\n\n.wrapper{\n    position: absolute;\n    top: 51%;\n    left: 56%;\n    \n    transform: translate(-50%,-50%);\n    width: 1050px;\n    height: 510px;\n    \n    display: flex;\n    box-shadow: 0 1px 20px 0 rgba(69,90,100,0.08);\n}\n\n.wrapper .left{\n        width: 30%;\n        \n        background: #4ECDC4;\n         padding: 30px 25px;\n        border-top-left-radius: 5px;\n        border-bottom-left-radius: 5px;\n        text-align: center;\n        color: #fff;\n}\n\n.leftt{\n  width: 400px;\n  margin-top: 600px;\n  margin-left: 300px;\n  background: rgb(179, 72, 72);\n   padding: 30px 25px;\n  border-radius: 5px;\n \n  text-align: center;\n  color: #fff;\n}\n\n.wrapper .leftt .middle {\n    position: absolute;\n    top:50%;\n    left:88%;\n    transform: translate(-50%,-50%);\n    width: 200px;\n  }\n\nh4{\n  font-size: 18px;\n}\n\n.wrapper .left h4{\n    margin-bottom: 10px;\n    font-size: 25px;\n  }\n\n.wrapper .left p{\n    font-size: 12px;\n  }\n\n.wrapper .right{\n    width: 75%;\n    background: #fff;\n    padding: 30px 25px;\n    border-top-right-radius: 5px;\n    border-bottom-right-radius: 5px;\n  }\n\n.wrapper .right .info,\n.wrapper .right .projects,\n.wrapper.right.exp {\n  margin-bottom: 25px;\n}\n\n.wrapper .right .info h3,\n.wrapper .right .projects h3,\n.wrapper .right .exp h3\n{\n    margin-bottom: 15px;\n    padding-bottom: 5px;\n    border-bottom: 1px solid #e0e0e0;\n    color: #353c4e;\n  text-transform: uppercase;\n  letter-spacing: 5px;\n}\n\n.wrapper .right .info_data,\n.wrapper .right .projects_data,\n.wrapper .right .exp_data{\n  display: flex;\n  justify-content: space-between;\n}\n\n.wrapper .right .info_data .data,\n.wrapper .right .projects_data .data,\n.wrapper .right .exp_data .data {\n  width: 45%;\n}\n\n.wrapper .right .info_data .data h4,\n.wrapper .right .projects_data .data h4,\n.wrapper .right .exp_data .data h4{\n    color: #353c4e;\n    margin-bottom: 5px;\n}\n\n.wrapper .right .info_data .data p,\n.wrapper .right .projects_data .data p,\n.wrapper .right .exp_data .data p{\n  font-size: 17px;\n  margin-bottom: 10px;\n  color: #919aa3;\n}\n\n.wrapper .right .exp_data .data p a {\n    font-size:20px;\n    width: 30px;\n}\n\n.wrapper .right .exp_data .data p a btn btn-info{\n    width: 100px;\n    \n}\n\nimg{\n  margin-top: 24%;\n  margin-right: 600px;\n  padding-bottom: 1px;\n}\n\np{\n  font-size: 17px;\n}\n\nh5{\n  font-size: 18px;\n  text-transform: uppercase;\n}\n\n.container{\n  margin-top: 490px;\n  text-align: center;\n}\n\n.btn{\n  padding: 10px 10px;\n  margin:60px;\n  border-radius: 5px;\n  font-size: 20px;\n  height: 50px;\n}\n\n.btn1{\n  background-color: #1abc9c ;\n}\n\n.btn2{\n  background-color:#95a5a6 ;\n  color: #fff;\n}\n\n.cv{\n  margin-left: 10px;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi1jb21wb25lbnRzL3Byb2ZpbC1jYW5kaWRhdC9wcm9maWwtY2FuZGlkYXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpRkFBaUY7O0FBRWpGO0lBQ0ksUUFBUTtJQUNSLFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUzs7SUFFVCwrQkFBK0I7SUFDL0IsYUFBYTtJQUNiLGFBQWE7O0lBRWIsYUFBYTtJQUNiLDZDQUE2QztBQUNqRDs7QUFJQTtRQUNRLFVBQVU7O1FBRVYsbUJBQW1CO1NBQ2xCLGtCQUFrQjtRQUNuQiwyQkFBMkI7UUFDM0IsOEJBQThCO1FBQzlCLGtCQUFrQjtRQUNsQixXQUFXO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsNEJBQTRCO0dBQzNCLGtCQUFrQjtFQUNuQixrQkFBa0I7O0VBRWxCLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBSUE7SUFDSSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFFBQVE7SUFDUiwrQkFBK0I7SUFDL0IsWUFBWTtFQUNkOztBQUdGO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0VBQ2pCOztBQUVGO0lBQ0ksZUFBZTtFQUNqQjs7QUFFQTtJQUNFLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLDRCQUE0QjtJQUM1QiwrQkFBK0I7RUFDakM7O0FBRUE7OztFQUdBLG1CQUFtQjtBQUNyQjs7QUFFQTs7OztJQUlJLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsZ0NBQWdDO0lBQ2hDLGNBQWM7RUFDaEIseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjs7QUFFQTs7O0VBR0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTs7O0VBR0UsVUFBVTtBQUNaOztBQUVBOzs7SUFHSSxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBOzs7RUFHRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QsV0FBVztBQUNmOztBQUNBO0lBQ0ksWUFBWTs7QUFFaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSwwQkFBMEI7QUFDNUI7O0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi1jb21wb25lbnRzL3Byb2ZpbC1jYW5kaWRhdC9wcm9maWwtY2FuZGlkYXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUpvc2VmaW4rU2FucyZkaXNwbGF5PXN3YXAnKTtcblxuKntcbiAgICBtYXJnaW46MDtcbiAgICBwYWRkaW5nOjA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcbn1cblxuYm9keXtcbiAgICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xufVxuXG4ud3JhcHBlcntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MSU7XG4gICAgbGVmdDogNTYlO1xuICAgIFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gICAgd2lkdGg6IDEwNTBweDtcbiAgICBoZWlnaHQ6IDUxMHB4O1xuICAgIFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm94LXNoYWRvdzogMCAxcHggMjBweCAwIHJnYmEoNjksOTAsMTAwLDAuMDgpO1xufVxuXG5cblxuLndyYXBwZXIgLmxlZnR7XG4gICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgIFxuICAgICAgICBiYWNrZ3JvdW5kOiAjNEVDREM0O1xuICAgICAgICAgcGFkZGluZzogMzBweCAyNXB4O1xuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbn1cblxuLmxlZnR0e1xuICB3aWR0aDogNDAwcHg7XG4gIG1hcmdpbi10b3A6IDYwMHB4O1xuICBtYXJnaW4tbGVmdDogMzAwcHg7XG4gIGJhY2tncm91bmQ6IHJnYigxNzksIDcyLCA3Mik7XG4gICBwYWRkaW5nOiAzMHB4IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiBcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuXG5cbi53cmFwcGVyIC5sZWZ0dCAubWlkZGxlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOjUwJTtcbiAgICBsZWZ0Ojg4JTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICAgIHdpZHRoOiAyMDBweDtcbiAgfVxuICBcblxuaDR7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi53cmFwcGVyIC5sZWZ0IGg0e1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICB9XG5cbi53cmFwcGVyIC5sZWZ0IHB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG5cbiAgLndyYXBwZXIgLnJpZ2h0e1xuICAgIHdpZHRoOiA3NSU7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBwYWRkaW5nOiAzMHB4IDI1cHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xuICB9XG5cbiAgLndyYXBwZXIgLnJpZ2h0IC5pbmZvLFxuLndyYXBwZXIgLnJpZ2h0IC5wcm9qZWN0cyxcbi53cmFwcGVyLnJpZ2h0LmV4cCB7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbi53cmFwcGVyIC5yaWdodCAuaW5mbyBoMyxcbi53cmFwcGVyIC5yaWdodCAucHJvamVjdHMgaDMsXG4ud3JhcHBlciAucmlnaHQgLmV4cCBoM1xue1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UwZTBlMDtcbiAgICBjb2xvcjogIzM1M2M0ZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbn1cblxuLndyYXBwZXIgLnJpZ2h0IC5pbmZvX2RhdGEsXG4ud3JhcHBlciAucmlnaHQgLnByb2plY3RzX2RhdGEsXG4ud3JhcHBlciAucmlnaHQgLmV4cF9kYXRhe1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi53cmFwcGVyIC5yaWdodCAuaW5mb19kYXRhIC5kYXRhLFxuLndyYXBwZXIgLnJpZ2h0IC5wcm9qZWN0c19kYXRhIC5kYXRhLFxuLndyYXBwZXIgLnJpZ2h0IC5leHBfZGF0YSAuZGF0YSB7XG4gIHdpZHRoOiA0NSU7XG59XG5cbi53cmFwcGVyIC5yaWdodCAuaW5mb19kYXRhIC5kYXRhIGg0LFxuLndyYXBwZXIgLnJpZ2h0IC5wcm9qZWN0c19kYXRhIC5kYXRhIGg0LFxuLndyYXBwZXIgLnJpZ2h0IC5leHBfZGF0YSAuZGF0YSBoNHtcbiAgICBjb2xvcjogIzM1M2M0ZTtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi53cmFwcGVyIC5yaWdodCAuaW5mb19kYXRhIC5kYXRhIHAsXG4ud3JhcHBlciAucmlnaHQgLnByb2plY3RzX2RhdGEgLmRhdGEgcCxcbi53cmFwcGVyIC5yaWdodCAuZXhwX2RhdGEgLmRhdGEgcHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBjb2xvcjogIzkxOWFhMztcbn1cbi53cmFwcGVyIC5yaWdodCAuZXhwX2RhdGEgLmRhdGEgcCBhIHtcbiAgICBmb250LXNpemU6MjBweDtcbiAgICB3aWR0aDogMzBweDtcbn1cbi53cmFwcGVyIC5yaWdodCAuZXhwX2RhdGEgLmRhdGEgcCBhIGJ0biBidG4taW5mb3tcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgXG59XG5cbmltZ3tcbiAgbWFyZ2luLXRvcDogMjQlO1xuICBtYXJnaW4tcmlnaHQ6IDYwMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMXB4O1xufVxuXG5we1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbmg1e1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5jb250YWluZXJ7XG4gIG1hcmdpbi10b3A6IDQ5MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idG57XG4gIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgbWFyZ2luOjYwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG4uYnRuMXtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFhYmM5YyA7XG59XG4uYnRuMntcbiAgYmFja2dyb3VuZC1jb2xvcjojOTVhNWE2IDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5jdntcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/components/admin-components/profil-candidat/profil-candidat.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/components/admin-components/profil-candidat/profil-candidat.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ProfilCandidatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilCandidatComponent", function() { return ProfilCandidatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_candidate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/candidate.service */ "./src/app/services/candidate.service.ts");
/* harmony import */ var src_app_modals_candidate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modals/candidate */ "./src/app/modals/candidate.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");






var ProfilCandidatComponent = /** @class */ (function () {
    function ProfilCandidatComponent(route, candidateService, userService) {
        this.route = route;
        this.candidateService = candidateService;
        this.userService = userService;
        this.candidate = new src_app_modals_candidate__WEBPACK_IMPORTED_MODULE_4__["Candidate"]();
    }
    ProfilCandidatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        this.getCandidate();
    };
    ProfilCandidatComponent.prototype.getCandidate = function () {
        var _this = this;
        console.log(this.id);
        this.candidateService.getCandidate(this.id).subscribe(function (response) {
            _this.candidate = response;
        });
    };
    ProfilCandidatComponent.prototype.sendConfirmMsg = function (id) {
        var _this = this;
        this.candidateService.sendConfirmMessage(id).subscribe(function (candidate) {
            _this.userService.toastMessage("Email sent successffully");
        }, function (error) {
            _this.userService.toastMessage("Email sent successffully");
        });
    };
    ;
    ProfilCandidatComponent.prototype.sendDenyMsg = function (id) {
        var _this = this;
        this.candidateService.sendDenyMessage(id)
            .subscribe(function (candidate) {
            _this.userService.toastMessage("Email sent successffully");
        }, function (error) {
            _this.userService.toastMessage("Email sent successffully");
        });
    };
    ;
    ProfilCandidatComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: src_app_services_candidate_service__WEBPACK_IMPORTED_MODULE_3__["CandidateService"] },
        { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
    ]; };
    ProfilCandidatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profil-candidat',
            template: __webpack_require__(/*! raw-loader!./profil-candidat.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/admin-components/profil-candidat/profil-candidat.component.html"),
            styles: [__webpack_require__(/*! ./profil-candidat.component.css */ "./src/app/components/admin-components/profil-candidat/profil-candidat.component.css")]
        })
    ], ProfilCandidatComponent);
    return ProfilCandidatComponent;
}());



/***/ }),

/***/ "./src/app/components/admin-components/profile-employe/profile-employe.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/admin-components/profile-employe/profile-employe.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');\n\n*{\n    margin:0;\n    padding:0;\n    box-sizing: border-box;\n    list-style: none;\n    font-family: 'Josefin Sans', sans-serif;\n}\n\nbody{\n    background: #f3f3f3;\n}\n\n.wrapper{\n    position: absolute;\n    top: 50%;\n    left: 58%;\n    \n    transform: translate(-50%,-50%);\n    width: 1100px;\n    height: 420px;\n    \n    display: flex;\n    box-shadow: 0 1px 20px 0 rgba(69,90,100,0.08);\n}\n\n.wrapper .left{\n        width: 30%;\n        height: 455px;\n        \n        background: rgb(199, 204, 204);\n         padding: 30px 25px;\n        border-top-left-radius: 5px;\n        border-bottom-left-radius: 5px;\n        text-align: center;\n        color: #fff;\n}\n\n.wrapper .left h4{\n    margin-bottom: 10px;\n    font-size: 17px;\n    font-family: 'Montserrat', sans-serif;\n  }\n\n.wrapper .left p{\n    font-size: 16px;\n    font-family: 'Montserrat', sans-serif;\n  }\n\n.wrapper .right .info p{\n    font-size: 16px;\n  }\n\n.wrapper .right{\n    width: 90%;\n    background: #fff;\n    padding: 30px 25px;\n    border-top-right-radius: 5px;\n    border-bottom-right-radius: 5px;\n  }\n\n.wrapper .right .info,\n.wrapper .right .projects,\n.wrapper.right.exp {\n  margin-bottom: 25px;\n  font-family: 'Montserrat', sans-serif;\n}\n\n.wrapper .right .info h3,\n.wrapper .right .projects h3,\n.wrapper .right .exp h3\n{\n    margin-bottom: 15px;\n    padding-bottom: 5px;\n    border-bottom: 1px solid #e0e0e0;\n    color: #353c4e;\n    font-family: 'Montserrat', sans-serif;\n  text-transform: uppercase;\n  letter-spacing: 5px;\n}\n\n.wrapper .right .info_data,\n.wrapper .right .projects_data,\n.wrapper .right .exp_data{\n  display: flex;\n  justify-content: space-between;\n}\n\n.wrapper .right .info_data .data,\n.wrapper .right .projects_data .data,\n.wrapper .right .exp_data .data {\n  width: 45%;\n}\n\n.wrapper .right .info_data .data h4,\n.wrapper .right .projects_data .data h4,\n.wrapper .right .exp_data .data h4{\n    color: #353c4e;\n    margin-bottom: 5px;\n    font-size: 16px;\n    font-family: 'Montserrat', sans-serif;\n}\n\n.wrapper .right .info_data .data p,\n.wrapper .right .projects_data .data p,\n.wrapper .right .exp_data .data p{\n  font-size: 18px;\n  margin-bottom: 10px;\n  color: #919aa3;\n  \n}\n\n.wrapper .right .exp_data .data p a {\n    font-size:20px;\n    \n    width: 30px;\n}\n\n.wrapper .right .btn {\n    width: 300px;\n    height: 30px;\n    font-family: 'Montserrat', sans-serif;\n    font-size:17px;\n    color:white;\n    margin : 2px 200px;\n    background: #4ECDC4;\n    \n}\n\np{\n  font-size: 17px;\n}\n\nh2{\n  font-size: 17px;\n  color:black;\n  font-family: 'Montserrat', sans-serif;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi1jb21wb25lbnRzL3Byb2ZpbGUtZW1wbG95ZS9wcm9maWxlLWVtcGxveWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpRkFBaUY7O0FBRWpGO0lBQ0ksUUFBUTtJQUNSLFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUzs7SUFFVCwrQkFBK0I7SUFDL0IsYUFBYTtJQUNiLGFBQWE7O0lBRWIsYUFBYTtJQUNiLDZDQUE2QztBQUNqRDs7QUFJQTtRQUNRLFVBQVU7UUFDVixhQUFhOztRQUViLDhCQUE4QjtTQUM3QixrQkFBa0I7UUFDbkIsMkJBQTJCO1FBQzNCLDhCQUE4QjtRQUM5QixrQkFBa0I7UUFDbEIsV0FBVztBQUNuQjs7QUFNQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YscUNBQXFDO0VBQ3ZDOztBQUVGO0lBQ0ksZUFBZTtJQUNmLHFDQUFxQztFQUN2Qzs7QUFFQTtJQUNFLGVBQWU7RUFDakI7O0FBRUE7SUFDRSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsK0JBQStCO0VBQ2pDOztBQUVBOzs7RUFHQSxtQkFBbUI7RUFDbkIscUNBQXFDO0FBQ3ZDOztBQUVBOzs7O0lBSUksbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixnQ0FBZ0M7SUFDaEMsY0FBYztJQUNkLHFDQUFxQztFQUN2Qyx5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUVBOzs7RUFHRSxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBOzs7RUFHRSxVQUFVO0FBQ1o7O0FBRUE7OztJQUdJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHFDQUFxQztBQUN6Qzs7QUFFQTs7O0VBR0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixjQUFjOztBQUVoQjs7QUFDQTtJQUNJLGNBQWM7O0lBRWQsV0FBVztBQUNmOztBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixxQ0FBcUM7SUFDckMsY0FBYztJQUNkLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsbUJBQW1COztBQUV2Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLHFDQUFxQztBQUN2QyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4tY29tcG9uZW50cy9wcm9maWxlLWVtcGxveWUvcHJvZmlsZS1lbXBsb3llLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Kb3NlZmluK1NhbnMmZGlzcGxheT1zd2FwJyk7XG5cbip7XG4gICAgbWFyZ2luOjA7XG4gICAgcGFkZGluZzowO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XG59XG5cbmJvZHl7XG4gICAgYmFja2dyb3VuZDogI2YzZjNmMztcbn1cblxuLndyYXBwZXJ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDU4JTtcbiAgICBcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICAgIHdpZHRoOiAxMTAwcHg7XG4gICAgaGVpZ2h0OiA0MjBweDtcbiAgICBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDIwcHggMCByZ2JhKDY5LDkwLDEwMCwwLjA4KTtcbn1cblxuXG5cbi53cmFwcGVyIC5sZWZ0e1xuICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICBoZWlnaHQ6IDQ1NXB4O1xuICAgICAgICBcbiAgICAgICAgYmFja2dyb3VuZDogcmdiKDE5OSwgMjA0LCAyMDQpO1xuICAgICAgICAgcGFkZGluZzogMzBweCAyNXB4O1xuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbn1cblxuXG4gIFxuXG5cbi53cmFwcGVyIC5sZWZ0IGg0e1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIH1cblxuLndyYXBwZXIgLmxlZnQgcHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgfVxuXG4gIC53cmFwcGVyIC5yaWdodCAuaW5mbyBwe1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuXG4gIC53cmFwcGVyIC5yaWdodHtcbiAgICB3aWR0aDogOTAlO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgcGFkZGluZzogMzBweCAyNXB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbiAgfVxuXG4gIC53cmFwcGVyIC5yaWdodCAuaW5mbyxcbi53cmFwcGVyIC5yaWdodCAucHJvamVjdHMsXG4ud3JhcHBlci5yaWdodC5leHAge1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xufVxuXG4ud3JhcHBlciAucmlnaHQgLmluZm8gaDMsXG4ud3JhcHBlciAucmlnaHQgLnByb2plY3RzIGgzLFxuLndyYXBwZXIgLnJpZ2h0IC5leHAgaDNcbntcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMGUwZTA7XG4gICAgY29sb3I6ICMzNTNjNGU7XG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbn1cblxuLndyYXBwZXIgLnJpZ2h0IC5pbmZvX2RhdGEsXG4ud3JhcHBlciAucmlnaHQgLnByb2plY3RzX2RhdGEsXG4ud3JhcHBlciAucmlnaHQgLmV4cF9kYXRhe1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi53cmFwcGVyIC5yaWdodCAuaW5mb19kYXRhIC5kYXRhLFxuLndyYXBwZXIgLnJpZ2h0IC5wcm9qZWN0c19kYXRhIC5kYXRhLFxuLndyYXBwZXIgLnJpZ2h0IC5leHBfZGF0YSAuZGF0YSB7XG4gIHdpZHRoOiA0NSU7XG59XG5cbi53cmFwcGVyIC5yaWdodCAuaW5mb19kYXRhIC5kYXRhIGg0LFxuLndyYXBwZXIgLnJpZ2h0IC5wcm9qZWN0c19kYXRhIC5kYXRhIGg0LFxuLndyYXBwZXIgLnJpZ2h0IC5leHBfZGF0YSAuZGF0YSBoNHtcbiAgICBjb2xvcjogIzM1M2M0ZTtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG59XG5cbi53cmFwcGVyIC5yaWdodCAuaW5mb19kYXRhIC5kYXRhIHAsXG4ud3JhcHBlciAucmlnaHQgLnByb2plY3RzX2RhdGEgLmRhdGEgcCxcbi53cmFwcGVyIC5yaWdodCAuZXhwX2RhdGEgLmRhdGEgcHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBjb2xvcjogIzkxOWFhMztcbiAgXG59XG4ud3JhcHBlciAucmlnaHQgLmV4cF9kYXRhIC5kYXRhIHAgYSB7XG4gICAgZm9udC1zaXplOjIwcHg7XG4gICAgXG4gICAgd2lkdGg6IDMwcHg7XG59XG4ud3JhcHBlciAucmlnaHQgLmJ0biB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZToxN3B4O1xuICAgIGNvbG9yOndoaXRlO1xuICAgIG1hcmdpbiA6IDJweCAyMDBweDtcbiAgICBiYWNrZ3JvdW5kOiAjNEVDREM0O1xuICAgIFxufVxuXG5we1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbmgye1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOmJsYWNrO1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xufVxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/admin-components/profile-employe/profile-employe.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/components/admin-components/profile-employe/profile-employe.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ProfileEmployeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileEmployeComponent", function() { return ProfileEmployeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modals_conge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../modals/conge */ "./src/app/modals/conge.ts");
/* harmony import */ var _modals_employe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../modals/employe */ "./src/app/modals/employe.ts");
/* harmony import */ var _services_employe_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/employe.service */ "./src/app/services/employe.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");







var ProfileEmployeComponent = /** @class */ (function () {
    function ProfileEmployeComponent(employeService, userService, route, router) {
        this.employeService = employeService;
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.conge = new _modals_conge__WEBPACK_IMPORTED_MODULE_2__["Conge"]();
        this.employe = new _modals_employe__WEBPACK_IMPORTED_MODULE_3__["Employe"]();
    }
    ProfileEmployeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        this.getEmploye();
        console.log(this.id + "oooo");
    };
    ProfileEmployeComponent.prototype.getEmploye = function () {
        var _this = this;
        console.log(this.id);
        this.employeService.getEmploye(this.id).subscribe(function (response) {
            _this.employe = response;
        });
    };
    ProfileEmployeComponent.prototype.generateReport = function () {
        var _this = this;
        this.employeService.generateReport(this.id).subscribe(function (employe) {
            _this.userService.toastMessage("Informations are successfully exported");
        }, function (error) {
            _this.userService.toastMessage("Informations are successfully exported");
        });
    };
    ProfileEmployeComponent.prototype.updatePhoto = function (employe) {
        this.employeService.setter(employe);
        this.router.navigate(['/updatePhoto']);
    };
    ProfileEmployeComponent.ctorParameters = function () { return [
        { type: _services_employe_service__WEBPACK_IMPORTED_MODULE_4__["EmployeService"] },
        { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    ProfileEmployeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile-employe',
            template: __webpack_require__(/*! raw-loader!./profile-employe.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/admin-components/profile-employe/profile-employe.component.html"),
            styles: [__webpack_require__(/*! ./profile-employe.component.css */ "./src/app/components/admin-components/profile-employe/profile-employe.component.css")]
        })
    ], ProfileEmployeComponent);
    return ProfileEmployeComponent;
}());



/***/ }),

/***/ "./src/app/components/admin-components/recruitment/candidate.service.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/admin-components/recruitment/candidate.service.ts ***!
  \******************************************************************************/
/*! exports provided: CandidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidateService", function() { return CandidateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var CandidateService = /** @class */ (function () {
    function CandidateService(http, httpHandler, router) {
        this.http = http;
        this.httpHandler = httpHandler;
        this.router = router;
    }
    CandidateService.prototype.getCanId = function () {
        return this.can_id;
    };
    CandidateService.prototype.setCanId = function (id) {
        this.can_id = id;
    };
    CandidateService.prototype.getStatus = function () {
        return this.status;
    };
    CandidateService.prototype.setStatus = function (status) {
        this.status = status;
    };
    CandidateService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHandler"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    CandidateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], CandidateService);
    return CandidateService;
}());



/***/ }),

/***/ "./src/app/components/admin-components/recruitment/recruitment.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/components/admin-components/recruitment/recruitment.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4tY29tcG9uZW50cy9yZWNydWl0bWVudC9yZWNydWl0bWVudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/admin-components/recruitment/recruitment.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/admin-components/recruitment/recruitment.component.ts ***!
  \**********************************************************************************/
/*! exports provided: RecruitmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecruitmentComponent", function() { return RecruitmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/token-storage.service */ "./src/app/services/token-storage.service.ts");
/* harmony import */ var _candidate_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./candidate.service */ "./src/app/components/admin-components/recruitment/candidate.service.ts");









var RecruitmentComponent = /** @class */ (function () {
    function RecruitmentComponent(TokenStorageService, http, route, dialog, candidateService, UserService, AuthService) {
        this.TokenStorageService = TokenStorageService;
        this.http = http;
        this.route = route;
        this.dialog = dialog;
        this.candidateService = candidateService;
        this.UserService = UserService;
        this.AuthService = AuthService;
        this.Status = [
            { value: 'yes', viewValue: 'Yes' },
            { value: 'no', viewValue: 'No' },
        ];
        this.enteredStatus = "";
        this.enteredName = "";
        this.enteredlocation = "";
        this.panelOpenState = false;
    }
    RecruitmentComponent.prototype.ngOnInit = function () {
        var user = this.TokenStorageService.getUser();
        this.userId = user.id;
        this.name = user.username;
        // console.log("hr_id is: " + this.hrId)
        this.searchPostedJobs();
    };
    RecruitmentComponent.prototype.searchPostedJobs = function () {
        var _this = this;
        var req = {
            name: this.name,
        };
        this.http
            .post("/hr/posted_jobR", req)
            .subscribe(function (postData) {
            _this.searchResault = postData;
            // console.log(this.searchResault[0]);
            // console.log(this.searchResault.length);
        });
    };
    RecruitmentComponent.prototype.viewCanAppForm = function (j, jobInfo) {
        // console.log("job num is: ", jobInfo);
        var _this = this;
        var req = {
            candidate_num: j.candidate_id
        };
        this.http
            .post("/jobappform/application_check", req)
            .subscribe(function (postData) {
            _this.applicationResult = postData;
            // console.log("post data: ", postData);
            // console.log(this.searchResault.length);
            var passData = {
                candidate_num: postData[0].candidate_num,
                job_num: jobInfo.job_id,
                firstName: postData[0].firstName,
                lastName: postData[0].lastName,
                telephone: postData[0].telephone,
                email: postData[0].email,
                address: postData[0].address,
                address2: postData[0].address2,
                city: postData[0].city,
                state: postData[0].state,
                zipcode: postData[0].zipcode,
                job: postData[0].job,
                company: postData[0].company,
                location: postData[0].location,
                fromDate: postData[0].fromDate,
                toDate: postData[0].toDate,
                role: postData[0].role,
                schoolname: postData[0].schoolname,
                educationlevel: postData[0].educationlevel,
                startdate: postData[0].startdate,
                enddate: postData[0].enddate,
                major: postData[0].major,
                cumulativegpa: postData[0].cumulativegpa,
                skills: postData[0].skills,
                accomplishments: postData[0].accomplishments,
                sponsership: postData[0].sponsership,
                acknowledgment: postData[0].acknowledgment,
                gender: postData[0].gender,
                hispanic: postData[0].hispanic,
                veteran: postData[0].veteran,
                disability: postData[0].disability
            };
        });
    };
    RecruitmentComponent.prototype.emailSupport = function () {
        location.href = "mailto:email?subject='job opportunity'";
    };
    RecruitmentComponent.ctorParameters = function () { return [
        { type: src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_7__["TokenStorageService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
        { type: _candidate_service__WEBPACK_IMPORTED_MODULE_8__["CandidateService"] },
        { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
    ]; };
    RecruitmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recruitment',
            template: __webpack_require__(/*! raw-loader!./recruitment.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/admin-components/recruitment/recruitment.component.html"),
            styles: [__webpack_require__(/*! ./recruitment.component.css */ "./src/app/components/admin-components/recruitment/recruitment.component.css")]
        })
    ], RecruitmentComponent);
    return RecruitmentComponent;
}());



/***/ }),

/***/ "./src/app/components/admin-components/recrutements/recrutements.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/components/admin-components/recrutements/recrutements.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4tY29tcG9uZW50cy9yZWNydXRlbWVudHMvcmVjcnV0ZW1lbnRzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/admin-components/recrutements/recrutements.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/admin-components/recrutements/recrutements.component.ts ***!
  \************************************************************************************/
/*! exports provided: RecrutementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecrutementsComponent", function() { return RecrutementsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/token-storage.service */ "./src/app/services/token-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var src_app_components_admin_components_view_applicants_view_popup_view_popup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/admin-components/view-applicants/view-popup/view-popup.component */ "./src/app/components/admin-components/view-applicants/view-popup/view-popup.component.ts");








var RecrutementsComponent = /** @class */ (function () {
    function RecrutementsComponent(http, route, TokenStorageService, UserService, dialog) {
        this.http = http;
        this.route = route;
        this.TokenStorageService = TokenStorageService;
        this.UserService = UserService;
        this.dialog = dialog;
        this.panelOpenState = false;
    }
    RecrutementsComponent.prototype.ngOnInit = function () {
        var user = this.TokenStorageService.getUser();
        this.userId = user.id;
        this.name = user.username;
        // console.log("hr_id is: " + this.hrId)
        this.searchPostedJobs();
    };
    RecrutementsComponent.prototype.searchPostedJobs = function () {
        var _this = this;
        var req = {
            name: this.name,
        };
        this.http
            .post("/hr/posted_jobR", req)
            .subscribe(function (postData) {
            _this.searchResault = postData;
            // console.log(this.searchResault[0]);
            // console.log(this.searchResault.length);
        });
    };
    RecrutementsComponent.prototype.viewCanAppForm = function (j, jobInfo) {
        // console.log("job num is: ", jobInfo);
        var _this = this;
        var req = {
            candidate_num: j.candidate_id
        };
        this.http
            .post("/jobappform/application_check", req)
            .subscribe(function (postData) {
            _this.applicationResult = postData;
            // console.log("post data: ", postData);
            // console.log(this.searchResault.length);
            var passData = {
                candidate_num: postData[0].candidate_num,
                job_num: jobInfo.job_id,
                firstName: postData[0].firstName,
                lastName: postData[0].lastName,
                telephone: postData[0].telephone,
                email: postData[0].email,
                address: postData[0].address,
                address2: postData[0].address2,
                city: postData[0].city,
                state: postData[0].state,
                zipcode: postData[0].zipcode,
                job: postData[0].job,
                company: postData[0].company,
                location: postData[0].location,
                fromDate: postData[0].fromDate,
                toDate: postData[0].toDate,
                role: postData[0].role,
                schoolname: postData[0].schoolname,
                educationlevel: postData[0].educationlevel,
                startdate: postData[0].startdate,
                enddate: postData[0].enddate,
                major: postData[0].major,
                cumulativegpa: postData[0].cumulativegpa,
                skills: postData[0].skills,
                accomplishments: postData[0].accomplishments,
                sponsership: postData[0].sponsership,
                acknowledgment: postData[0].acknowledgment,
                gender: postData[0].gender,
                hispanic: postData[0].hispanic,
                veteran: postData[0].veteran,
                disability: postData[0].disability
            };
            _this.openDialog(passData);
        });
    };
    RecrutementsComponent.prototype.openDialog = function (j) {
        var dialogRef = this.dialog.open(src_app_components_admin_components_view_applicants_view_popup_view_popup_component__WEBPACK_IMPORTED_MODULE_7__["ViewPopupComponent"], {
            width: '800px',
            height: '600px',
            data: {
                candidate_num: j.candidate_num,
                job_num: j.job_num,
                firstName: j.firstName,
                lastName: j.lastName,
                telephone: j.telephone,
                email: j.email,
                address: j.address,
                address2: j.address2,
                city: j.city,
                state: j.state,
                zipcode: j.zipcode,
                job: j.job,
                company: j.company,
                location: j.location,
                fromDate: j.fromDate,
                toDate: j.toDate,
                role: j.role,
                schoolname: j.schoolname,
                educationlevel: j.educationlevel,
                startdate: j.startdate,
                enddate: j.enddate,
                major: j.major,
                cumulativegpa: j.cumulativegpa,
                skills: j.skills,
                accomplishments: j.accomplishments,
                sponsership: j.sponsership,
                acknowledgment: j.acknowledgment,
                gender: j.gender,
                hispanic: j.hispanic,
                veteran: j.veteran,
                disability: j.disability
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
            }
        });
    };
    RecrutementsComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_4__["TokenStorageService"] },
        { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }
    ]; };
    RecrutementsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recrutements',
            template: __webpack_require__(/*! raw-loader!./recrutements.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/admin-components/recrutements/recrutements.component.html"),
            styles: [__webpack_require__(/*! ./recrutements.component.css */ "./src/app/components/admin-components/recrutements/recrutements.component.css")]
        })
    ], RecrutementsComponent);
    return RecrutementsComponent;
}());



/***/ }),

/***/ "./src/app/components/admin-components/update-employe/update-employe.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/admin-components/update-employe/update-employe.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');\n#ui{\n    background-color: #3f4246;\n    padding: 30px;\n    margin-top: 50px;\n    box-shadow: 0 2px 10px rgba(64,64,64,.7);\n    border-radius: 12px 12px 12px 12px;\n}\n#ui label{\n    color : #fff;\n    font-family: 'Jost', sans-serif;\n    font-size: 16px;\n}\nh3 {\n    margin-bottom: 10px;\n    color : #fff;\n    font-family: 'Jost', sans-serif;\n    font-weight: 500;\n    line-height: 1.1;\n    font-size: 24px;\n}\n.btn{\n    background-color: #4ECDC4;\n   \n    margin-left: 28%;\n    top:80%;\n    width: 300px;\n    height: 30px;\n    border-radius: 5px 5px;\n    color:white;\n    font-family: 'Montserrat', sans-serif;\n    font-size: 15px;\n}\ninput{\n    color : black;\n    font-family: 'Jost', sans-serif;\n    font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi1jb21wb25lbnRzL3VwZGF0ZS1lbXBsb3llL3VwZGF0ZS1lbXBsb3llLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHlFQUF5RTtBQUN6RTtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLHdDQUF3QztJQUN4QyxrQ0FBa0M7QUFDdEM7QUFFQTtJQUNJLFlBQVk7SUFDWiwrQkFBK0I7SUFDL0IsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWiwrQkFBK0I7SUFDL0IsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBRUE7SUFDSSx5QkFBeUI7O0lBRXpCLGdCQUFnQjtJQUNoQixPQUFPO0lBQ1AsWUFBWTtJQUNaLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLHFDQUFxQztJQUNyQyxlQUFlO0FBQ25CO0FBRUE7SUFDSSxhQUFhO0lBQ2IsK0JBQStCO0lBQy9CLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkbWluLWNvbXBvbmVudHMvdXBkYXRlLWVtcGxveWUvdXBkYXRlLWVtcGxveWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Sm9zdCZkaXNwbGF5PXN3YXAnKTtcbiN1aXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y0MjQ2O1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoNjQsNjQsNjQsLjcpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHggMTJweCAxMnB4IDEycHg7XG59XG5cbiN1aSBsYWJlbHtcbiAgICBjb2xvciA6ICNmZmY7XG4gICAgZm9udC1mYW1pbHk6ICdKb3N0Jywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG5cbmgzIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGNvbG9yIDogI2ZmZjtcbiAgICBmb250LWZhbWlseTogJ0pvc3QnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuMTtcbiAgICBmb250LXNpemU6IDI0cHg7XG59XG5cbi5idG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRFQ0RDNDtcbiAgIFxuICAgIG1hcmdpbi1sZWZ0OiAyOCU7XG4gICAgdG9wOjgwJTtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHg7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG5cbmlucHV0e1xuICAgIGNvbG9yIDogYmxhY2s7XG4gICAgZm9udC1mYW1pbHk6ICdKb3N0Jywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE2cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/admin-components/update-employe/update-employe.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/admin-components/update-employe/update-employe.component.ts ***!
  \****************************************************************************************/
/*! exports provided: UpdateEmployeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateEmployeComponent", function() { return UpdateEmployeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_employe_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/employe.service */ "./src/app/services/employe.service.ts");




var UpdateEmployeComponent = /** @class */ (function () {
    function UpdateEmployeComponent(route, router, employeService) {
        this.route = route;
        this.router = router;
        this.employeService = employeService;
    }
    UpdateEmployeComponent.prototype.ngOnInit = function () {
        this.employe = this.employeService.getter();
    };
    UpdateEmployeComponent.prototype.processForm = function () {
        var _this = this;
        this.employeService.editUser(this.employe).subscribe(function (employe) {
            console.log(employe);
            _this.router.navigate(['/listEmployes']);
        }, function (error) {
            console.log(error);
        });
    };
    UpdateEmployeComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_employe_service__WEBPACK_IMPORTED_MODULE_3__["EmployeService"] }
    ]; };
    UpdateEmployeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update-employe',
            template: __webpack_require__(/*! raw-loader!./update-employe.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/admin-components/update-employe/update-employe.component.html"),
            styles: [__webpack_require__(/*! ./update-employe.component.css */ "./src/app/components/admin-components/update-employe/update-employe.component.css")]
        })
    ], UpdateEmployeComponent);
    return UpdateEmployeComponent;
}());



/***/ }),

/***/ "./src/app/components/admin-components/update-photo/update-photo.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/components/admin-components/update-photo/update-photo.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');\n#ui{\n    background-color: #3f4246;\n    padding: 30px;\n    margin-top: 50px;\n    box-shadow: 0 2px 10px rgba(64,64,64,.7);\n    border-radius: 12px 12px 12px 12px;\n}\n#ui label{\n    color : #fff;\n    font-family: 'Jost', sans-serif;\n    font-size: 16px;\n}\nh3 {\n    margin-bottom: 10px;\n    color : #fff;\n    font-family: 'Jost', sans-serif;\n    font-weight: 500;\n    line-height: 1.1;\n    font-size: 24px;\n}\n.btn{\n    background-color: #4ECDC4;\n   \n    margin-left: 28%;\n    top:80%;\n    width: 300px;\n    height: 30px;\n    border-radius: 5px 5px;\n    color:white;\n    font-family: 'Montserrat', sans-serif;\n    font-size: 15px;\n}\ninput{\n    color : black;\n    font-family: 'Jost', sans-serif;\n    font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi1jb21wb25lbnRzL3VwZGF0ZS1waG90by91cGRhdGUtcGhvdG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EseUVBQXlFO0FBQ3pFO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsd0NBQXdDO0lBQ3hDLGtDQUFrQztBQUN0QztBQUVBO0lBQ0ksWUFBWTtJQUNaLCtCQUErQjtJQUMvQixlQUFlO0FBQ25CO0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLCtCQUErQjtJQUMvQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7QUFFQTtJQUNJLHlCQUF5Qjs7SUFFekIsZ0JBQWdCO0lBQ2hCLE9BQU87SUFDUCxZQUFZO0lBQ1osWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gscUNBQXFDO0lBQ3JDLGVBQWU7QUFDbkI7QUFFQTtJQUNJLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0IsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4tY29tcG9uZW50cy91cGRhdGUtcGhvdG8vdXBkYXRlLXBob3RvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUpvc3QmZGlzcGxheT1zd2FwJyk7XG4jdWl7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNmNDI0NjtcbiAgICBwYWRkaW5nOiAzMHB4O1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDY0LDY0LDY0LC43KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4IDEycHggMTJweCAxMnB4O1xufVxuXG4jdWkgbGFiZWx7XG4gICAgY29sb3IgOiAjZmZmO1xuICAgIGZvbnQtZmFtaWx5OiAnSm9zdCcsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuXG5oMyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBjb2xvciA6ICNmZmY7XG4gICAgZm9udC1mYW1pbHk6ICdKb3N0Jywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjE7XG4gICAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4uYnRue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0RUNEQzQ7XG4gICBcbiAgICBtYXJnaW4tbGVmdDogMjglO1xuICAgIHRvcDo4MCU7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4O1xuICAgIGNvbG9yOndoaXRlO1xuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuXG5pbnB1dHtcbiAgICBjb2xvciA6IGJsYWNrO1xuICAgIGZvbnQtZmFtaWx5OiAnSm9zdCcsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/admin-components/update-photo/update-photo.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/admin-components/update-photo/update-photo.component.ts ***!
  \************************************************************************************/
/*! exports provided: UpdatePhotoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePhotoComponent", function() { return UpdatePhotoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_employe_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/employe.service */ "./src/app/services/employe.service.ts");
/* harmony import */ var src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/token-storage.service */ "./src/app/services/token-storage.service.ts");





var UpdatePhotoComponent = /** @class */ (function () {
    function UpdatePhotoComponent(route, router, tokenStorageService, employeService) {
        this.route = route;
        this.router = router;
        this.tokenStorageService = tokenStorageService;
        this.employeService = employeService;
    }
    UpdatePhotoComponent.prototype.ngOnInit = function () {
        this.employe = this.employeService.getter();
        var user = this.tokenStorageService.getUser();
        this.id = user.id;
    };
    UpdatePhotoComponent.prototype.onSelectFile = function (event) {
        if (event.target.files.length > 0) {
            var file = event.target.files[0];
            this.fileImage = file;
            // this.f['profile'].setValue(file);
            var mimeType = event.target.files[0].type;
            if (mimeType.match(/image\/*/) == null) {
                this.message = "Only images are supported.";
                return;
            }
        }
    };
    UpdatePhotoComponent.prototype.processForm = function () {
        this.employeService.updateEmployee(this.employe, this.fileImage).subscribe(function (employe) {
            console.log(employe);
        }, function (error) {
            console.log(error);
        });
        this.router.navigate(['/profilEmploye', this.employe.idUser]);
    };
    UpdatePhotoComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_4__["TokenStorageService"] },
        { type: src_app_services_employe_service__WEBPACK_IMPORTED_MODULE_3__["EmployeService"] }
    ]; };
    UpdatePhotoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update-photo',
            template: __webpack_require__(/*! raw-loader!./update-photo.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/admin-components/update-photo/update-photo.component.html"),
            styles: [__webpack_require__(/*! ./update-photo.component.css */ "./src/app/components/admin-components/update-photo/update-photo.component.css")]
        })
    ], UpdatePhotoComponent);
    return UpdatePhotoComponent;
}());



/***/ }),

/***/ "./src/app/components/admin-components/view-applicants/view-applicants.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/admin-components/view-applicants/view-applicants.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.mat-form-field + .mat-form-field {\n  margin-left: 8px auto;\n}\n\nbody{\n  width: 800px;\n  margin: 2em auto;\n  text-align: center;\n}\n\nh1 {\n  margin-top: 20px;\n  margin-bottom: 10px;}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi1jb21wb25lbnRzL3ZpZXctYXBwbGljYW50cy92aWV3LWFwcGxpY2FudHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUIsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4tY29tcG9uZW50cy92aWV3LWFwcGxpY2FudHMvdmlldy1hcHBsaWNhbnRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5tYXQtZm9ybS1maWVsZCArIC5tYXQtZm9ybS1maWVsZCB7XG4gIG1hcmdpbi1sZWZ0OiA4cHggYXV0bztcbn1cblxuYm9keXtcbiAgd2lkdGg6IDgwMHB4O1xuICBtYXJnaW46IDJlbSBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5oMSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7fVxuIl19 */"

/***/ }),

/***/ "./src/app/components/admin-components/view-applicants/view-applicants.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/components/admin-components/view-applicants/view-applicants.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ViewApplicantsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewApplicantsComponent", function() { return ViewApplicantsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/token-storage.service */ "./src/app/services/token-storage.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _view_popup_view_popup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-popup/view-popup.component */ "./src/app/components/admin-components/view-applicants/view-popup/view-popup.component.ts");







var ViewApplicantsComponent = /** @class */ (function () {
    function ViewApplicantsComponent(http, AuthService, TokenStorageService, dialog) {
        this.http = http;
        this.AuthService = AuthService;
        this.TokenStorageService = TokenStorageService;
        this.dialog = dialog;
        this.panelOpenState = false;
    }
    ViewApplicantsComponent.prototype.ngOnInit = function () {
        var user = this.TokenStorageService.getUser();
        this.hrId = user.id;
        // console.log("hr_id is: " + this.hrId)
        this.searchPostedJobs();
    };
    ViewApplicantsComponent.prototype.searchPostedJobs = function () {
        var _this = this;
        var req = {
            hr_id: this.hrId,
        };
        this.http
            .post("/hr/posted_job", req)
            .subscribe(function (postData) {
            _this.searchResault = postData;
            // console.log(this.searchResault[0]);
            // console.log(this.searchResault.length);
        });
    };
    ViewApplicantsComponent.prototype.viewCanAppForm = function (j, jobInfo) {
        // console.log("job num is: ", jobInfo);
        var _this = this;
        var req = {
            candidate_num: j.candidate_id
        };
        this.http
            .post("/jobappform/application_check", req)
            .subscribe(function (postData) {
            _this.applicationResult = postData;
            // console.log("post data: ", postData);
            // console.log(this.searchResault.length);
            var passData = {
                candidate_num: postData[0].candidate_num,
                job_num: jobInfo.job_id,
                firstName: postData[0].firstName,
                lastName: postData[0].lastName,
                telephone: postData[0].telephone,
                email: postData[0].email,
                address: postData[0].address,
                address2: postData[0].address2,
                city: postData[0].city,
                state: postData[0].state,
                zipcode: postData[0].zipcode,
                job: postData[0].job,
                company: postData[0].company,
                location: postData[0].location,
                fromDate: postData[0].fromDate,
                toDate: postData[0].toDate,
                role: postData[0].role,
                schoolname: postData[0].schoolname,
                educationlevel: postData[0].educationlevel,
                startdate: postData[0].startdate,
                enddate: postData[0].enddate,
                major: postData[0].major,
                cumulativegpa: postData[0].cumulativegpa,
                skills: postData[0].skills,
                accomplishments: postData[0].accomplishments,
                sponsership: postData[0].sponsership,
                acknowledgment: postData[0].acknowledgment,
                gender: postData[0].gender,
                hispanic: postData[0].hispanic,
                veteran: postData[0].veteran,
                disability: postData[0].disability
            };
            _this.openDialog(passData);
        });
    };
    ViewApplicantsComponent.prototype.openDialog = function (j) {
        var dialogRef = this.dialog.open(_view_popup_view_popup_component__WEBPACK_IMPORTED_MODULE_6__["ViewPopupComponent"], {
            width: '800px',
            height: '600px',
            data: {
                candidate_num: j.candidate_num,
                job_num: j.job_num,
                firstName: j.firstName,
                lastName: j.lastName,
                telephone: j.telephone,
                email: j.email,
                address: j.address,
                address2: j.address2,
                city: j.city,
                state: j.state,
                zipcode: j.zipcode,
                job: j.job,
                company: j.company,
                location: j.location,
                fromDate: j.fromDate,
                toDate: j.toDate,
                role: j.role,
                schoolname: j.schoolname,
                educationlevel: j.educationlevel,
                startdate: j.startdate,
                enddate: j.enddate,
                major: j.major,
                cumulativegpa: j.cumulativegpa,
                skills: j.skills,
                accomplishments: j.accomplishments,
                sponsership: j.sponsership,
                acknowledgment: j.acknowledgment,
                gender: j.gender,
                hispanic: j.hispanic,
                veteran: j.veteran,
                disability: j.disability
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
            }
        });
    };
    ViewApplicantsComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_4__["TokenStorageService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }
    ]; };
    ViewApplicantsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-applicants',
            template: __webpack_require__(/*! raw-loader!./view-applicants.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/admin-components/view-applicants/view-applicants.component.html"),
            styles: [__webpack_require__(/*! ./view-applicants.component.css */ "./src/app/components/admin-components/view-applicants/view-applicants.component.css")]
        })
    ], ViewApplicantsComponent);
    return ViewApplicantsComponent;
}());



/***/ }),

/***/ "./src/app/components/admin-components/view-applicants/view-popup/view-popup.component.css":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/admin-components/view-applicants/view-popup/view-popup.component.css ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4tY29tcG9uZW50cy92aWV3LWFwcGxpY2FudHMvdmlldy1wb3B1cC92aWV3LXBvcHVwLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/admin-components/view-applicants/view-popup/view-popup.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/components/admin-components/view-applicants/view-popup/view-popup.component.ts ***!
  \************************************************************************************************/
/*! exports provided: ViewPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPopupComponent", function() { return ViewPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var ViewPopupComponent = /** @class */ (function () {
    function ViewPopupComponent(http, dialogRef, data) {
        this.http = http;
        this.dialogRef = dialogRef;
        this.data = data;
        this.choices = [
            'Yes',
            'No'
        ];
    }
    ViewPopupComponent.prototype.ngOnInit = function () {
        // this.searchApplication(this.data.candidate_num);
    };
    ViewPopupComponent.prototype.onNoClick = function () {
        //update status
        var req = {
            job_num: this.data.job_num,
            candidate_id: this.data.candidate_num,
            status: this.selectedChoice
        };
        console.log("status choice: ", req);
        this.http
            .post("/jobappform/set_status", req)
            .subscribe(function (postData) {
            // console.log("after set up " , postData);
        });
        this.dialogRef.close();
    };
    ViewPopupComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
    ]; };
    ViewPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-popup',
            template: __webpack_require__(/*! raw-loader!./view-popup.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/admin-components/view-applicants/view-popup/view-popup.component.html"),
            styles: [__webpack_require__(/*! ./view-popup.component.css */ "./src/app/components/admin-components/view-applicants/view-popup/view-popup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
    ], ViewPopupComponent);
    return ViewPopupComponent;
}());



/***/ }),

/***/ "./src/app/components/admin-components/view-posting/edit-popup/edit-popup.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/admin-components/view-posting/edit-popup/edit-popup.component.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4tY29tcG9uZW50cy92aWV3LXBvc3RpbmcvZWRpdC1wb3B1cC9lZGl0LXBvcHVwLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/admin-components/view-posting/edit-popup/edit-popup.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/admin-components/view-posting/edit-popup/edit-popup.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: EditPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPopupComponent", function() { return EditPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/token-storage.service */ "./src/app/services/token-storage.service.ts");




var EditPopupComponent = /** @class */ (function () {
    function EditPopupComponent(dialogRef, TokenStorageService, data) {
        this.dialogRef = dialogRef;
        this.TokenStorageService = TokenStorageService;
        this.data = data;
    }
    EditPopupComponent.prototype.ngOnInit = function () {
        console.log(this.data.changed);
    };
    EditPopupComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    EditPopupComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
    ]; };
    EditPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-popup',
            template: __webpack_require__(/*! raw-loader!./edit-popup.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/admin-components/view-posting/edit-popup/edit-popup.component.html"),
            styles: [__webpack_require__(/*! ./edit-popup.component.css */ "./src/app/components/admin-components/view-posting/edit-popup/edit-popup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
    ], EditPopupComponent);
    return EditPopupComponent;
}());



/***/ }),

/***/ "./src/app/components/admin-components/view-posting/view-posting.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/components/admin-components/view-posting/view-posting.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.mat-form-field + .mat-form-field {\n  margin-left: 8px auto;\n}\n\nbody{\n  width: 800px;\n  margin: 2em auto;\n  text-align: center;\n}\n\nh1 {\n  margin-top: 20px;\n  margin-bottom: 10px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi1jb21wb25lbnRzL3ZpZXctcG9zdGluZy92aWV3LXBvc3RpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUIsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4tY29tcG9uZW50cy92aWV3LXBvc3Rpbmcvdmlldy1wb3N0aW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5tYXQtZm9ybS1maWVsZCArIC5tYXQtZm9ybS1maWVsZCB7XG4gIG1hcmdpbi1sZWZ0OiA4cHggYXV0bztcbn1cblxuYm9keXtcbiAgd2lkdGg6IDgwMHB4O1xuICBtYXJnaW46IDJlbSBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5oMSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7fSJdfQ== */"

/***/ }),

/***/ "./src/app/components/admin-components/view-posting/view-posting.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/admin-components/view-posting/view-posting.component.ts ***!
  \************************************************************************************/
/*! exports provided: ViewPostingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPostingComponent", function() { return ViewPostingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _edit_popup_edit_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-popup/edit-popup.component */ "./src/app/components/admin-components/view-posting/edit-popup/edit-popup.component.ts");
/* harmony import */ var src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/token-storage.service */ "./src/app/services/token-storage.service.ts");







var ViewPostingComponent = /** @class */ (function () {
    function ViewPostingComponent(http, AuthService, TokenStorageService, dialog) {
        this.http = http;
        this.AuthService = AuthService;
        this.TokenStorageService = TokenStorageService;
        this.dialog = dialog;
        this.panelOpenState = false;
        this.status = 'Enable';
        this.toggle = true;
    }
    ViewPostingComponent.prototype.ngOnInit = function () {
        var user = this.TokenStorageService.getUser();
        this.hrId = user.id;
        console.log("hr_id is: " + this.hrId);
        this.searchPostedJobs();
    };
    ViewPostingComponent.prototype.searchPostedJobs = function () {
        var _this = this;
        var req = {
            hr_id: this.hrId,
        };
        this.http
            .post("/hr/posted_job", req)
            .subscribe(function (postData) {
            _this.searchResault = postData;
            _this.count = _this.searchResault.length;
            // console.log(this.searchResault[0]);
            console.log("total posted jobs: ", _this.searchResault.length);
        });
    };
    ViewPostingComponent.prototype.delete = function (job) {
        var req = {
            job_id: job.job_id,
        };
        // console.log(req);
        this.http
            .post("/hr/delete_job", req)
            .subscribe(function (response) {
            console.log("job delete successed: ", response);
        });
    };
    ViewPostingComponent.prototype.openDialog = function (j) {
        var _this = this;
        this.changed = true;
        var dialogRef = this.dialog.open(_edit_popup_edit_popup_component__WEBPACK_IMPORTED_MODULE_5__["EditPopupComponent"], {
            width: '800px',
            height: '600px',
            data: { job_id: j.job_id, title: j.title, company: j.company, jobType: j.jobType, location: j.location, industryType: j.industryType, jobDescription: j.jobDescription, changed: this.changed }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                // console.log('The dialog was closed: ', result);
                _this.job_id = result.job_id;
                _this.title = result.title;
                _this.jobType = result.jobType;
                _this.location = result.location;
                _this.industryType = result.industryType;
                _this.company = result.company;
                _this.jobDescription = result.jobDescription;
                _this.updateJob();
            }
        });
    };
    ViewPostingComponent.prototype.update = function (j) {
        this.openDialog(j);
    };
    ViewPostingComponent.prototype.updateJob = function () {
        var req = {
            hr_id: this.hrId,
            job_id: this.job_id,
            title: this.title,
            jobType: this.jobType,
            company: this.company,
            location: this.location,
            industryType: this.industryType,
            startDate: this.startDate,
            expirationDate: this.expirationDate,
            jobDescription: this.jobDescription,
            candidate: this.searchResault.candidate,
        };
        this.http
            .post("/hr/update_job", req)
            .subscribe(function (response) {
            console.log("job update successed: ", response);
        });
    };
    ViewPostingComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_6__["TokenStorageService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
    ]; };
    ViewPostingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-posting',
            template: __webpack_require__(/*! raw-loader!./view-posting.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/admin-components/view-posting/view-posting.component.html"),
            styles: [__webpack_require__(/*! ./view-posting.component.css */ "./src/app/components/admin-components/view-posting/view-posting.component.css")]
        })
    ], ViewPostingComponent);
    return ViewPostingComponent;
}());



/***/ }),

/***/ "./src/app/components/candidate-components/info-candidate/info-candidate.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/candidate-components/info-candidate/info-candidate.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".showback{\n    background-color:#4ECDC4 ;\n    box-shadow: 0 2px 10px rgba(64,64,64,.7);\n    border-radius: 12px 12px 12px 12px;\n}\n\n.btn-save{\n    \n    width: 130px;\n    height: 30px;\n    margin-top: -7px;\n    margin-bottom : 3px;\n    font-size: 16px;\n    background-color: #0069d9;\n    color:white;\n    box-shadow: 0 2px 10px rgba(64,64,64,.7);\n    border-radius: 3px ;\n    font-family: 'Montserrat',Sans-serif;\n    right:80%;\n}\n\nlabel {\n   \n    font-family: 'Montserrat',Sans-serif;\n    font-size: 13px;\n    padding-top: 5px;\n    top:60%;\n    color: white;\n    \n}\n\ntextarea {\n   \n    font-family: 'Montserrat',Sans-serif;\n    font-size: 13px;\n    padding-top: 5px;\n    top:60%;\n    color: white;\n    \n}\n\nh4 {\n    margin-top: 6px;\n    margin-bottom: 5px;\n    font-family: 'Montserrat', sans-serif;\n    font-weight: 500;\n    line-height: 1.1;\n    color: inherit;\n    font-size: 18px;\n}\n\ninput{\n    color : black;\n    font-family: 'Jost', sans-serif;\n    font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYW5kaWRhdGUtY29tcG9uZW50cy9pbmZvLWNhbmRpZGF0ZS9pbmZvLWNhbmRpZGF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLHdDQUF3QztJQUN4QyxrQ0FBa0M7QUFDdEM7O0FBRUE7O0lBRUksWUFBWTtJQUNaLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsV0FBVztJQUNYLHdDQUF3QztJQUN4QyxtQkFBbUI7SUFDbkIsb0NBQW9DO0lBQ3BDLFNBQVM7QUFDYjs7QUFFQTs7SUFFSSxvQ0FBb0M7SUFDcEMsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixPQUFPO0lBQ1AsWUFBWTs7QUFFaEI7O0FBRUE7O0lBRUksb0NBQW9DO0lBQ3BDLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsT0FBTztJQUNQLFlBQVk7O0FBRWhCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixxQ0FBcUM7SUFDckMsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0IsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FuZGlkYXRlLWNvbXBvbmVudHMvaW5mby1jYW5kaWRhdGUvaW5mby1jYW5kaWRhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaG93YmFja3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM0RUNEQzQgO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSg2NCw2NCw2NCwuNyk7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweCAxMnB4IDEycHggMTJweDtcbn1cblxuLmJ0bi1zYXZle1xuICAgIFxuICAgIHdpZHRoOiAxMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgbWFyZ2luLXRvcDogLTdweDtcbiAgICBtYXJnaW4tYm90dG9tIDogM3B4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2OWQ5O1xuICAgIGNvbG9yOndoaXRlO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSg2NCw2NCw2NCwuNyk7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4IDtcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLFNhbnMtc2VyaWY7XG4gICAgcmlnaHQ6ODAlO1xufVxuXG5sYWJlbCB7XG4gICBcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLFNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgdG9wOjYwJTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgXG59XG5cbnRleHRhcmVhIHtcbiAgIFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsU2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbiAgICB0b3A6NjAlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBcbn1cblxuaDQge1xuICAgIG1hcmdpbi10b3A6IDZweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjE7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuXG5pbnB1dHtcbiAgICBjb2xvciA6IGJsYWNrO1xuICAgIGZvbnQtZmFtaWx5OiAnSm9zdCcsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/candidate-components/info-candidate/info-candidate.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/components/candidate-components/info-candidate/info-candidate.component.ts ***!
  \********************************************************************************************/
/*! exports provided: InfoCandidateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoCandidateComponent", function() { return InfoCandidateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_uploadfile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/uploadfile.service */ "./src/app/services/uploadfile.service.ts");
/* harmony import */ var _services_candidate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/candidate.service */ "./src/app/services/candidate.service.ts");
/* harmony import */ var src_app_modals_candidate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modals/candidate */ "./src/app/modals/candidate.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var InfoCandidateComponent = /** @class */ (function () {
    function InfoCandidateComponent(candidateService, uploadService, router) {
        this.candidateService = candidateService;
        this.uploadService = uploadService;
        this.router = router;
        this.user = new src_app_modals_candidate__WEBPACK_IMPORTED_MODULE_4__["Candidate"]();
    }
    InfoCandidateComponent.prototype.ngOnInit = function () {
    };
    /*saveForm(submitForm: FormGroup){
      if (submitForm.valid){
        const user = submitForm.value;
        const formData = new formData;
        formData.append('user', user);
        formData.append('file', this.userFile);
        this.candidateService.saveUserProfile(formData).subscribe(  data => {
         alert("candidate created successfully");
       } );
 
      } else {
        this.validateFormFields(submitForm);
      }
 
      }*/
    InfoCandidateComponent.prototype.createCandidate = function () {
        this.candidateService.createCandidate(this.user, this.fileCV, this.fileLettre)
            .subscribe(function (data) {
            alert("candidate created successfully");
        });
        this.router.navigate(['/response']);
    };
    ;
    InfoCandidateComponent.prototype.selectFileLettre = function (event) {
        this.fileLettre = event.target.files[0];
    };
    InfoCandidateComponent.prototype.selectFileCV = function (event) {
        this.fileCV = event.target.files[0];
    };
    InfoCandidateComponent.ctorParameters = function () { return [
        { type: _services_candidate_service__WEBPACK_IMPORTED_MODULE_3__["CandidateService"] },
        { type: _services_uploadfile_service__WEBPACK_IMPORTED_MODULE_2__["UploadfileService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    InfoCandidateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-info-candidate',
            template: __webpack_require__(/*! raw-loader!./info-candidate.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/candidate-components/info-candidate/info-candidate.component.html"),
            styles: [__webpack_require__(/*! ./info-candidate.component.css */ "./src/app/components/candidate-components/info-candidate/info-candidate.component.css")]
        })
    ], InfoCandidateComponent);
    return InfoCandidateComponent;
}());



/***/ }),

/***/ "./src/app/components/candidate-components/response/response.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/components/candidate-components/response/response.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');\n.container{\n    width: 100%;\n    padding-left: 0%;\n    margin-right: 5%;\n    padding-right:0%;\n    }\n.buttonText {\n    text-transform: none;\n    font-size: 20px;\n    font-family: \"montserrat\";\n    border-radius: 8px;\n    background-color: #4ECDC4;\n    position: relative;\n    width: 100px;\n    height: 35px;\n    margin : 10px 150px;\n    color: #f2f2f2;\n    \n    \n  \n    }\n.landingText {\n      margin-top: 5%;\n      }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYW5kaWRhdGUtY29tcG9uZW50cy9yZXNwb25zZS9yZXNwb25zZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlGQUFpRjtBQUNqRjtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQjtBQUVBO0lBQ0Esb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsY0FBYzs7OztJQUlkO0FBRUE7TUFDRSxjQUFjO01BQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NhbmRpZGF0ZS1jb21wb25lbnRzL3Jlc3BvbnNlL3Jlc3BvbnNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Kb3NlZmluK1NhbnMmZGlzcGxheT1zd2FwJyk7XG4uY29udGFpbmVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctbGVmdDogMCU7XG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgICBwYWRkaW5nLXJpZ2h0OjAlO1xuICAgIH1cbiAgXG4gICAgLmJ1dHRvblRleHQge1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LWZhbWlseTogXCJtb250c2VycmF0XCI7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0RUNEQzQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgbWFyZ2luIDogMTBweCAxNTBweDtcbiAgICBjb2xvcjogI2YyZjJmMjtcbiAgICBcbiAgICBcbiAgXG4gICAgfVxuICBcbiAgICAubGFuZGluZ1RleHQge1xuICAgICAgbWFyZ2luLXRvcDogNSU7XG4gICAgICB9XG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/components/candidate-components/response/response.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/candidate-components/response/response.component.ts ***!
  \********************************************************************************/
/*! exports provided: ResponseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseComponent", function() { return ResponseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ResponseComponent = /** @class */ (function () {
    function ResponseComponent() {
    }
    ResponseComponent.prototype.ngOnInit = function () {
    };
    ResponseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-response',
            template: __webpack_require__(/*! raw-loader!./response.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/candidate-components/response/response.component.html"),
            styles: [__webpack_require__(/*! ./response.component.css */ "./src/app/components/candidate-components/response/response.component.css")]
        })
    ], ResponseComponent);
    return ResponseComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
        this.longText = "Congratulation ! You are now part of the community Next Recruitment.";
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/employe-components/applications/applications-popup/applications-popup.component.css":
/*!****************************************************************************************************************!*\
  !*** ./src/app/components/employe-components/applications/applications-popup/applications-popup.component.css ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW1wbG95ZS1jb21wb25lbnRzL2FwcGxpY2F0aW9ucy9hcHBsaWNhdGlvbnMtcG9wdXAvYXBwbGljYXRpb25zLXBvcHVwLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/employe-components/applications/applications-popup/applications-popup.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/components/employe-components/applications/applications-popup/applications-popup.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: ApplicationsPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationsPopupComponent", function() { return ApplicationsPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/token-storage.service */ "./src/app/services/token-storage.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");







var ApplicationsPopupComponent = /** @class */ (function () {
    function ApplicationsPopupComponent(dialogRef, http, UserService, TokenStorageService, AuthService, 
    //private http: HttpClient,
    data) {
        this.dialogRef = dialogRef;
        this.http = http;
        this.UserService = UserService;
        this.TokenStorageService = TokenStorageService;
        this.AuthService = AuthService;
        this.data = data;
    }
    ApplicationsPopupComponent.prototype.ngOnInit = function () {
        var user = this.TokenStorageService.getUser();
        this.userId = user.id;
        console.log("user_id is: " + this.userId);
        this.checkJobInfo();
        this.company = this.data.job_company;
        this.title = this.data.jobTitle;
    };
    ApplicationsPopupComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    //to check job info 
    ApplicationsPopupComponent.prototype.checkJobInfo = function () {
        var _this = this;
        var req = {
            job_id: this.data.job_id,
            candidate_id: this.userId
        };
        this.http
            .post("/jobappform/apply/applied_jobinfo", req)
            .subscribe(function (postData) {
            _this.jobInfo = postData;
            for (var i = 0; i < _this.jobInfo.candidate.length; i++) {
                if (_this.jobInfo.candidate[i].candidate_id == _this.userId) {
                    _this.status = _this.jobInfo.candidate[i].status;
                }
            }
        });
    };
    ApplicationsPopupComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
        { type: src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_5__["TokenStorageService"] },
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
    ]; };
    ApplicationsPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-applications-popup',
            template: __webpack_require__(/*! raw-loader!./applications-popup.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/employe-components/applications/applications-popup/applications-popup.component.html"),
            styles: [__webpack_require__(/*! ./applications-popup.component.css */ "./src/app/components/employe-components/applications/applications-popup/applications-popup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
    ], ApplicationsPopupComponent);
    return ApplicationsPopupComponent;
}());



/***/ }),

/***/ "./src/app/components/employe-components/applications/applications.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/components/employe-components/applications/applications.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-margin {\n  margin: 0 10px;\n}\n\n.example-container {\n  width: auto;\n  height: auto;\n  margin: auto;\n  padding: 10px;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n.example-card {\n  max-width: 300px;\n  max-height: auto;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.example-spacer {\n  flex: 1 1 auto;\n}\n\n.container-fluid  {\n  min-width: 992px;\n  height: auto;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nheader{\n  position: fixed;\n  top: 0;\n   z-index: 11;\n  transition: all 250ms ease-in-out;\n}\n\n.main-header{\n  @extend header;\n  &.hidden{\n    opacity: 0;\n  }\n}\n\n.search-block{\n  width: 0%;\n  right: 0;\n  @extend header;\n  background: #fff;\n  &.active{\n    width: 100%;\n  }\n  .search-control{\n    flex: 1;\n    font-size: 1rem;\n    border: 0;\n    outline: none;\n    padding-left: 10px;\n    width: 100%;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lbXBsb3llLWNvbXBvbmVudHMvYXBwbGljYXRpb25zL2FwcGxpY2F0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBR0E7RUFDRSxlQUFlO0VBQ2YsTUFBTTtHQUNMLFdBQVc7RUFDWixpQ0FBaUM7QUFDbkM7O0FBQ0E7RUFDRSxjQUFjO0VBQ2Q7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFDQTtFQUNFLFNBQVM7RUFDVCxRQUFRO0VBQ1IsY0FBYztFQUNkLGdCQUFnQjtFQUNoQjtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UsT0FBTztJQUNQLGVBQWU7SUFDZixTQUFTO0lBQ1QsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixXQUFXO0VBQ2I7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW1wbG95ZS1jb21wb25lbnRzL2FwcGxpY2F0aW9ucy9hcHBsaWNhdGlvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLW1hcmdpbiB7XG4gIG1hcmdpbjogMCAxMHB4O1xufVxuXG4uZXhhbXBsZS1jb250YWluZXIge1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmV4YW1wbGUtY2FyZCB7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIG1heC1oZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5leGFtcGxlLXNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4uY29udGFpbmVyLWZsdWlkICB7XG4gIG1pbi13aWR0aDogOTkycHg7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuXG5oZWFkZXJ7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICAgei1pbmRleDogMTE7XG4gIHRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlLWluLW91dDtcbn1cbi5tYWluLWhlYWRlcntcbiAgQGV4dGVuZCBoZWFkZXI7XG4gICYuaGlkZGVue1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbi5zZWFyY2gtYmxvY2t7XG4gIHdpZHRoOiAwJTtcbiAgcmlnaHQ6IDA7XG4gIEBleHRlbmQgaGVhZGVyO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAmLmFjdGl2ZXtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuc2VhcmNoLWNvbnRyb2x7XG4gICAgZmxleDogMTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgYm9yZGVyOiAwO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/employe-components/applications/applications.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/employe-components/applications/applications.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ApplicationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationsComponent", function() { return ApplicationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _applications_popup_applications_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./applications-popup/applications-popup.component */ "./src/app/components/employe-components/applications/applications-popup/applications-popup.component.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/token-storage.service */ "./src/app/services/token-storage.service.ts");








var ApplicationsComponent = /** @class */ (function () {
    function ApplicationsComponent(http, route, TokenStorageService, UserService, dialog) {
        this.http = http;
        this.route = route;
        this.TokenStorageService = TokenStorageService;
        this.UserService = UserService;
        this.dialog = dialog;
        this.checked = false;
        this.indeterminate = false;
        this.labelPosition = 'after';
        this.disabled = false;
    }
    ApplicationsComponent.prototype.ngOnInit = function () {
        var user = this.TokenStorageService.getUser();
        this.userId = user.id;
        console.log("user_id is: " + this.userId);
        this.searchAppliedJob();
    };
    ApplicationsComponent.prototype.searchAppliedJob = function () {
        var _this = this;
        var req = {
            candidate_id: this.userId,
        };
        this.http
            .post("/jobappform/app-job-history", req)
            .subscribe(function (postData) {
            _this.appResult = postData;
            console.log("result is: ", _this.appResult);
        });
    };
    ApplicationsComponent.prototype.openDialog = function (j) {
        console.log("j is: ", j);
        var dialogRef = this.dialog.open(_applications_popup_applications_popup_component__WEBPACK_IMPORTED_MODULE_5__["ApplicationsPopupComponent"], {
            width: 'auto',
            height: 'auto',
            data: {
                job_id: j.job_id,
                jobTitle: j.job_title,
                job_company: j.job_company,
                jobType: j.job_type,
                location: j.job_location,
                industryType: j.job_industryType,
                jobDescription: j.job_description,
                job_expirationDate: j.job_expirationDate,
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    ApplicationsComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_7__["TokenStorageService"] },
        { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
    ]; };
    ApplicationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-applications',
            template: __webpack_require__(/*! raw-loader!./applications.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/employe-components/applications/applications.component.html"),
            styles: [__webpack_require__(/*! ./applications.component.css */ "./src/app/components/employe-components/applications/applications.component.css")]
        })
    ], ApplicationsComponent);
    return ApplicationsComponent;
}());



/***/ }),

/***/ "./src/app/components/employe-components/cand-profile/cand-profile.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/components/employe-components/cand-profile/cand-profile.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');\n\n*{\n    margin:0;\n    padding:0;\n    box-sizing: border-box;\n    list-style: none;\n    font-family: 'Montserrat', sans-serif;\n}\n\nbody{\n    background: #f3f3f3;\n}\n\n.wrapper{\n    position: absolute;\n    top: 50%;\n    left: 58%;\n    \n    transform: translate(-50%,-50%);\n    width: 1100px;\n    height: 420px;\n    \n    display: flex;\n    box-shadow: 0 1px 20px 0 rgba(69,90,100,0.08);\n}\n\n.wrapper .left{\n        width: 30%;\n        \n        background: rgb(199, 204, 204);\n         padding: 30px 25px;\n        border-top-left-radius: 5px;\n        border-bottom-left-radius: 5px;\n        text-align: center;\n        color: #fff;\n}\n\n.wrapper .left h4{\n    margin-bottom: 10px;\n    font-size: 17px;\n  }\n\n.wrapper .left p{\n    font-size: 16px;\n  }\n\n.wrapper .right .info p{\n    font-size: 16px;\n  }\n\n.wrapper .right{\n    width: 90%;\n    background: #fff;\n    padding: 30px 25px;\n    border-top-right-radius: 5px;\n    border-bottom-right-radius: 5px;\n  }\n\n.wrapper .right .info,\n.wrapper .right .projects,\n.wrapper.right.exp {\n  margin-bottom: 25px;\n}\n\n.wrapper .right .info h3,\n.wrapper .right .projects h3,\n.wrapper .right .exp h3\n{\n    margin-bottom: 15px;\n    padding-bottom: 5px;\n    border-bottom: 1px solid #e0e0e0;\n    color: #353c4e;\n  text-transform: uppercase;\n  letter-spacing: 5px;\n}\n\n.wrapper .right .info_data,\n.wrapper .right .projects_data,\n.wrapper .right .exp_data{\n  display: flex;\n  justify-content: space-between;\n}\n\n.wrapper .right .info_data .data,\n.wrapper .right .projects_data .data,\n.wrapper .right .exp_data .data {\n  width: 45%;\n}\n\n.wrapper .right .info_data .data h4,\n.wrapper .right .projects_data .data h4,\n.wrapper .right .exp_data .data h4{\n    color: #353c4e;\n    margin-bottom: 5px;\n}\n\n.wrapper .right .info_data .data p,\n.wrapper .right .projects_data .data p,\n.wrapper .right .exp_data .data p{\n  font-size: 16px;\n  margin-bottom: 10px;\n  color: #919aa3;\n}\n\n.wrapper .right .exp_data .data p a {\n    font-size:20px;\n    width: 30px;\n}\n\nh2{\n  font-size: 17px;\n  color:black;\n}\n\nh4{\n  font-size: 18px;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lbXBsb3llLWNvbXBvbmVudHMvY2FuZC1wcm9maWxlL2NhbmQtcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlGQUFpRjs7QUFFakY7SUFDSSxRQUFRO0lBQ1IsU0FBUztJQUNULHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTOztJQUVULCtCQUErQjtJQUMvQixhQUFhO0lBQ2IsYUFBYTs7SUFFYixhQUFhO0lBQ2IsNkNBQTZDO0FBQ2pEOztBQUlBO1FBQ1EsVUFBVTs7UUFFViw4QkFBOEI7U0FDN0Isa0JBQWtCO1FBQ25CLDJCQUEyQjtRQUMzQiw4QkFBOEI7UUFDOUIsa0JBQWtCO1FBQ2xCLFdBQVc7QUFDbkI7O0FBTUE7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtFQUNqQjs7QUFFRjtJQUNJLGVBQWU7RUFDakI7O0FBRUE7SUFDRSxlQUFlO0VBQ2pCOztBQUVBO0lBQ0UsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsNEJBQTRCO0lBQzVCLCtCQUErQjtFQUNqQzs7QUFFQTs7O0VBR0EsbUJBQW1CO0FBQ3JCOztBQUVBOzs7O0lBSUksbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixnQ0FBZ0M7SUFDaEMsY0FBYztFQUNoQix5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUVBOzs7RUFHRSxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBOzs7RUFHRSxVQUFVO0FBQ1o7O0FBRUE7OztJQUdJLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7OztFQUdFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFDQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0FBQ2Y7O0FBR0E7RUFDRSxlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUNBO0VBQ0UsZUFBZTs7QUFFakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2VtcGxveWUtY29tcG9uZW50cy9jYW5kLXByb2ZpbGUvY2FuZC1wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Kb3NlZmluK1NhbnMmZGlzcGxheT1zd2FwJyk7XG5cbip7XG4gICAgbWFyZ2luOjA7XG4gICAgcGFkZGluZzowO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xufVxuXG5ib2R5e1xuICAgIGJhY2tncm91bmQ6ICNmM2YzZjM7XG59XG5cbi53cmFwcGVye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1OCU7XG4gICAgXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbiAgICB3aWR0aDogMTEwMHB4O1xuICAgIGhlaWdodDogNDIwcHg7XG4gICAgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3gtc2hhZG93OiAwIDFweCAyMHB4IDAgcmdiYSg2OSw5MCwxMDAsMC4wOCk7XG59XG5cblxuXG4ud3JhcHBlciAubGVmdHtcbiAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYigxOTksIDIwNCwgMjA0KTtcbiAgICAgICAgIHBhZGRpbmc6IDMwcHggMjVweDtcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6ICNmZmY7XG59XG5cblxuICBcblxuXG4ud3JhcHBlciAubGVmdCBoNHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgfVxuXG4ud3JhcHBlciAubGVmdCBwe1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuXG4gIC53cmFwcGVyIC5yaWdodCAuaW5mbyBwe1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuXG4gIC53cmFwcGVyIC5yaWdodHtcbiAgICB3aWR0aDogOTAlO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgcGFkZGluZzogMzBweCAyNXB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbiAgfVxuXG4gIC53cmFwcGVyIC5yaWdodCAuaW5mbyxcbi53cmFwcGVyIC5yaWdodCAucHJvamVjdHMsXG4ud3JhcHBlci5yaWdodC5leHAge1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG4ud3JhcHBlciAucmlnaHQgLmluZm8gaDMsXG4ud3JhcHBlciAucmlnaHQgLnByb2plY3RzIGgzLFxuLndyYXBwZXIgLnJpZ2h0IC5leHAgaDNcbntcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMGUwZTA7XG4gICAgY29sb3I6ICMzNTNjNGU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiA1cHg7XG59XG5cbi53cmFwcGVyIC5yaWdodCAuaW5mb19kYXRhLFxuLndyYXBwZXIgLnJpZ2h0IC5wcm9qZWN0c19kYXRhLFxuLndyYXBwZXIgLnJpZ2h0IC5leHBfZGF0YXtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ud3JhcHBlciAucmlnaHQgLmluZm9fZGF0YSAuZGF0YSxcbi53cmFwcGVyIC5yaWdodCAucHJvamVjdHNfZGF0YSAuZGF0YSxcbi53cmFwcGVyIC5yaWdodCAuZXhwX2RhdGEgLmRhdGEge1xuICB3aWR0aDogNDUlO1xufVxuXG4ud3JhcHBlciAucmlnaHQgLmluZm9fZGF0YSAuZGF0YSBoNCxcbi53cmFwcGVyIC5yaWdodCAucHJvamVjdHNfZGF0YSAuZGF0YSBoNCxcbi53cmFwcGVyIC5yaWdodCAuZXhwX2RhdGEgLmRhdGEgaDR7XG4gICAgY29sb3I6ICMzNTNjNGU7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4ud3JhcHBlciAucmlnaHQgLmluZm9fZGF0YSAuZGF0YSBwLFxuLndyYXBwZXIgLnJpZ2h0IC5wcm9qZWN0c19kYXRhIC5kYXRhIHAsXG4ud3JhcHBlciAucmlnaHQgLmV4cF9kYXRhIC5kYXRhIHB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgY29sb3I6ICM5MTlhYTM7XG59XG4ud3JhcHBlciAucmlnaHQgLmV4cF9kYXRhIC5kYXRhIHAgYSB7XG4gICAgZm9udC1zaXplOjIwcHg7XG4gICAgd2lkdGg6IDMwcHg7XG59XG5cblxuaDJ7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6YmxhY2s7XG59XG5oNHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/employe-components/cand-profile/cand-profile.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/employe-components/cand-profile/cand-profile.component.ts ***!
  \**************************************************************************************/
/*! exports provided: CandProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandProfileComponent", function() { return CandProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/token-storage.service */ "./src/app/services/token-storage.service.ts");







var CandProfileComponent = /** @class */ (function () {
    function CandProfileComponent(_formBuilder, http, route, TokenStorageService, UserService) {
        this._formBuilder = _formBuilder;
        this.http = http;
        this.route = route;
        this.TokenStorageService = TokenStorageService;
        this.UserService = UserService;
        this.can_id = "";
        this.firstName = "";
        this.lastName = "";
        this.telephone = "";
        //note = "";
        //contacts = "";
        this.email = "";
        this.job = "";
        this.company = "";
        this.location = "";
        this.fromDate = "";
        this.toDate = "";
        this.role = "";
        this.schoolname = "";
        this.educationlevel = "";
        this.startdate = "";
        this.enddate = "";
        this.major = "";
        this.certificate = "";
        this.certificatefrom = "";
        this.expirationDate = "";
    }
    CandProfileComponent.prototype.ngOnInit = function () {
        var user = this.TokenStorageService.getUser();
        this.can_id = user.id;
        this.getCanInfo();
        this.loadImg();
    };
    CandProfileComponent.prototype.getCanInfo = function () {
        var _this = this;
        var req = {
            can_num: this.can_id,
        };
        this.http
            .post("/cand-profile/get-profile", req)
            .subscribe(function (AccountData) {
            // console.log("Candidate info", AccountData);
            _this.firstName = AccountData["fname"];
            _this.lastName = AccountData["lname"];
            _this.telephone = AccountData["phone"];
            _this.email = AccountData["email"];
            _this.job = AccountData["job"];
            _this.company = AccountData["company"];
            _this.location = AccountData["location"];
            _this.fromDate = AccountData["fromDate"];
            _this.toDate = AccountData["toDate"];
            _this.role = AccountData["role"];
            _this.schoolname = AccountData["schoolname"];
            _this.educationlevel = AccountData["educationlevel"];
            _this.startdate = AccountData["startdate"];
            _this.enddate = AccountData["enddate"];
            _this.major = AccountData["major"];
            _this.certificate = AccountData["certificate"];
            _this.certificatefrom = AccountData["certificatefrom"];
            _this.expirationDate = AccountData["expirationDate"];
        });
    };
    CandProfileComponent.prototype.arrayBufferToBase64 = function (buffer) {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach(function (b) { return binary += String.fromCharCode(b); });
        return window.btoa(binary);
    };
    ;
    CandProfileComponent.prototype.loadImg = function () {
        var _this = this;
        var req = {
            userInfo: this.can_id
        };
        this.http
            .post("/images/load-pic", req)
            .subscribe(function (data) {
            var base64Flag = 'data:image/jpeg;base64,';
            // var imageStr = this.arrayBufferToBase64(data["img"].data.data);
            var imageStr = _this.arrayBufferToBase64(data["img"].data.data);
            _this.pic = base64Flag + imageStr;
        });
    };
    CandProfileComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_6__["TokenStorageService"] },
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
    ]; };
    CandProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cand-profile',
            template: __webpack_require__(/*! raw-loader!./cand-profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/employe-components/cand-profile/cand-profile.component.html"),
            styles: [__webpack_require__(/*! ./cand-profile.component.css */ "./src/app/components/employe-components/cand-profile/cand-profile.component.css")]
        })
    ], CandProfileComponent);
    return CandProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/employe-components/candidate-form/can-form-popup/can-form-popup.component.css":
/*!**********************************************************************************************************!*\
  !*** ./src/app/components/employe-components/candidate-form/can-form-popup/can-form-popup.component.css ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW1wbG95ZS1jb21wb25lbnRzL2NhbmRpZGF0ZS1mb3JtL2Nhbi1mb3JtLXBvcHVwL2Nhbi1mb3JtLXBvcHVwLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/employe-components/candidate-form/can-form-popup/can-form-popup.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/components/employe-components/candidate-form/can-form-popup/can-form-popup.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: CanFormPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanFormPopupComponent", function() { return CanFormPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var CanFormPopupComponent = /** @class */ (function () {
    function CanFormPopupComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    CanFormPopupComponent.prototype.ngOnInit = function () {
    };
    CanFormPopupComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    CanFormPopupComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
    ]; };
    CanFormPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-can-form-popup',
            template: __webpack_require__(/*! raw-loader!./can-form-popup.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/employe-components/candidate-form/can-form-popup/can-form-popup.component.html"),
            styles: [__webpack_require__(/*! ./can-form-popup.component.css */ "./src/app/components/employe-components/candidate-form/can-form-popup/can-form-popup.component.css")]
        })
    ], CanFormPopupComponent);
    return CanFormPopupComponent;
}());



/***/ }),

/***/ "./src/app/components/employe-components/candidate-form/candidate-form.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/employe-components/candidate-form/candidate-form.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n  min-height: 70px;\n}\n\n.example-spacer {\n  flex: 1 1 auto;\n}\n\n.example-button button{\n  margin-top: 50px;\n  left:50%;\n}\n\n.mat-stepper-horizontal {\n  margin-top: 8px;\n}\n\n.mat-form-field {\n  margin-top: 16px;\n}\n\n.mat-form-field {\n  margin-top: 20px;\n  margin-left: 8px;\n}\n\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n  max-height: 500px;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\ntd {\n  padding-right: 8px;\n}\n\n.mat-card {\n  width: 80%;\n  margin: auto;\n}\n\nbody{\n  width: 800px;\n  margin: 2em auto;\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lbXBsb3llLWNvbXBvbmVudHMvY2FuZGlkYXRlLWZvcm0vY2FuZGlkYXRlLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsUUFBUTtBQUNWOztBQUdBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2VtcGxveWUtY29tcG9uZW50cy9jYW5kaWRhdGUtZm9ybS9jYW5kaWRhdGUtZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhciB7XG4gIG1pbi1oZWlnaHQ6IDcwcHg7XG59XG5cbi5leGFtcGxlLXNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4uZXhhbXBsZS1idXR0b24gYnV0dG9ue1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBsZWZ0OjUwJTtcbn1cblxuXG4ubWF0LXN0ZXBwZXItaG9yaXpvbnRhbCB7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cblxuLmV4YW1wbGUtZm9ybSB7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbn1cblxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG50ZCB7XG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcbn1cblxuLm1hdC1jYXJkIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG5ib2R5e1xuICB3aWR0aDogODAwcHg7XG4gIG1hcmdpbjogMmVtIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/employe-components/candidate-form/candidate-form.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/components/employe-components/candidate-form/candidate-form.component.ts ***!
  \******************************************************************************************/
/*! exports provided: CandidateFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidateFormComponent", function() { return CandidateFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm5/stepper.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _candidate_form_can_form_popup_can_form_popup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../candidate-form/can-form-popup/can-form-popup.component */ "./src/app/components/employe-components/candidate-form/can-form-popup/can-form-popup.component.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/token-storage.service */ "./src/app/services/token-storage.service.ts");










var CandidateFormComponent = /** @class */ (function () {
    /* //group 1
   firstName = "";
     lastName = "  ";
     phone = "";
     company ="";
     //group 2
     starDate="";
     jobTitle="";
     comanyExp="";
     location="";
     //group 3
     educationDate="";
     //group 4
     date= "";
   
     isLinear = false;
     firstFormGroup = new FormGroup({
       firstName: new FormControl('', Validators.minLength(2)),
       lastName: new FormControl('', Validators.minLength(2)),
       phone: new FormControl('', Validators.minLength(10)),
     });
     secondFormGroup = new FormGroup({
       jobTitle: new FormControl('', Validators.minLength(40)),
       comanyExp: new FormControl('', Validators.minLength(40)),
       location: new FormControl('', Validators.minLength(40)),
     });
     thirdFormGroup = new FormGroup({
       educationDate: new FormControl('', Validators.minLength(40)),
     });
   
     forthFormGroup = new FormGroup({
       date: new FormControl('', Validators.minLength(40)),
     }); */
    function CandidateFormComponent(_formBuilder, http, route, loginService, TokenStorageService, dialog) {
        this._formBuilder = _formBuilder;
        this.http = http;
        this.route = route;
        this.loginService = loginService;
        this.TokenStorageService = TokenStorageService;
        this.dialog = dialog;
        this.Educations = [
            { value: 'Bac', viewValue: 'Bac' },
            { value: 'Licence', viewValue: 'Licence' },
            { value: 'Mastére', viewValue: 'Mastére' },
            { value: 'Doctorat', viewValue: 'Doctorat' },
        ];
        this.enteredFirstName = "";
        this.enteredLastName = "";
        this.enteredTelephone = "";
        this.enteredEmail = "";
        this.enteredAddress = "";
        this.enteredJob = "";
        this.enteredCompany = "";
        this.enteredLocation = "";
        this.enteredFromDate = "";
        this.enteredToDate = "";
        this.enteredRole = "";
        this.enteredSchool = "";
        this.enteredEducationlevel = "";
        this.enteredStartDate = "";
        this.enteredEndDate = "";
        this.enteredMajor = "";
        this.enteredCertificate = "";
        this.enteredCertificateFrom = "";
        this.enteredExpirationDate = "";
        this.candidateCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectedFile = null;
        this.can_id = "";
    }
    CandidateFormComponent.prototype.ngOnInit = function () {
        var user = this.TokenStorageService.getUser();
        this.can_id = user.id;
        this.getCanInfo();
        this.loadImg();
        //this.getCanInfo();
        // this.firstFormGroup = this._formBuilder.group({
        //   firstCtrl: ['', Validators.required]
        // });
        // this.secondFormGroup = this._formBuilder.group({
        //   secondCtrl: ['', Validators.required]
        // });
        // this.thirdFormGroup = this._formBuilder.group({
        //   thirdCtrl: ['', Validators.required]
        // });
        // this.forthFormGroup = this._formBuilder.group({
        //   forthCtrl: ['', Validators.required]
        // });
    };
    /*
      //get default
      getCanInfo() {
        console.log("can id: ", this.can_id);
        let req = {
          can_num: this.can_id,
        }
        this.http
          .post<{ message: string; account: Account }>(
            "http://localhost:3000/cand-profile/get-profile", req)
          .subscribe(AccountData => {
            this.firstName = AccountData["fname"];
            this.lastName = AccountData["lname"];
            this.phone = AccountData["phone"];
          })
        this.firstFormGroup.value.firstName = this.firstName;
        this.firstFormGroup.value.lastName = this.lastName;
        this.firstFormGroup.value.phone = this.phone;
      }
    
      //save update
      SaveUpdate() {
        let req = {
          can_num: this.can_id,
          firstName: this.firstFormGroup.value.firstName,
          lastName: this.firstFormGroup.value.lastName,
          phone: this.firstFormGroup.value.phone,
        };
    
        console.log("update content is: " , req);
        this.http
          .post("http://localhost:3000/cand-profile/update", req)
          .subscribe(response => {
            console.log("res is :", response);
          });
        this.openDialog();
      } */
    CandidateFormComponent.prototype.SaveUpdate = function () {
        var candidate = {
            can_num: this.can_id,
            firstName: this.enteredFirstName,
            lastName: this.enteredLastName,
            telephone: this.enteredTelephone,
            email: this.enteredEmail,
            address: this.enteredAddress,
            job: this.enteredJob,
            company: this.enteredCompany,
            location: this.enteredLocation,
            fromDate: this.enteredFromDate,
            toDate: this.enteredToDate,
            role: this.enteredRole,
            schoolname: this.enteredSchool,
            educationlevel: this.enteredEducationlevel,
            startdate: this.enteredStartDate,
            enddate: this.enteredEndDate,
            major: this.enteredMajor,
            certificate: this.enteredCertificate,
            certificatefrom: this.enteredCertificateFrom,
            expirationDate: this.enteredExpirationDate
        };
        this.candidateCreated.emit(candidate);
        console.log("input candidate info: " + candidate);
        this.http
            .post("/cand-profile/update", candidate)
            .subscribe(function (response) {
            console.log("res is :", response);
        });
        this.openDialog();
    };
    CandidateFormComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(_candidate_form_can_form_popup_can_form_popup_component__WEBPACK_IMPORTED_MODULE_7__["CanFormPopupComponent"], {
            width: '300px',
            height: '200px',
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    CandidateFormComponent.prototype.getCanInfo = function () {
        var _this = this;
        var req = {
            can_num: this.can_id,
        };
        this.http
            .post("/cand-profile/get-profile", req)
            .subscribe(function (AccountData) {
            // console.log("Candidate info", AccountData);
            _this.enteredFirstName = AccountData["fname"];
            _this.enteredLastName = AccountData["lname"];
            _this.enteredTelephone = AccountData["phone"];
            _this.enteredEmail = AccountData["email"];
            _this.enteredJob = AccountData["job"];
            _this.enteredCompany = AccountData["company"];
            _this.enteredLocation = AccountData["location"];
            _this.enteredFromDate = AccountData["fromDate"];
            _this.enteredToDate = AccountData["toDate"];
            _this.enteredRole = AccountData["role"];
            _this.enteredSchool = AccountData["schoolname"];
            _this.enteredEducationlevel = AccountData["educationlevel"];
            _this.enteredStartDate = AccountData["startdate"];
            _this.enteredEndDate = AccountData["enddate"];
            _this.enteredMajor = AccountData["enteredMajor"];
            _this.enteredCertificate = AccountData["certificate"];
            _this.enteredCertificateFrom = AccountData["certificatefrom"];
            _this.enteredExpirationDate = AccountData["expirationDate"];
        });
    };
    CandidateFormComponent.prototype.selectFile = function (event) {
        this.selectedFile = event.target.files[0];
    };
    CandidateFormComponent.prototype.uploadBotton = function () {
        // console.log("id is :", this.hr_id);
        var userInfo = this.can_id;
        var fd = new FormData();
        // const fd1 = new FormData();
        fd.append('userImage', this.selectedFile, userInfo);
        // fd1.append('userImage', this.selectedFile, this.selectedFile.name);
        // console.log(fd);
        this.http
            .post("/images/update-pic", fd)
            .subscribe(function (response) {
            console.log("res is :", response);
        });
    };
    CandidateFormComponent.prototype.arrayBufferToBase64 = function (buffer) {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach(function (b) { return binary += String.fromCharCode(b); });
        return window.btoa(binary);
    };
    ;
    CandidateFormComponent.prototype.loadImg = function () {
        var _this = this;
        var req = {
            userInfo: this.can_id
        };
        this.http
            .post("/images/load-pic", req)
            .subscribe(function (data) {
            var base64Flag = 'data:image/jpeg;base64,';
            var imageStr = _this.arrayBufferToBase64(data["img"].data.data);
            _this.pic = base64Flag + imageStr;
        });
    };
    CandidateFormComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
        { type: src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_9__["TokenStorageService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], CandidateFormComponent.prototype, "candidateCreated", void 0);
    CandidateFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-candidate-form',
            template: __webpack_require__(/*! raw-loader!./candidate-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/employe-components/candidate-form/candidate-form.component.html"),
            providers: [{
                    provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_3__["STEPPER_GLOBAL_OPTIONS"], useValue: { showError: true }
                }],
            styles: [__webpack_require__(/*! ./candidate-form.component.css */ "./src/app/components/employe-components/candidate-form/candidate-form.component.css")]
        })
    ], CandidateFormComponent);
    return CandidateFormComponent;
}());



/***/ }),

/***/ "./src/app/components/employe-components/candidature/candidature.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/components/employe-components/candidature/candidature.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".showback{\n  background-color: #F29E38;\n  box-shadow: 0 2px 10px rgba(64,64,64,.7);\n  border-radius: 12px 12px 12px 12px;\n}\n\n.btn-save{\n  \n  width: 130px;\n  height: 30px;\n  margin-top: -7px;\n  margin-bottom : 3px;\n  font-size: 16px;\n  background-color: #0069d9;\n  color:white;\n  box-shadow: 0 2px 10px rgba(64,64,64,.7);\n  border-radius: 3px ;\n  font-family: 'Montserrat',Sans-serif;\n  right:80%;\n}\n\nlabel {\n \n  font-family: 'Montserrat',Sans-serif;\n  font-size: 13px;\n  padding-top: 5px;\n  top:60%;\n  color: white;\n  \n}\n\ntextarea {\n \n  font-family: 'Montserrat',Sans-serif;\n  font-size: 13px;\n  padding-top: 5px;\n  top:60%;\n  color: white;\n  \n}\n\nh4 {\n  margin-top: 6px;\n  margin-bottom: 5px;\n  font-family: 'Montserrat', sans-serif;\n  font-weight: 500;\n  line-height: 1.1;\n  color: inherit;\n  font-size: 18px;\n}\n\ninput{\n  color : black;\n  font-family: 'Jost', sans-serif;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lbXBsb3llLWNvbXBvbmVudHMvY2FuZGlkYXR1cmUvY2FuZGlkYXR1cmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6Qix3Q0FBd0M7RUFDeEMsa0NBQWtDO0FBQ3BDOztBQUVBOztFQUVFLFlBQVk7RUFDWixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCx3Q0FBd0M7RUFDeEMsbUJBQW1CO0VBQ25CLG9DQUFvQztFQUNwQyxTQUFTO0FBQ1g7O0FBRUE7O0VBRUUsb0NBQW9DO0VBQ3BDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsT0FBTztFQUNQLFlBQVk7O0FBRWQ7O0FBRUE7O0VBRUUsb0NBQW9DO0VBQ3BDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsT0FBTztFQUNQLFlBQVk7O0FBRWQ7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHFDQUFxQztFQUNyQyxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLCtCQUErQjtFQUMvQixlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9lbXBsb3llLWNvbXBvbmVudHMvY2FuZGlkYXR1cmUvY2FuZGlkYXR1cmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaG93YmFja3tcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YyOUUzODtcbiAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDY0LDY0LDY0LC43KTtcbiAgYm9yZGVyLXJhZGl1czogMTJweCAxMnB4IDEycHggMTJweDtcbn1cblxuLmJ0bi1zYXZle1xuICBcbiAgd2lkdGg6IDEzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbi10b3A6IC03cHg7XG4gIG1hcmdpbi1ib3R0b20gOiAzcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjlkOTtcbiAgY29sb3I6d2hpdGU7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSg2NCw2NCw2NCwuNyk7XG4gIGJvcmRlci1yYWRpdXM6IDNweCA7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsU2Fucy1zZXJpZjtcbiAgcmlnaHQ6ODAlO1xufVxuXG5sYWJlbCB7XG4gXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsU2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICB0b3A6NjAlO1xuICBjb2xvcjogd2hpdGU7XG4gIFxufVxuXG50ZXh0YXJlYSB7XG4gXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsU2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICB0b3A6NjAlO1xuICBjb2xvcjogd2hpdGU7XG4gIFxufVxuXG5oNCB7XG4gIG1hcmdpbi10b3A6IDZweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMS4xO1xuICBjb2xvcjogaW5oZXJpdDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG5pbnB1dHtcbiAgY29sb3IgOiBibGFjaztcbiAgZm9udC1mYW1pbHk6ICdKb3N0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/employe-components/candidature/candidature.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/employe-components/candidature/candidature.component.ts ***!
  \************************************************************************************/
/*! exports provided: CandidatureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidatureComponent", function() { return CandidatureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_candidate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/candidate.service */ "./src/app/services/candidate.service.ts");
/* harmony import */ var src_app_modals_candidate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modals/candidate */ "./src/app/modals/candidate.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_uploadfile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/uploadfile.service */ "./src/app/services/uploadfile.service.ts");






var CandidatureComponent = /** @class */ (function () {
    function CandidatureComponent(candidateService, uploadService, router) {
        this.candidateService = candidateService;
        this.uploadService = uploadService;
        this.router = router;
        this.form = {};
        this.candidat = new src_app_modals_candidate__WEBPACK_IMPORTED_MODULE_3__["Candidate"]();
    }
    CandidatureComponent.prototype.ngOnInit = function () {
    };
    /*saveForm(submitForm: FormGroup){
      if (submitForm.valid){
        const user = submitForm.value;
        const formData = new formData;
        formData.append('user', user);
        formData.append('file', this.userFile);
        this.candidateService.saveUserProfile(formData).subscribe(  data => {
         alert("candidate created successfully");
       } );
      } else {
        this.validateFormFields(submitForm);
      }
      }*/
    CandidatureComponent.prototype.createCandidate = function () {
        this.candidateService.createCandidate(this.candidat, this.fileCV, this.fileLettre)
            .subscribe(function (data) {
            alert("candidate created successfully");
        });
        this.router.navigate(['/response']);
    };
    ;
    CandidatureComponent.prototype.selectFileLettre = function (event) {
        this.fileLettre = event.target.files[0];
    };
    CandidatureComponent.prototype.selectFileCV = function (event) {
        this.fileCV = event.target.files[0];
    };
    CandidatureComponent.ctorParameters = function () { return [
        { type: _services_candidate_service__WEBPACK_IMPORTED_MODULE_2__["CandidateService"] },
        { type: _services_uploadfile_service__WEBPACK_IMPORTED_MODULE_5__["UploadfileService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    CandidatureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'candidature',
            template: __webpack_require__(/*! raw-loader!./candidature.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/employe-components/candidature/candidature.component.html"),
            styles: [__webpack_require__(/*! ./candidature.component.css */ "./src/app/components/employe-components/candidature/candidature.component.css")]
        })
    ], CandidatureComponent);
    return CandidatureComponent;
}());



/***/ }),

/***/ "./src/app/components/employe-components/info-employe/info-employe.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/components/employe-components/info-employe/info-employe.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');\n\n*{\n    margin:0;\n    padding:0;\n    box-sizing: border-box;\n    list-style: none;\n    font-family: 'Montserrat', sans-serif;\n}\n\nbody{\n    background: #f3f3f3;\n}\n\n.wrapper{\n    position: absolute;\n    top: 50%;\n    left: 58%;\n    \n    transform: translate(-50%,-50%);\n    width: 1100px;\n    height: 420px;\n    \n    display: flex;\n    box-shadow: 0 1px 20px 0 rgba(69,90,100,0.08);\n}\n\n.wrapper .left{\n        width: 30%;\n        \n        background: rgb(199, 204, 204);\n         padding: 30px 25px;\n        border-top-left-radius: 5px;\n        border-bottom-left-radius: 5px;\n        text-align: center;\n        color: #fff;\n}\n\n.wrapper .left h4{\n    margin-bottom: 10px;\n    font-size: 17px;\n  }\n\n.wrapper .left p{\n    font-size: 16px;\n  }\n\n.wrapper .right .info p{\n    font-size: 16px;\n  }\n\n.wrapper .right{\n    width: 90%;\n    background: #fff;\n    padding: 30px 25px;\n    border-top-right-radius: 5px;\n    border-bottom-right-radius: 5px;\n  }\n\n.wrapper .right .info,\n.wrapper .right .projects,\n.wrapper.right.exp {\n  margin-bottom: 25px;\n}\n\n.wrapper .right .info h3,\n.wrapper .right .projects h3,\n.wrapper .right .exp h3\n{\n    margin-bottom: 15px;\n    padding-bottom: 5px;\n    border-bottom: 1px solid #e0e0e0;\n    color: #353c4e;\n  text-transform: uppercase;\n  letter-spacing: 5px;\n}\n\n.wrapper .right .info_data,\n.wrapper .right .projects_data,\n.wrapper .right .exp_data{\n  display: flex;\n  justify-content: space-between;\n}\n\n.wrapper .right .info_data .data,\n.wrapper .right .projects_data .data,\n.wrapper .right .exp_data .data {\n  width: 45%;\n}\n\n.wrapper .right .info_data .data h4,\n.wrapper .right .projects_data .data h4,\n.wrapper .right .exp_data .data h4{\n    color: #353c4e;\n    margin-bottom: 5px;\n}\n\n.wrapper .right .info_data .data p,\n.wrapper .right .projects_data .data p,\n.wrapper .right .exp_data .data p{\n  font-size: 16px;\n  margin-bottom: 10px;\n  color: #919aa3;\n}\n\n.wrapper .right .exp_data .data p a {\n    font-size:20px;\n    width: 30px;\n}\n\n.wrapper .right .btn {\n    width: 300px;\n    height: 30px;\n    font-family: 'Montserrat', sans-serif;\n    font-size:17px;\n    color:white;\n    margin : 30px 200px;\n    background: #4ECDC4;\n    \n}\n\nh2{\n  font-size: 17px;\n  color:black;\n}\n\nh4{\n  font-size: 18px;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lbXBsb3llLWNvbXBvbmVudHMvaW5mby1lbXBsb3llL2luZm8tZW1wbG95ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlGQUFpRjs7QUFFakY7SUFDSSxRQUFRO0lBQ1IsU0FBUztJQUNULHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTOztJQUVULCtCQUErQjtJQUMvQixhQUFhO0lBQ2IsYUFBYTs7SUFFYixhQUFhO0lBQ2IsNkNBQTZDO0FBQ2pEOztBQUlBO1FBQ1EsVUFBVTs7UUFFViw4QkFBOEI7U0FDN0Isa0JBQWtCO1FBQ25CLDJCQUEyQjtRQUMzQiw4QkFBOEI7UUFDOUIsa0JBQWtCO1FBQ2xCLFdBQVc7QUFDbkI7O0FBTUE7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtFQUNqQjs7QUFFRjtJQUNJLGVBQWU7RUFDakI7O0FBRUE7SUFDRSxlQUFlO0VBQ2pCOztBQUVBO0lBQ0UsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsNEJBQTRCO0lBQzVCLCtCQUErQjtFQUNqQzs7QUFFQTs7O0VBR0EsbUJBQW1CO0FBQ3JCOztBQUVBOzs7O0lBSUksbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixnQ0FBZ0M7SUFDaEMsY0FBYztFQUNoQix5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUVBOzs7RUFHRSxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBOzs7RUFHRSxVQUFVO0FBQ1o7O0FBRUE7OztJQUdJLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7OztFQUdFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFDQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0FBQ2Y7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLHFDQUFxQztJQUNyQyxjQUFjO0lBQ2QsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixtQkFBbUI7O0FBRXZCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFDQTtFQUNFLGVBQWU7O0FBRWpCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9lbXBsb3llLWNvbXBvbmVudHMvaW5mby1lbXBsb3llL2luZm8tZW1wbG95ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Sm9zZWZpbitTYW5zJmRpc3BsYXk9c3dhcCcpO1xuXG4qe1xuICAgIG1hcmdpbjowO1xuICAgIHBhZGRpbmc6MDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbn1cblxuYm9keXtcbiAgICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xufVxuXG4ud3JhcHBlcntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTglO1xuICAgIFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gICAgd2lkdGg6IDExMDBweDtcbiAgICBoZWlnaHQ6IDQyMHB4O1xuICAgIFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm94LXNoYWRvdzogMCAxcHggMjBweCAwIHJnYmEoNjksOTAsMTAwLDAuMDgpO1xufVxuXG5cblxuLndyYXBwZXIgLmxlZnR7XG4gICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgIFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMTk5LCAyMDQsIDIwNCk7XG4gICAgICAgICBwYWRkaW5nOiAzMHB4IDI1cHg7XG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xufVxuXG5cbiAgXG5cblxuLndyYXBwZXIgLmxlZnQgaDR7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gIH1cblxuLndyYXBwZXIgLmxlZnQgcHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cblxuICAud3JhcHBlciAucmlnaHQgLmluZm8gcHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cblxuICAud3JhcHBlciAucmlnaHR7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHBhZGRpbmc6IDMwcHggMjVweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG4gIH1cblxuICAud3JhcHBlciAucmlnaHQgLmluZm8sXG4ud3JhcHBlciAucmlnaHQgLnByb2plY3RzLFxuLndyYXBwZXIucmlnaHQuZXhwIHtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxuLndyYXBwZXIgLnJpZ2h0IC5pbmZvIGgzLFxuLndyYXBwZXIgLnJpZ2h0IC5wcm9qZWN0cyBoMyxcbi53cmFwcGVyIC5yaWdodCAuZXhwIGgzXG57XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTBlMGUwO1xuICAgIGNvbG9yOiAjMzUzYzRlO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogNXB4O1xufVxuXG4ud3JhcHBlciAucmlnaHQgLmluZm9fZGF0YSxcbi53cmFwcGVyIC5yaWdodCAucHJvamVjdHNfZGF0YSxcbi53cmFwcGVyIC5yaWdodCAuZXhwX2RhdGF7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLndyYXBwZXIgLnJpZ2h0IC5pbmZvX2RhdGEgLmRhdGEsXG4ud3JhcHBlciAucmlnaHQgLnByb2plY3RzX2RhdGEgLmRhdGEsXG4ud3JhcHBlciAucmlnaHQgLmV4cF9kYXRhIC5kYXRhIHtcbiAgd2lkdGg6IDQ1JTtcbn1cblxuLndyYXBwZXIgLnJpZ2h0IC5pbmZvX2RhdGEgLmRhdGEgaDQsXG4ud3JhcHBlciAucmlnaHQgLnByb2plY3RzX2RhdGEgLmRhdGEgaDQsXG4ud3JhcHBlciAucmlnaHQgLmV4cF9kYXRhIC5kYXRhIGg0e1xuICAgIGNvbG9yOiAjMzUzYzRlO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLndyYXBwZXIgLnJpZ2h0IC5pbmZvX2RhdGEgLmRhdGEgcCxcbi53cmFwcGVyIC5yaWdodCAucHJvamVjdHNfZGF0YSAuZGF0YSBwLFxuLndyYXBwZXIgLnJpZ2h0IC5leHBfZGF0YSAuZGF0YSBwe1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGNvbG9yOiAjOTE5YWEzO1xufVxuLndyYXBwZXIgLnJpZ2h0IC5leHBfZGF0YSAuZGF0YSBwIGEge1xuICAgIGZvbnQtc2l6ZToyMHB4O1xuICAgIHdpZHRoOiAzMHB4O1xufVxuLndyYXBwZXIgLnJpZ2h0IC5idG4ge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6MTdweDtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBtYXJnaW4gOiAzMHB4IDIwMHB4O1xuICAgIGJhY2tncm91bmQ6ICM0RUNEQzQ7XG4gICAgXG59XG5cbmgye1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOmJsYWNrO1xufVxuaDR7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgXG59Il19 */"

/***/ }),

/***/ "./src/app/components/employe-components/info-employe/info-employe.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/employe-components/info-employe/info-employe.component.ts ***!
  \**************************************************************************************/
/*! exports provided: InfoEmployeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoEmployeComponent", function() { return InfoEmployeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/token-storage.service */ "./src/app/services/token-storage.service.ts");



var InfoEmployeComponent = /** @class */ (function () {
    function InfoEmployeComponent(token) {
        this.token = token;
    }
    InfoEmployeComponent.prototype.ngOnInit = function () {
        this.currentUser = this.token.getUser();
    };
    InfoEmployeComponent.ctorParameters = function () { return [
        { type: src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"] }
    ]; };
    InfoEmployeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-info-employe',
            template: __webpack_require__(/*! raw-loader!./info-employe.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/employe-components/info-employe/info-employe.component.html"),
            styles: [__webpack_require__(/*! ./info-employe.component.css */ "./src/app/components/employe-components/info-employe/info-employe.component.css")]
        })
    ], InfoEmployeComponent);
    return InfoEmployeComponent;
}());



/***/ }),

/***/ "./src/app/components/employe-components/jobapp-form/jobapp-form-create/jobapp-form-create.component.css":
/*!***************************************************************************************************************!*\
  !*** ./src/app/components/employe-components/jobapp-form/jobapp-form-create/jobapp-form-create.component.css ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-stepper-horizontal {\n    margin-top: 20px;\n    \n  }\n  \n  .example-container{\n    width: 1000px;\n    height: 500px;\n    margin: auto;\n    background: #fcf0e6ca;\n    padding: 10px;\n  }\n  \n  .example-spacer {\n    flex: 1 1 auto;\n  }\n  \n  .example-button button{\n    margin-top: 50px;\n    left:50%;\n  }\n  \n  .example-form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n  }\n  \n  .example-full-width {\n    width: 100%;\n  }\n  \n  td {\n    padding-right: 8px;\n  }\n  \n  .center {\n    display: flex;\n    justify-content: center;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lbXBsb3llLWNvbXBvbmVudHMvam9iYXBwLWZvcm0vam9iYXBwLWZvcm0tY3JlYXRlL2pvYmFwcC1mb3JtLWNyZWF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCOztFQUVsQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixhQUFhO0lBQ2IsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUdBO0lBQ0UsZ0JBQWdCO0lBQ2hCLFFBQVE7RUFDVjs7RUFHQTtJQUNFLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsV0FBVztFQUNiOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHVCQUF1QjtFQUN6QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW1wbG95ZS1jb21wb25lbnRzL2pvYmFwcC1mb3JtL2pvYmFwcC1mb3JtLWNyZWF0ZS9qb2JhcHAtZm9ybS1jcmVhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtc3RlcHBlci1ob3Jpem9udGFsIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIFxuICB9XG4gIFxuICAuZXhhbXBsZS1jb250YWluZXJ7XG4gICAgd2lkdGg6IDEwMDBweDtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBiYWNrZ3JvdW5kOiAjZmNmMGU2Y2E7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuICBcbiAgLmV4YW1wbGUtc3BhY2VyIHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgfVxuICBcbiAgXG4gIC5leGFtcGxlLWJ1dHRvbiBidXR0b257XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICBsZWZ0OjUwJTtcbiAgfVxuICBcbiAgXG4gIC5leGFtcGxlLWZvcm0ge1xuICAgIG1pbi13aWR0aDogMTUwcHg7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLmV4YW1wbGUtZnVsbC13aWR0aCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIHRkIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gIH1cbiAgXG4gIC5jZW50ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgIl19 */"

/***/ }),

/***/ "./src/app/components/employe-components/jobapp-form/jobapp-form-create/jobapp-form-create.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/components/employe-components/jobapp-form/jobapp-form-create/jobapp-form-create.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: MyErrorStateMatcher, JobappFormCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobappFormCreateComponent", function() { return JobappFormCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm5/stepper.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _jobspage_job_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../jobspage/job.service */ "./src/app/components/employe-components/jobspage/job.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/token-storage.service */ "./src/app/services/token-storage.service.ts");






//import { isNumeric } from 'rxjs/util/isNumeric';




/** Error when invalid control is dirty, touched, or submitted. */
var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());

var JobappFormCreateComponent = /** @class */ (function () {
    function JobappFormCreateComponent(_formBuilder, http, router, AuthService, jobService, TokenStorageService, UserService) {
        this._formBuilder = _formBuilder;
        this.http = http;
        this.router = router;
        this.AuthService = AuthService;
        this.jobService = jobService;
        this.TokenStorageService = TokenStorageService;
        this.UserService = UserService;
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email,
        ]);
        this.matcher = new MyErrorStateMatcher();
        this.choices = [
            { value: 'Yes-0', viewValue: 'Yes' },
            { value: 'No-1', viewValue: 'No' }
        ];
        this.genders = [
            { value: 'Male-0', viewValue: 'Male' },
            { value: 'Female-1', viewValue: 'Female' },
            { value: 'Prefer Not to disclose-2', viewValue: 'Prefer Not to disclose' }
        ];
        this.veterans = [
            { value: 'I am not a veteran-0', viewValue: 'I am not a veteran' },
            { value: 'Recently separated veteran-1', viewValue: 'Recently separated veteran' },
            { value: 'Disabled veteran-2', viewValue: 'Disabled veteran' },
            { value: 'I am not a protected veteran-3', viewValue: 'I am not a protected veteran' }
        ];
        this.Disabilities = [
            { value: 'I do not have disability-0', viewValue: 'I do not have disability' },
            { value: 'I have disability-1', viewValue: 'I have disability' }
        ];
        this.Educations = [
            { value: 'Some College-0', viewValue: 'Some College' },
            { value: 'Juris Doctor-1', viewValue: 'Juris Doctor' },
            { value: 'Professional Designation', viewValue: 'Professional Designation' },
            { value: 'Other', viewValue: 'Other' },
            { value: 'Masters', viewValue: 'Masters' },
            { value: 'Honours Bachelors', viewValue: 'Honours Bachelors' },
            { value: 'High School Diploma', viewValue: 'High School Diploma' },
            { value: 'GED', viewValue: 'GED' },
            { value: 'Doctorate', viewValue: 'Doctorate' },
            { value: 'Diploma', viewValue: 'Diploma' },
            { value: 'Certificate', viewValue: 'Certificate' },
            { value: 'Bachelors', viewValue: 'Bachelors' },
            { value: 'Associates', viewValue: 'Associates' }
        ];
        this.enteredFirstName = "";
        this.enteredLastName = "";
        this.enteredTelephone = "";
        this.enteredEmail = "";
        this.enteredAddress = "";
        this.enteredAddress2 = "";
        this.enteredCity = "";
        this.enteredState = "";
        this.enteredZipcode = "";
        this.enteredJob = "";
        this.enteredCompany = "";
        this.enteredLocation = "";
        this.enteredFromDate = "";
        this.enteredToDate = "";
        this.enteredRole = "";
        //enteredJob2 = "";
        this.enteredSchool = "";
        this.enteredEducationlevel = "";
        this.enteredStartDate = "";
        this.enteredEndDate = "";
        this.enteredMajor = "";
        this.enteredCumulativegpa = "";
        this.enteredSkills = "";
        this.enteredAccomplishments = "";
        this.enteredSponsership = "";
        this.enteredAcknowledgment = "";
        this.enteredGender = "";
        this.enteredHispanic = "";
        this.enteredVeteran = "";
        this.jobappCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.can_id = "";
        //date = new FormControl(new Date());
        this.can_email = "";
        this.job_id = "";
        this.job_title = "";
        this.job_company = "";
        this.job_type = "";
        this.job_industryType = "";
        this.job_description = "";
        this.job_location = "";
        this.job_expirationDate = "";
        this.rank = 0;
        this.gpa_check = 3;
    }
    JobappFormCreateComponent.prototype.ngOnInit = function () {
        var user = this.TokenStorageService.getUser();
        this.can_id = user.id;
        this.can_email = this.AuthService.getUserEmail(); // by sharmi for getting the user email --> still not working
        this.job_id = this.jobService.getJobId();
        this.job_title = this.jobService.getJobTitle();
        this.job_company = this.jobService.getJobCompany();
        this.job_type = this.jobService.getJobType();
        this.job_industryType = this.jobService.getJobIndustryType();
        this.job_description = this.jobService.getJobDescription();
        this.job_location = this.jobService.getJobLocation();
        this.job_expirationDate = this.jobService.getJobExpirationDate();
        // console.log("candidate email is: ", this.can_email);
        console.log("job id is:", this.job_id);
        console.log("title is:", this.job_title);
        // console.log("company is:" , this.job_company);
        // console.log("job type is:", this.job_type);
        // console.log("industry is:", this.job_industryType);
        // console.log("description is:" , this.job_description);
        // console.log("location is:" , this.job_location);
        // console.log("expirationDate is:" , this.job_expirationDate);
        /* this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required]
          });
          this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ''
          });
          this.thirdFormGroup = this._formBuilder.group({
           thirdCtrl: ['', Validators.required]
          });
          this.fourthFormGroup = this._formBuilder.group({
            fourthCtrl: ['', Validators.required]
         }); */
    };
    JobappFormCreateComponent.prototype.onAddJobapp = function () {
        alert('Congratulation!, you have submitted your application successfully. View the submitted information below');
        var jobapp = {
            firstName: this.enteredFirstName,
            lastName: this.enteredLastName,
            telephone: this.enteredTelephone,
            email: this.enteredEmail,
            address: this.enteredAddress,
            address2: this.enteredAddress2,
            city: this.enteredCity,
            state: this.enteredState,
            zipcode: this.enteredZipcode,
            job: this.enteredJob,
            company: this.enteredCompany,
            location: this.enteredLocation,
            fromDate: this.enteredFromDate,
            toDate: this.enteredToDate,
            role: this.enteredRole,
            /*job2: this.enteredJob2,
            company2: this.enteredCompany,
            location2: this.enteredLocation,
            fromDate2: this.enteredFromDate,
            toDate2: this.enteredToDate,
            role2: this.enteredRole,
            job3: this.enteredJob,
            company3: this.enteredCompany,
            location3: this.enteredLocation,
            fromDate3: this.enteredFromDate,
            toDate3: this.enteredToDate,
            role3: this.enteredRole, */
            schoolname: this.enteredSchool,
            educationlevel: this.enteredEducationlevel,
            startdate: this.enteredStartDate,
            enddate: this.enteredEndDate,
            major: this.enteredMajor,
            cumulativegpa: this.enteredCumulativegpa,
            skills: this.enteredSkills,
            accomplishments: this.enteredAccomplishments,
            sponsership: this.enteredSponsership,
            acknowledgment: this.enteredAcknowledgment,
            gender: this.enteredGender,
            hispanic: this.enteredHispanic,
            veteran: this.enteredVeteran,
            disability: this.enteredDisability
        };
        this.jobappCreated.emit(jobapp);
        if (this.enteredJob == jobapp.job) {
            this.rank++;
        }
        if (this.enteredEducationlevel == "Bachelors") {
            this.rank++;
        }
        if (this.enteredEducationlevel == "Doctorate") {
            this.rank++;
        }
        if (this.enteredEducationlevel == "Masters") {
            this.rank++;
        }
        /*
           // this.enteredCumulativegpa = +this.enteredCumulativegpa
        
            if(this.gpa_check <= isNumeric(this.enteredCumulativegpa) )
            {
              this.rank++;
            }
            */
        if (this.enteredSkills == jobapp.skills) {
            this.rank++;
        }
        if (this.enteredAccomplishments == jobapp.accomplishments) {
            this.rank++;
        }
        if (this.enteredSponsership == "No-1") {
            this.rank++;
        }
        if (this.enteredGender == "Female-1") {
            this.rank++;
        }
        if (this.enteredHispanic == "Yes-0") {
            this.rank++;
        }
        if (this.enteredVeteran == "Recently separated veteran-1") {
            this.rank++;
        }
        if (this.enteredVeteran == "Disabled veteran-2") {
            this.rank++;
        }
        if (this.enteredVeteran == "I am not a protected veteran-3") {
            this.rank++;
        }
        //update application that hr can view application form
        var req1 = {
            candidate_num: this.can_id,
            job_num: this.job_id,
            firstName: jobapp.firstName,
            lastName: jobapp.lastName,
            telephone: jobapp.telephone,
            email: jobapp.email,
            address: jobapp.address,
            address2: jobapp.address2,
            city: jobapp.city,
            state: jobapp.state,
            zipcode: jobapp.zipcode,
            job: jobapp.job,
            company: jobapp.company,
            location: jobapp.location,
            fromDate: jobapp.fromDate,
            toDate: jobapp.toDate,
            role: jobapp.role,
            schoolname: jobapp.schoolname,
            educationlevel: jobapp.educationlevel,
            startdate: jobapp.startdate,
            enddate: jobapp.enddate,
            major: jobapp.major,
            cumulativegpa: jobapp.cumulativegpa,
            skills: jobapp.skills,
            accomplishments: jobapp.accomplishments,
            sponsership: jobapp.sponsership,
            acknowledgment: jobapp.acknowledgment,
            gender: jobapp.gender,
            hispanic: jobapp.hispanic,
            veteran: jobapp.veteran,
            disability: jobapp.disability
        };
        this.http
            .post("/jobappform/apply/application", req1)
            .subscribe(function (response) {
            console.log("res is :", response);
        });
        // to save as job apply history
        var today_date = new Date();
        var date = today_date.getFullYear() + '-' + (today_date.getMonth() + 1) + '-' + today_date.getDate();
        var reqs = {
            candidate_id: this.can_id,
            job_id: this.job_id,
            job_title: this.job_title,
            job_company: this.job_company,
            job_type: this.job_type,
            job_industryType: this.job_industryType,
            job_description: this.job_company,
            job_location: this.job_location,
            job_expirationDate: this.job_expirationDate,
            applyDate: date
        };
        // console.log(reqs);
        this.http
            .post("/jobappform/applied_job", reqs)
            .subscribe(function (response) {
            console.log("res is :", response);
        });
        //notify the hr that new candidate info
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        console.log("rank is: ", this.rank);
        var can = {
            candidate_id: this.can_id,
            rank: this.rank,
            applyDate: date,
            status: "No"
        };
        var req = { job_id: this.job_id, candidate: can };
        console.log("req is:", req);
        this.http
            .post("/jobappform/job", req)
            .subscribe(function (response) {
            console.log("res is :", response);
        });
    };
    JobappFormCreateComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
        { type: _jobspage_job_service__WEBPACK_IMPORTED_MODULE_7__["JobService"] },
        { type: src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_9__["TokenStorageService"] },
        { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], JobappFormCreateComponent.prototype, "jobappCreated", void 0);
    JobappFormCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-jobapp-form-create',
            template: __webpack_require__(/*! raw-loader!./jobapp-form-create.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/employe-components/jobapp-form/jobapp-form-create/jobapp-form-create.component.html"),
            providers: [{
                    provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_3__["STEPPER_GLOBAL_OPTIONS"], useValue: { showError: true }
                }],
            styles: [__webpack_require__(/*! ./jobapp-form-create.component.css */ "./src/app/components/employe-components/jobapp-form/jobapp-form-create/jobapp-form-create.component.css")]
        })
    ], JobappFormCreateComponent);
    return JobappFormCreateComponent;
}());



/***/ }),

/***/ "./src/app/components/employe-components/jobapp-form/jobapp-form-review/jobapp-form-review.component.css":
/*!***************************************************************************************************************!*\
  !*** ./src/app/components/employe-components/jobapp-form/jobapp-form-review/jobapp-form-review.component.css ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW1wbG95ZS1jb21wb25lbnRzL2pvYmFwcC1mb3JtL2pvYmFwcC1mb3JtLXJldmlldy9qb2JhcHAtZm9ybS1yZXZpZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/employe-components/jobapp-form/jobapp-form-review/jobapp-form-review.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/components/employe-components/jobapp-form/jobapp-form-review/jobapp-form-review.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: JobappFormReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobappFormReviewComponent", function() { return JobappFormReviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var JobappFormReviewComponent = /** @class */ (function () {
    function JobappFormReviewComponent() {
        this.jobapps = [];
    }
    JobappFormReviewComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], JobappFormReviewComponent.prototype, "jobapps", void 0);
    JobappFormReviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-jobapp-form-review',
            template: __webpack_require__(/*! raw-loader!./jobapp-form-review.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/employe-components/jobapp-form/jobapp-form-review/jobapp-form-review.component.html"),
            styles: [__webpack_require__(/*! ./jobapp-form-review.component.css */ "./src/app/components/employe-components/jobapp-form/jobapp-form-review/jobapp-form-review.component.css")]
        })
    ], JobappFormReviewComponent);
    return JobappFormReviewComponent;
}());



/***/ }),

/***/ "./src/app/components/employe-components/jobapp-form/jobapp-form.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/components/employe-components/jobapp-form/jobapp-form.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW1wbG95ZS1jb21wb25lbnRzL2pvYmFwcC1mb3JtL2pvYmFwcC1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/employe-components/jobapp-form/jobapp-form.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/employe-components/jobapp-form/jobapp-form.component.ts ***!
  \************************************************************************************/
/*! exports provided: JobappFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobappFormComponent", function() { return JobappFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/token-storage.service */ "./src/app/services/token-storage.service.ts");





var JobappFormComponent = /** @class */ (function () {
    function JobappFormComponent(UserService, AuthService, TokenStorageService) {
        this.UserService = UserService;
        this.AuthService = AuthService;
        this.TokenStorageService = TokenStorageService;
        this.storedJobapps = [];
    }
    JobappFormComponent.prototype.onJobappAdded = function (jobapp) {
        this.storedJobapps.push(jobapp);
    };
    JobappFormComponent.prototype.ngOnInit = function () {
        var user = this.TokenStorageService.getUser();
        this.userId = user.id;
        console.log("user_id is: " + this.userId);
    };
    JobappFormComponent.ctorParameters = function () { return [
        { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_4__["TokenStorageService"] }
    ]; };
    JobappFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-jobapp-form',
            template: __webpack_require__(/*! raw-loader!./jobapp-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/employe-components/jobapp-form/jobapp-form.component.html"),
            styles: [__webpack_require__(/*! ./jobapp-form.component.css */ "./src/app/components/employe-components/jobapp-form/jobapp-form.component.css")]
        })
    ], JobappFormComponent);
    return JobappFormComponent;
}());



/***/ }),

/***/ "./src/app/components/employe-components/jobspage/job.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/employe-components/jobspage/job.service.ts ***!
  \***********************************************************************/
/*! exports provided: JobService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobService", function() { return JobService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var JobService = /** @class */ (function () {
    function JobService(http, httpHandler, router) {
        this.http = http;
        this.httpHandler = httpHandler;
        this.router = router;
    }
    JobService.prototype.getJobId = function () {
        return this.job_id;
    };
    JobService.prototype.setJobId = function (id) {
        this.job_id = id;
    };
    JobService.prototype.getJobExpirationDate = function () {
        return this.job_expirationDate;
    };
    JobService.prototype.setJobExpirationDate = function (expirationDate) {
        this.job_expirationDate = expirationDate;
    };
    JobService.prototype.getJobTitle = function () {
        return this.job_title;
    };
    JobService.prototype.setJobTitle = function (title) {
        this.job_title = title;
    };
    JobService.prototype.getJobType = function () {
        return this.job_type;
    };
    JobService.prototype.setJobType = function (jobType) {
        this.job_type = jobType;
    };
    JobService.prototype.getJobCompany = function () {
        return this.job_company;
    };
    JobService.prototype.setJobCompany = function (company) {
        this.job_company = company;
    };
    JobService.prototype.getJobIndustryType = function () {
        return this.job_industryType;
    };
    JobService.prototype.setJobIndustryType = function (industryType) {
        this.job_industryType = industryType;
    };
    JobService.prototype.getJobDescription = function () {
        return this.job_description;
    };
    JobService.prototype.setJobDescription = function (description) {
        this.job_description = description;
    };
    JobService.prototype.getJobLocation = function () {
        return this.job_location;
    };
    JobService.prototype.setJobLocation = function (location) {
        this.job_location = location;
    };
    JobService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHandler"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    JobService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: "root" })
    ], JobService);
    return JobService;
}());



/***/ }),

/***/ "./src/app/components/employe-components/jobspage/jobspage-popup/jobspage-popup.component.css":
/*!****************************************************************************************************!*\
  !*** ./src/app/components/employe-components/jobspage/jobspage-popup/jobspage-popup.component.css ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gray {\n    background-color: #DEDEDE;\n}\n\n.red {\n    background-color:#EB5181;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lbXBsb3llLWNvbXBvbmVudHMvam9ic3BhZ2Uvam9ic3BhZ2UtcG9wdXAvam9ic3BhZ2UtcG9wdXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW1wbG95ZS1jb21wb25lbnRzL2pvYnNwYWdlL2pvYnNwYWdlLXBvcHVwL2pvYnNwYWdlLXBvcHVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JheSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RFREVERTtcbn1cblxuLnJlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojRUI1MTgxO1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/employe-components/jobspage/jobspage-popup/jobspage-popup.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/employe-components/jobspage/jobspage-popup/jobspage-popup.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: JobspagePopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobspagePopupComponent", function() { return JobspagePopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _job_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../job.service */ "./src/app/components/employe-components/jobspage/job.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/token-storage.service */ "./src/app/services/token-storage.service.ts");








var JobspagePopupComponent = /** @class */ (function () {
    function JobspagePopupComponent(dialogRef, UserService, TokenStorageService, jobService, http, router, data) {
        this.dialogRef = dialogRef;
        this.UserService = UserService;
        this.TokenStorageService = TokenStorageService;
        this.jobService = jobService;
        this.http = http;
        this.router = router;
        this.data = data;
        this.status = 'Enable';
        this.toggle = true;
        //userId: string;
        this.can_id = "";
        this.can_email = "";
        this.job_id = "";
        this.job_title = "";
        this.job_company = "";
        this.job_type = "";
        this.job_industryType = "";
        this.job_description = "";
        this.job_location = "";
        this.job_expirationDate = "";
    }
    JobspagePopupComponent.prototype.ngOnInit = function () {
        this.select = false;
        var user = this.TokenStorageService.getUser();
        this.can_id = user.id;
        // by sharmi for getting the user email --> still not working
    };
    JobspagePopupComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    JobspagePopupComponent.prototype.addFav = function () {
        //write fuction to change the icon to filled icon, then add the job id and details in candidate's fav list
        this.select = !this.select;
        this.enableDisableRule();
        var arr = {
            job_id: this.data.jobId,
            job_title: this.data.jobTitle,
            job_type: this.data.jobType,
            job_location: this.data.location,
            job_company: this.data.company,
            job_expirationDate: this.data.expirationDate,
        };
        if (this.select == true) {
            var reqs = {
                can_id: this.can_id,
                job_id_array: arr,
            };
            this.http
                .post("/jobappform/fav_job", reqs)
                .subscribe(function (response) {
                console.log("res is :", response);
            });
        }
        if (this.select == false) {
            var req = {
                can: this.can_id,
                job_id: this.data.jobId,
            };
            this.http
                .post("/jobappform/delete_favjob", req)
                .subscribe(function (postData) {
                // console.log("delete one saved job");
            });
        }
    };
    JobspagePopupComponent.prototype.enableDisableRule = function () {
        this.toggle = !this.toggle;
        this.status = this.toggle ? 'Enable' : 'Disable';
    };
    JobspagePopupComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
        { type: src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_7__["TokenStorageService"] },
        { type: _job_service__WEBPACK_IMPORTED_MODULE_5__["JobService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
    ]; };
    JobspagePopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-jobspage-popup',
            template: __webpack_require__(/*! raw-loader!./jobspage-popup.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/employe-components/jobspage/jobspage-popup/jobspage-popup.component.html"),
            styles: [__webpack_require__(/*! ./jobspage-popup.component.css */ "./src/app/components/employe-components/jobspage/jobspage-popup/jobspage-popup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
    ], JobspagePopupComponent);
    return JobspagePopupComponent;
}());



/***/ }),

/***/ "./src/app/components/employe-components/jobspage/jobspage.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/employe-components/jobspage/jobspage.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-icon {\n  padding: 0 14px;\n}\n\n.example-spacer {\n  flex: 1 1 auto;\n}\n\ntd {\n  padding-right: 8px;\n}\n\n.example-container {\n  width: auto;\n  height: auto;\n  margin: auto;\n  padding: 10px;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n.dialog{\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  margin-top: 40px;\n  }\n\n.example-additional-selection {\n  opacity: 0.75;\n  font-size: 0.75em;\n}\n\nheader{\n  position: fixed;\n  top: 0;\n   z-index: 11;\n  transition: all 250ms ease-in-out;\n}\n\n.main-header{\n  @extend header;\n  &.hidden{\n    opacity: 0;\n  }\n}\n\n.search-block{\n  width: 0%;\n  right: 0;\n  @extend header;\n  background: #fff;\n  &.active{\n    width: 100%;\n  }\n  .search-control{\n    flex: 1;\n    font-size: 1rem;\n    border: 0;\n    outline: none;\n    padding-left: 10px;\n    width: 100%;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lbXBsb3llLWNvbXBvbmVudHMvam9ic3BhZ2Uvam9ic3BhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCOztBQUVGO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixNQUFNO0dBQ0wsV0FBVztFQUNaLGlDQUFpQztBQUNuQzs7QUFDQTtFQUNFLGNBQWM7RUFDZDtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQUNBO0VBQ0UsU0FBUztFQUNULFFBQVE7RUFDUixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSxPQUFPO0lBQ1AsZUFBZTtJQUNmLFNBQVM7SUFDVCxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFdBQVc7RUFDYjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9lbXBsb3llLWNvbXBvbmVudHMvam9ic3BhZ2Uvam9ic3BhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWljb24ge1xuICBwYWRkaW5nOiAwIDE0cHg7XG59XG5cbi5leGFtcGxlLXNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG50ZCB7XG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcbn1cblxuLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5kaWFsb2d7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICB9XG5cbi5leGFtcGxlLWFkZGl0aW9uYWwtc2VsZWN0aW9uIHtcbiAgb3BhY2l0eTogMC43NTtcbiAgZm9udC1zaXplOiAwLjc1ZW07XG59XG5cbmhlYWRlcntcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gICB6LWluZGV4OiAxMTtcbiAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2UtaW4tb3V0O1xufVxuLm1haW4taGVhZGVye1xuICBAZXh0ZW5kIGhlYWRlcjtcbiAgJi5oaWRkZW57XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuLnNlYXJjaC1ibG9ja3tcbiAgd2lkdGg6IDAlO1xuICByaWdodDogMDtcbiAgQGV4dGVuZCBoZWFkZXI7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gICYuYWN0aXZle1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5zZWFyY2gtY29udHJvbHtcbiAgICBmbGV4OiAxO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBib3JkZXI6IDA7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/employe-components/jobspage/jobspage.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/employe-components/jobspage/jobspage.component.ts ***!
  \******************************************************************************/
/*! exports provided: JobspageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobspageComponent", function() { return JobspageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _jobspage_popup_jobspage_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./jobspage-popup/jobspage-popup.component */ "./src/app/components/employe-components/jobspage/jobspage-popup/jobspage-popup.component.ts");
/* harmony import */ var _job_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./job.service */ "./src/app/components/employe-components/jobspage/job.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/token-storage.service */ "./src/app/services/token-storage.service.ts");










var JobspageComponent = /** @class */ (function () {
    function JobspageComponent(TokenStorageService, http, jobService, route, dialog, UserService, AuthService) {
        this.TokenStorageService = TokenStorageService;
        this.http = http;
        this.jobService = jobService;
        this.route = route;
        this.dialog = dialog;
        this.UserService = UserService;
        this.AuthService = AuthService;
        this.jobtypes = [
            { value: 'Stage', viewValue: 'Stage' },
            { value: 'Full Time', viewValue: 'Full Time' },
            { value: 'Part Time', viewValue: 'Part Time' }
        ];
        this.locations = [
            { value: 'Tunis', viewValue: 'Tunis' },
            { value: 'Ariana', viewValue: 'Ariana' },
            { value: 'Nabeul', viewValue: 'Nabeul' },
            { value: 'Sousse', viewValue: 'Sousse' },
            { value: 'kairouan', viewValue: 'Kairouan' },
            { value: 'Sfax', viewValue: 'Sfax' },
            { value: 'Gabes', viewValue: 'Gabes' },
        ];
        this.industries = [
            { value: 'Informatique', viewValue: 'Informatique' },
            { value: 'Finance', viewValue: 'Finance' },
            { value: 'Marketing', viewValue: 'Marketing' },
            { value: 'Government/Education', viewValue: 'Government/Education' },
            { value: 'Consulting', viewValue: 'Consulting' },
            { value: 'Transportation/Logistics', viewValue: 'Transportation/Logistics' },
            { value: 'Others', viewValue: 'Others' }
        ];
        this.enteredjobTitle = "";
        this.enteredjobType = "";
        this.enteredlocation = "";
        this.enteredindustryType = "";
        this.enteredcompany = "";
        this.enteredjobDescription = "";
    }
    JobspageComponent.prototype.ngOnInit = function () {
        var user = this.TokenStorageService.getUser();
        this.userId = user.id;
        console.log("user_id is: " + this.userId);
        this.searchJob(null);
    };
    JobspageComponent.prototype.searchJob = function (form) {
        var _this = this;
        //console.log(this.enteredjobTitle)
        var req = {
            jobTitle: this.enteredjobTitle,
            jobType: this.enteredjobType,
            location: this.enteredlocation,
            industryType: this.enteredindustryType
        };
        console.log("front end :", req);
        this.http
            .post("/searchjob", req)
            .subscribe(function (postData) {
            _this.job = postData;
            console.log(_this.job);
        });
        console.log("the search function will return the job_id, so you can use it in the application form submit");
    };
    JobspageComponent.prototype.applyJob = function (j) {
        // console.log("j: "+ j);
        this.jobService.setJobId(j.job_id);
        this.jobService.setJobTitle(j.title);
        this.jobService.setJobCompany(j.company);
        this.jobService.setJobType(j.jobType);
        this.jobService.setJobLocation(j.location);
        this.jobService.setJobDescription(j.description);
        this.jobService.setJobIndustryType(j.industryType);
        this.jobService.setJobExpirationDate(j.expirationDate);
    };
    JobspageComponent.prototype.openDialog = function (j) {
        var dialogRef = this.dialog.open(_jobspage_popup_jobspage_popup_component__WEBPACK_IMPORTED_MODULE_5__["JobspagePopupComponent"], {
            width: 'auto',
            height: 'auto',
            data: {
                jobId: j.job_id,
                jobTitle: j.title,
                company: j.company,
                jobType: j.jobType,
                location: j.location,
                industryType: j.industryType,
                jobDescription: j.jobDescription,
                expirationDate: j.expirationDate
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            //this.jobTitle = result;
        });
    };
    JobspageComponent.prototype.handleError = function (error) {
        var errMsg;
        if (error.error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpErrorResponse"]) {
            errMsg = error.error.message;
        }
        else {
            errMsg = error.status + " - " + (error.statusText || '') + " " + error.message;
        }
        return (errMsg);
    };
    JobspageComponent.ctorParameters = function () { return [
        { type: src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_9__["TokenStorageService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _job_service__WEBPACK_IMPORTED_MODULE_6__["JobService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
        { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] }
    ]; };
    JobspageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-jobspage',
            template: __webpack_require__(/*! raw-loader!./jobspage.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/employe-components/jobspage/jobspage.component.html"),
            styles: [__webpack_require__(/*! ./jobspage.component.css */ "./src/app/components/employe-components/jobspage/jobspage.component.css")]
        })
    ], JobspageComponent);
    return JobspageComponent;
}());



/***/ }),

/***/ "./src/app/components/employe-components/myfavjob/myfavjob-popup/myfavjob-popup.component.css":
/*!****************************************************************************************************!*\
  !*** ./src/app/components/employe-components/myfavjob/myfavjob-popup/myfavjob-popup.component.css ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW1wbG95ZS1jb21wb25lbnRzL215ZmF2am9iL215ZmF2am9iLXBvcHVwL215ZmF2am9iLXBvcHVwLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/employe-components/myfavjob/myfavjob-popup/myfavjob-popup.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/employe-components/myfavjob/myfavjob-popup/myfavjob-popup.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: MyfavjobPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyfavjobPopupComponent", function() { return MyfavjobPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");






var MyfavjobPopupComponent = /** @class */ (function () {
    function MyfavjobPopupComponent(dialogRef, UserService, http, router, data) {
        this.dialogRef = dialogRef;
        this.UserService = UserService;
        this.http = http;
        this.router = router;
        this.data = data;
    }
    MyfavjobPopupComponent.prototype.ngOnInit = function () {
        this.userId = this.UserService.getUser();
        console.log("user_id is: " + this.userId);
        this.checkJobInfo();
    };
    MyfavjobPopupComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    MyfavjobPopupComponent.prototype.checkJobInfo = function () {
        var _this = this;
        var req = {
            job_id: this.data.job_id,
        };
        this.http
            .post("/jobappform/apply/fav_jobinfo", req)
            .subscribe(function (postData) {
            _this.jobInfo = postData;
            _this.title = _this.jobInfo.title;
            _this.company = _this.jobInfo.company;
            _this.jobType = _this.jobInfo.jobType;
            _this.expirationDate = _this.jobInfo.expirationDate;
            _this.location = _this.jobInfo.location;
            _this.industryType = _this.jobInfo.industryType;
            _this.hr_id = _this.jobInfo.hr_id;
            _this.jobDescription = _this.jobInfo.jobDescription;
            // console.log(this.jobInfo);
            // console.log(this.jobInfo.jobDescription);
        });
    };
    MyfavjobPopupComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
    ]; };
    MyfavjobPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-myfavjob-popup',
            template: __webpack_require__(/*! raw-loader!./myfavjob-popup.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/employe-components/myfavjob/myfavjob-popup/myfavjob-popup.component.html"),
            styles: [__webpack_require__(/*! ./myfavjob-popup.component.css */ "./src/app/components/employe-components/myfavjob/myfavjob-popup/myfavjob-popup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
    ], MyfavjobPopupComponent);
    return MyfavjobPopupComponent;
}());



/***/ }),

/***/ "./src/app/components/employe-components/myfavjob/myfavjob.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/employe-components/myfavjob/myfavjob.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-margin {\n  margin: 0 10px;\n}\n\n.example-container {\n  width: auto;\n  height: auto;\n  margin: auto;\n  padding: 10px;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n.example-spacer {\n  flex: 1 1 auto;\n}\n\n.container-fluid  {\n  min-width: 992px;\n  height: auto;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nheader{\n  position: fixed;\n  top: 0;\n   z-index: 11;\n  transition: all 250ms ease-in-out;\n}\n\n.main-header{\n  @extend header;\n  &.hidden{\n    opacity: 0;\n  }\n}\n\n.search-block{\n  width: 0%;\n  right: 0;\n  @extend header;\n  background: #fff;\n  &.active{\n    width: 100%;\n  }\n  .search-control{\n    flex: 1;\n    font-size: 1rem;\n    border: 0;\n    outline: none;\n    padding-left: 10px;\n    width: 100%;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lbXBsb3llLWNvbXBvbmVudHMvbXlmYXZqb2IvbXlmYXZqb2IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUdBO0VBQ0UsZUFBZTtFQUNmLE1BQU07R0FDTCxXQUFXO0VBQ1osaUNBQWlDO0FBQ25DOztBQUNBO0VBQ0UsY0FBYztFQUNkO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBQ0E7RUFDRSxTQUFTO0VBQ1QsUUFBUTtFQUNSLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEI7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLE9BQU87SUFDUCxlQUFlO0lBQ2YsU0FBUztJQUNULGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsV0FBVztFQUNiO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2VtcGxveWUtY29tcG9uZW50cy9teWZhdmpvYi9teWZhdmpvYi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtbWFyZ2luIHtcbiAgbWFyZ2luOiAwIDEwcHg7XG59XG5cbi5leGFtcGxlLWNvbnRhaW5lciB7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZXhhbXBsZS1zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLmNvbnRhaW5lci1mbHVpZCAge1xuICBtaW4td2lkdGg6IDk5MnB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cblxuaGVhZGVye1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgIHotaW5kZXg6IDExO1xuICB0cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZS1pbi1vdXQ7XG59XG4ubWFpbi1oZWFkZXJ7XG4gIEBleHRlbmQgaGVhZGVyO1xuICAmLmhpZGRlbntcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG4uc2VhcmNoLWJsb2Nre1xuICB3aWR0aDogMCU7XG4gIHJpZ2h0OiAwO1xuICBAZXh0ZW5kIGhlYWRlcjtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgJi5hY3RpdmV7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnNlYXJjaC1jb250cm9se1xuICAgIGZsZXg6IDE7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGJvcmRlcjogMDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/employe-components/myfavjob/myfavjob.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/employe-components/myfavjob/myfavjob.component.ts ***!
  \******************************************************************************/
/*! exports provided: MyfavjobComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyfavjobComponent", function() { return MyfavjobComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _myfavjob_popup_myfavjob_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./myfavjob-popup/myfavjob-popup.component */ "./src/app/components/employe-components/myfavjob/myfavjob-popup/myfavjob-popup.component.ts");
/* harmony import */ var _jobspage_job_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../jobspage/job.service */ "./src/app/components/employe-components/jobspage/job.service.ts");
/* harmony import */ var src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/token-storage.service */ "./src/app/services/token-storage.service.ts");








var MyfavjobComponent = /** @class */ (function () {
    function MyfavjobComponent(http, TokenStorageService, jobService, route, dialog) {
        this.http = http;
        this.TokenStorageService = TokenStorageService;
        this.jobService = jobService;
        this.route = route;
        this.dialog = dialog;
        this.checked = false;
        this.indeterminate = false;
        this.labelPosition = 'after';
        this.disabled = false;
    }
    MyfavjobComponent.prototype.ngOnInit = function () {
        var user = this.TokenStorageService.getUser();
        this.userId = user.id;
        console.log("user_id is: " + this.userId);
        this.searchFavJob();
    };
    MyfavjobComponent.prototype.searchFavJob = function () {
        var _this = this;
        var req = {
            can: this.userId,
        };
        this.http
            .post("/jobappform/apply/fav_job", req)
            .subscribe(function (postData) {
            _this.searchResault = postData;
            _this.id_array = _this.searchResault[0].job_id_array;
            console.log(_this.searchResault);
            console.log(_this.id_array);
        });
        // console.log("id: " + this.id_array);
    };
    //sharmi test
    MyfavjobComponent.prototype.applyJob = function (j) {
        // console.log("j: "+ j);
        this.jobService.setJobId(j.job_id);
        this.jobService.setJobTitle(j.job_title);
        this.jobService.setJobCompany(j.job_company);
        this.jobService.setJobType(j.job_type);
        this.jobService.setJobLocation(j.job_location);
        this.jobService.setJobDescription(j.job_description);
        this.jobService.setJobIndustryType(j.job_industryType);
        this.jobService.setJobExpirationDate(j.job_expirationDate);
    }; //sharmi
    MyfavjobComponent.prototype.openDialog = function (j) {
        var dialogRef = this.dialog.open(_myfavjob_popup_myfavjob_popup_component__WEBPACK_IMPORTED_MODULE_5__["MyfavjobPopupComponent"], {
            width: 'auto',
            height: 'auto',
            data: {
                job_id: j.job_id,
                jobTitle: j.job_title,
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    MyfavjobComponent.prototype.delete = function (j) {
        var req = {
            can: this.userId,
            job_id: j.job_id,
        };
        this.http
            .post("/jobappform/delete_favjob", req)
            .subscribe(function (postData) {
            // this.searchResault = postData;
            // console.log(this.id_array);
            console.log("delete one saved job");
        });
    };
    MyfavjobComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_7__["TokenStorageService"] },
        { type: _jobspage_job_service__WEBPACK_IMPORTED_MODULE_6__["JobService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
    ]; };
    MyfavjobComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-myfavjob',
            template: __webpack_require__(/*! raw-loader!./myfavjob.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/employe-components/myfavjob/myfavjob.component.html"),
            styles: [__webpack_require__(/*! ./myfavjob.component.css */ "./src/app/components/employe-components/myfavjob/myfavjob.component.css")]
        })
    ], MyfavjobComponent);
    return MyfavjobComponent;
}());



/***/ }),

/***/ "./src/app/components/employe-components/offres-actuelles/offres-actuelles.component.css":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/employe-components/offres-actuelles/offres-actuelles.component.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW1wbG95ZS1jb21wb25lbnRzL29mZnJlcy1hY3R1ZWxsZXMvb2ZmcmVzLWFjdHVlbGxlcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/employe-components/offres-actuelles/offres-actuelles.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/employe-components/offres-actuelles/offres-actuelles.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: OffresActuellesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffresActuellesComponent", function() { return OffresActuellesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/employee.service */ "./src/app/services/employee.service.ts");



var OffresActuellesComponent = /** @class */ (function () {
    function OffresActuellesComponent(employeeService) {
        this.employeeService = employeeService;
    }
    OffresActuellesComponent.prototype.ngOnInit = function () {
        this.resetForm();
        this.refreshEmployeeList();
    };
    OffresActuellesComponent.prototype.resetForm = function (form) {
        if (form)
            form.reset();
        this.employeeService.selectedEmployee = {
            _id: "",
            name: "",
            position: "",
            office: "",
            salary: null
        };
    };
    OffresActuellesComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (form.value._id == "") {
            this.employeeService.postEmployee(form.value).subscribe(function (res) {
                _this.resetForm(form);
                _this.refreshEmployeeList();
                M.toast({ html: 'Saved successfully', classes: 'rounded' });
            });
        }
        else {
            this.employeeService.putEmployee(form.value).subscribe(function (res) {
                _this.resetForm(form);
                _this.refreshEmployeeList();
                M.toast({ html: 'Updated successfully', classes: 'rounded' });
            });
        }
    };
    OffresActuellesComponent.prototype.refreshEmployeeList = function () {
        var _this = this;
        this.employeeService.getEmployeeList().subscribe(function (res) {
            _this.employeeService.employees = res;
        });
    };
    OffresActuellesComponent.prototype.onEdit = function (emp) {
        this.employeeService.selectedEmployee = emp;
    };
    OffresActuellesComponent.prototype.onDelete = function (_id, form) {
        var _this = this;
        if (confirm('Are you sure to delete this record ?') == true) {
            this.employeeService.deleteEmployee(_id).subscribe(function (res) {
                _this.refreshEmployeeList();
                _this.resetForm(form);
                M.toast({ html: 'Deleted successfully', classes: 'rounded' });
            });
        }
    };
    OffresActuellesComponent.ctorParameters = function () { return [
        { type: src_app_services_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"] }
    ]; };
    OffresActuellesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-offres-actuelles',
            template: __webpack_require__(/*! raw-loader!./offres-actuelles.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/employe-components/offres-actuelles/offres-actuelles.component.html"),
            styles: [__webpack_require__(/*! ./offres-actuelles.component.css */ "./src/app/components/employe-components/offres-actuelles/offres-actuelles.component.css")]
        })
    ], OffresActuellesComponent);
    return OffresActuellesComponent;
}());



/***/ }),

/***/ "./src/app/components/employe-components/update-info-employe/update-info-employe.component.css":
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/employe-components/update-info-employe/update-info-employe.component.css ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');\n#ui{\n    background-color: #3f4246;\n    padding: 30px;\n    margin-top: 50px;\n    box-shadow: 0 2px 10px rgba(64,64,64,.7);\n    border-radius: 12px 12px 12px 12px;\n}\n#ui label{\n    color : #fff;\n    font-family: 'Jost', sans-serif;\n    font-size: 16px;\n}\nh3 {\n    margin-bottom: 10px;\n    color : #fff;\n    font-family: 'Jost', sans-serif;\n    font-weight: 500;\n    line-height: 1.1;\n    font-size: 24px;\n}\n.btn{\n    background-color: #4ECDC4;\n   \n    margin-left: 28%;\n    top:80%;\n    width: 300px;\n    height: 30px;\n    border-radius: 5px 5px;\n    color:white;\n    font-family: 'Montserrat', sans-serif;\n    font-size: 15px;\n}\ninput{\n    color : black;\n    font-family: 'Jost', sans-serif;\n    font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lbXBsb3llLWNvbXBvbmVudHMvdXBkYXRlLWluZm8tZW1wbG95ZS91cGRhdGUtaW5mby1lbXBsb3llLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHlFQUF5RTtBQUN6RTtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLHdDQUF3QztJQUN4QyxrQ0FBa0M7QUFDdEM7QUFFQTtJQUNJLFlBQVk7SUFDWiwrQkFBK0I7SUFDL0IsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWiwrQkFBK0I7SUFDL0IsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBRUE7SUFDSSx5QkFBeUI7O0lBRXpCLGdCQUFnQjtJQUNoQixPQUFPO0lBQ1AsWUFBWTtJQUNaLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLHFDQUFxQztJQUNyQyxlQUFlO0FBQ25CO0FBRUE7SUFDSSxhQUFhO0lBQ2IsK0JBQStCO0lBQy9CLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2VtcGxveWUtY29tcG9uZW50cy91cGRhdGUtaW5mby1lbXBsb3llL3VwZGF0ZS1pbmZvLWVtcGxveWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Sm9zdCZkaXNwbGF5PXN3YXAnKTtcbiN1aXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y0MjQ2O1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoNjQsNjQsNjQsLjcpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHggMTJweCAxMnB4IDEycHg7XG59XG5cbiN1aSBsYWJlbHtcbiAgICBjb2xvciA6ICNmZmY7XG4gICAgZm9udC1mYW1pbHk6ICdKb3N0Jywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG5cbmgzIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGNvbG9yIDogI2ZmZjtcbiAgICBmb250LWZhbWlseTogJ0pvc3QnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuMTtcbiAgICBmb250LXNpemU6IDI0cHg7XG59XG5cbi5idG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRFQ0RDNDtcbiAgIFxuICAgIG1hcmdpbi1sZWZ0OiAyOCU7XG4gICAgdG9wOjgwJTtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHg7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG5cbmlucHV0e1xuICAgIGNvbG9yIDogYmxhY2s7XG4gICAgZm9udC1mYW1pbHk6ICdKb3N0Jywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE2cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/employe-components/update-info-employe/update-info-employe.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/components/employe-components/update-info-employe/update-info-employe.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: UpdateInfoEmployeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateInfoEmployeComponent", function() { return UpdateInfoEmployeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_employe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/employe.service */ "./src/app/services/employe.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var UpdateInfoEmployeComponent = /** @class */ (function () {
    function UpdateInfoEmployeComponent(route, router, employeService) {
        this.route = route;
        this.router = router;
        this.employeService = employeService;
    }
    UpdateInfoEmployeComponent.prototype.onSelectFile = function (event) {
        if (event.target.files.length > 0) {
            var file = event.target.files[0];
            this.fileImage = file;
            // this.f['profile'].setValue(file);
        }
    };
    UpdateInfoEmployeComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_app_services_employe_service__WEBPACK_IMPORTED_MODULE_2__["EmployeService"] }
    ]; };
    UpdateInfoEmployeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update-info-employe',
            template: __webpack_require__(/*! raw-loader!./update-info-employe.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/employe-components/update-info-employe/update-info-employe.component.html"),
            styles: [__webpack_require__(/*! ./update-info-employe.component.css */ "./src/app/components/employe-components/update-info-employe/update-info-employe.component.css")]
        })
    ], UpdateInfoEmployeComponent);
    return UpdateInfoEmployeComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');\n.container{\n    width: 100%;\n    padding-left: 0%;\n    margin-right: 4%;\n    padding-right:0%;\n    }\n.buttonText {\n    text-transform: none;\n    font-size: 20px;\n    font-family: \"montserrat\";\n    border-radius: 8px;\n    background-color: #F29E38;\n    position: relative;\n    width: 100px;\n    height: 35px;\n    margin : 10px 150px;\n    color: #f2f2f2;\n    \n    \n  \n    }\n.landingText {\n      margin-top: 5%;\n      }\n.bf{\n    color:rgb(250, 166, 32)\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpRkFBaUY7QUFDakY7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEI7QUFFQTtJQUNBLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGNBQWM7Ozs7SUFJZDtBQUVBO01BQ0UsY0FBYztNQUNkO0FBQ0o7SUFDRTtFQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUpvc2VmaW4rU2FucyZkaXNwbGF5PXN3YXAnKTtcbi5jb250YWluZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy1sZWZ0OiAwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDQlO1xuICAgIHBhZGRpbmctcmlnaHQ6MCU7XG4gICAgfVxuICBcbiAgICAuYnV0dG9uVGV4dCB7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIm1vbnRzZXJyYXRcIjtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YyOUUzODtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBtYXJnaW4gOiAxMHB4IDE1MHB4O1xuICAgIGNvbG9yOiAjZjJmMmYyO1xuICAgIFxuICAgIFxuICBcbiAgICB9XG4gIFxuICAgIC5sYW5kaW5nVGV4dCB7XG4gICAgICBtYXJnaW4tdG9wOiA1JTtcbiAgICAgIH1cbiAgLmJme1xuICAgIGNvbG9yOnJnYigyNTAsIDE2NiwgMzIpXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-theme {\n    color: #fff;\n    background-color: #F29E38;\n    border-color: #f29e38;\n}\n.btn-block {\n    display: block;\n    width: 100%;\n}\n.checkbox, .radio {\n    position: relative;\n    display: block;\n    margin-left: 20px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n}\nlabel {\n    font-weight: 400;\n}\nbody {\n    color: #797979;\n    background: #eaeaea;\n    font-family: 'Ruda', sans-serif;\n    padding: 0px !important;\n    margin: 0px !important;\n    font-size: 13px;\n}\n.card {\n    height: 300px;\n    width: 380px;\n}\n.btn{\n    font-size: 16px;\n}\ninput {\n    font-size: 16px;\n}\nh3{\n    font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtJQUN6QixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtJQUNuQiwrQkFBK0I7SUFDL0IsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixlQUFlO0FBQ25CO0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksZUFBZTtBQUNuQjtBQUVBO0lBQ0ksZUFBZTtBQUNuQjtBQUVBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tdGhlbWUge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMjlFMzg7XG4gICAgYm9yZGVyLWNvbG9yOiAjZjI5ZTM4O1xufVxuLmJ0bi1ibG9jayB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uY2hlY2tib3gsIC5yYWRpbyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxubGFiZWwge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbmJvZHkge1xuICAgIGNvbG9yOiAjNzk3OTc5O1xuICAgIGJhY2tncm91bmQ6ICNlYWVhZWE7XG4gICAgZm9udC1mYW1pbHk6ICdSdWRhJywgc2Fucy1zZXJpZjtcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLmNhcmQge1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgd2lkdGg6IDM4MHB4O1xufVxuXG4uYnRue1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuaW5wdXQge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuaDN7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/token-storage.service */ "./src/app/services/token-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, tokenStorage, router) {
        this.authService = authService;
        this.tokenStorage = tokenStorage;
        this.router = router;
        this.form = {};
        this.isLoggedIn = false;
        this.isLoginFailed = false;
        this.errorMessage = '';
        this.roles = [];
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.tokenStorage.getToken()) {
            this.isLoggedIn = true;
            this.roles = this.tokenStorage.getUser().roles;
        }
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.authService.login(this.form).subscribe(function (data) {
            _this.tokenStorage.saveToken(data.accessToken);
            _this.tokenStorage.saveUser(data);
            _this.isLoginFailed = false;
            _this.isLoggedIn = true;
            _this.roles = _this.tokenStorage.getUser().roles;
            _this.router.navigate(['/dashboard']);
        }, function (err) {
            _this.errorMessage = err.error.message;
            _this.isLoginFailed = true;
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-theme {\n    color: #fff;\n    background-color: #F29E38;\n    border-color: #F29E38;\n}\n.btn-block {\n    display: block;\n    width: 100%;\n}\n.checkbox, .radio {\n    position: relative;\n    display: block;\n    margin-left: 20px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n}\nlabel {\n    font-weight: 400;\n    font-size: 14px;\n}\ninput {\n    font-size: 16px;\n}\nselect {\n    font-size: 16px;\n}\nbody {\n    color: #797979;\n    background: #eaeaea;\n    font-family: 'Ruda', sans-serif;\n    padding: 0px !important;\n    margin: 0px !important;\n    font-size: 13px;\n}\n.card {\n    height: 400px;\n    width: 490px;\n    margin-left: -20px;\n}\n.btn{\n   \n    font-size: 16px;\n}\n.success{\n    margin-top: 130px;\n    margin-left: 55px;\n    font-family: 'Ruda', sans-serif;\n    font-size: 25px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtJQUN6QixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBRUE7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLCtCQUErQjtJQUMvQix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLGVBQWU7QUFDbkI7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCO0FBRUE7O0lBRUksZUFBZTtBQUNuQjtBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQiwrQkFBK0I7SUFDL0IsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tdGhlbWUge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMjlFMzg7XG4gICAgYm9yZGVyLWNvbG9yOiAjRjI5RTM4O1xufVxuLmJ0bi1ibG9jayB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uY2hlY2tib3gsIC5yYWRpbyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxubGFiZWwge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5pbnB1dCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuc2VsZWN0IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG5ib2R5IHtcbiAgICBjb2xvcjogIzc5Nzk3OTtcbiAgICBiYWNrZ3JvdW5kOiAjZWFlYWVhO1xuICAgIGZvbnQtZmFtaWx5OiAnUnVkYScsIHNhbnMtc2VyaWY7XG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5jYXJkIHtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIHdpZHRoOiA0OTBweDtcbiAgICBtYXJnaW4tbGVmdDogLTIwcHg7XG59XG5cbi5idG57XG4gICBcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5zdWNjZXNze1xuICAgIG1hcmdpbi10b3A6IDEzMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA1NXB4O1xuICAgIGZvbnQtZmFtaWx5OiAnUnVkYScsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, UserService) {
        this.authService = authService;
        this.UserService = UserService;
        this.form = {};
        this.isSuccessful = false;
        this.isSignUpFailed = false;
        this.errorMessage = '';
        this.choices = [
            'HR',
            'Recruiter',
            'Candidate',
        ];
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.authService.register(this.form).subscribe(function (data) {
            console.log(data);
            _this.isSuccessful = true;
            _this.isSignUpFailed = false;
            _this.roles = _this.choice;
        }, function (err) {
            _this.errorMessage = err.error.message;
            _this.isSignUpFailed = true;
        });
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
    ]; };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        })
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Montserrat|Open+Sans|Roboto\");\n/* width */\n::-webkit-scrollbar {\n  width: 3px;\n  z-index: auto;\n  background: rgba(3, 3, 3, 0);\n  cursor: default;\n  position: fixed;\n  top: 0px;\n  left: 207px;\n  height: 657px;\n  opacity: 0;\n}\n/* Track */\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n/* Handle */\n::-webkit-scrollbar-thumb {\n  background: #F29E38;\n}\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n  background: rgba(3, 3, 3, 0);\n}\n.row {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -7.5px;\n  margin-left: -7.5px;\n}\np {\n  font-size: 15px;\n  font-family: \"Montserrat\", sans-serif;\n  color: #fff;\n}\nli ul li a {\n  diplay: block;\n}\nli ul li {\n  margin-left: 15px;\n  margin-bottom: -15px;\n  margin-top: -15px;\n}\nli ul {\n  margin-top: 5px;\n}\n[id^=btn] :checked + ul {\n  display: block;\n}\n.fas fa-caret-down {\n  float: right;\n}\n.p {\n  margin-left: 20%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2UvcGZlL2Zyb250ZW5kL3NyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLGtGQUFBO0FBQ1IsVUFBQTtBQUNBO0VBQ0ksVUFBQTtFQUFZLGFBQUE7RUFBZSw0QkFBQTtFQUE4QixlQUFBO0VBQWlCLGVBQUE7RUFBaUIsUUFBQTtFQUFVLFdBQUE7RUFBYSxhQUFBO0VBQWUsVUFBQTtBQ1NySTtBRE5FLFVBQUE7QUFDQTtFQUNFLG1CQUFBO0FDU0o7QURORSxXQUFBO0FBQ0E7RUFDRSxtQkFBQTtBQ1NKO0FETkUsb0JBQUE7QUFDQTtFQUNFLDRCQUFBO0FDU0o7QURORTtFQUVFLGFBQUE7RUFFQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQ1NKO0FETkE7RUFDRSxlQUFBO0VBQ0EscUNBQUE7RUFDQSxXQUFBO0FDU0Y7QUROQTtFQUNFLGFBQUE7QUNTRjtBRExBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FDUUE7QURMQTtFQUNFLGVBQUE7QUNRRjtBRExBO0VBQ0UsY0FBQTtBQ1FGO0FEQUE7RUFDRSxZQUFBO0FDR0Y7QURBQTtFQUNFLGdCQUFBO0FDR0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdHxPcGVuK1NhbnN8Um9ib3RvJyk7XG4vKiB3aWR0aCAqL1xuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDNweDsgei1pbmRleDogYXV0bzsgYmFja2dyb3VuZDogcmdiYSgzLCAzLCAzLCAwKTsgY3Vyc29yOiBkZWZhdWx0OyBwb3NpdGlvbjogZml4ZWQ7IHRvcDogMHB4OyBsZWZ0OiAyMDdweDsgaGVpZ2h0OiA2NTdweDsgb3BhY2l0eTogMDtcbiAgfVxuICBcbiAgLyogVHJhY2sgKi9cbiAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTsgXG4gIH1cbiAgIFxuICAvKiBIYW5kbGUgKi9cbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZDogI0YyOUUzODsgXG4gIH1cbiAgXG4gIC8qIEhhbmRsZSBvbiBob3ZlciAqL1xuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDMsIDMsIDMsIDApOyBcbiAgfVxuXG4gIC5yb3cge1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLW1zLWZsZXgtd3JhcDogd3JhcDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgbWFyZ2luLXJpZ2h0OiAtNy41cHg7XG4gICAgbWFyZ2luLWxlZnQ6IC03LjVweDtcbn1cblxucHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogI2ZmZjtcbn1cblxubGkgdWwgbGkgYSB7XG4gIGRpcGxheTpibG9jaztcblxufVxuXG5saSB1bCBsaSB7XG5tYXJnaW4tbGVmdDoxNXB4O1xubWFyZ2luLWJvdHRvbTogLTE1cHg7XG5tYXJnaW4tdG9wOiAtMTVweDtcblxufVxubGkgdWwge1xuICBtYXJnaW4tdG9wOiA1cHg7O1xufVxuXG5baWRePWJ0bl0gOmNoZWNrZWQgKyB1bCB7XG4gIGRpc3BsYXk6YmxvY2s7XG59XG5cbmRpdiB1bCBsaSB7XG5cbn1cblxuXG4uZmFzIGZhLWNhcmV0LWRvd257XG4gIGZsb2F0OnJpZ2h0O1xufVxuXG4ucHtcbiAgbWFyZ2luLWxlZnQ6IDIwJTtcbn1cblxuXG5cblxuXG5cblxuXG4gIFxuICAgICAgIiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdHxPcGVuK1NhbnN8Um9ib3RvXCIpO1xuLyogd2lkdGggKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogM3B4O1xuICB6LWluZGV4OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDMsIDMsIDMsIDApO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDIwN3B4O1xuICBoZWlnaHQ6IDY1N3B4O1xuICBvcGFjaXR5OiAwO1xufVxuXG4vKiBUcmFjayAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XG59XG5cbi8qIEhhbmRsZSAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6ICNGMjlFMzg7XG59XG5cbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMywgMywgMywgMCk7XG59XG5cbi5yb3cge1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLW1zLWZsZXgtd3JhcDogd3JhcDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW4tcmlnaHQ6IC03LjVweDtcbiAgbWFyZ2luLWxlZnQ6IC03LjVweDtcbn1cblxucCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogI2ZmZjtcbn1cblxubGkgdWwgbGkgYSB7XG4gIGRpcGxheTogYmxvY2s7XG59XG5cbmxpIHVsIGxpIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IC0xNXB4O1xuICBtYXJnaW4tdG9wOiAtMTVweDtcbn1cblxubGkgdWwge1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbltpZF49YnRuXSA6Y2hlY2tlZCArIHVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5mYXMgZmEtY2FyZXQtZG93biB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLnAge1xuICBtYXJnaW4tbGVmdDogMjAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/token-storage.service */ "./src/app/services/token-storage.service.ts");
/* harmony import */ var src_app_modals_employe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modals/employe */ "./src/app/modals/employe.ts");
/* harmony import */ var src_app_services_employe_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/employe.service */ "./src/app/services/employe.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(tokenStorageService, http, _formBuilder, userService, employeService) {
        this.tokenStorageService = tokenStorageService;
        this.http = http;
        this._formBuilder = _formBuilder;
        this.userService = userService;
        this.employeService = employeService;
        this.isLoggedIn = false;
        this.showAdminBoard = false;
        this.showUserBoard = false;
        this.showModeratorBoard = false;
        this.employe = new src_app_modals_employe__WEBPACK_IMPORTED_MODULE_3__["Employe"]();
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.isLoggedIn = !!this.tokenStorageService.getToken();
        if (this.isLoggedIn) {
            var user = this.tokenStorageService.getUser();
            this.roles = user.roles;
            this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
            this.showUserBoard = this.roles.includes('ROLE_USER');
            this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
            this.username = user.username;
            this.id = user.id;
            this.loadImg();
        }
        this.getEmploye();
        console.log(this.userService.getUserAvatar(this.id));
        if (this.userService.getUserAvatar(this.id) === null)
            this.img = false;
        else
            this.img = true;
    };
    SidebarComponent.prototype.logout = function () {
        this.tokenStorageService.signOut();
    };
    SidebarComponent.prototype.getEmploye = function () {
        var _this = this;
        console.log(this.id);
        this.employeService.getEmploye(this.id).subscribe(function (response) {
            _this.employe = response;
        });
    };
    SidebarComponent.prototype.arrayBufferToBase64 = function (buffer) {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach(function (b) { return binary += String.fromCharCode(b); });
        return window.btoa(binary);
    };
    ;
    SidebarComponent.prototype.loadImg = function () {
        var _this = this;
        var req = {
            userInfo: this.id
        };
        this.http
            .post("/images/load-pic", req)
            .subscribe(function (data) {
            var base64Flag = 'data:image/jpeg;base64,';
            // var imageStr = this.arrayBufferToBase64(data["img"].data.data);
            var imageStr = _this.arrayBufferToBase64(data["img"].data.data);
            _this.pic = base64Flag + imageStr;
        });
    };
    SidebarComponent.ctorParameters = function () { return [
        { type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
        { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
        { type: src_app_services_employe_service__WEBPACK_IMPORTED_MODULE_4__["EmployeService"] }
    ]; };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/components/sidebar/sidebar.component.scss")]
        })
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/components/update-profil/update-profil.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/update-profil/update-profil.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');\n#ui{\n    background-color: #3f4246;\n    padding: 30px;\n    margin-top: 50px;\n    box-shadow: 0 2px 10px rgba(64,64,64,.7);\n    border-radius: 12px 12px 12px 12px;\n}\n#ui label{\n    color : #fff;\n    font-family: 'Jost', sans-serif;\n    font-size: 16px;\n}\nh3 {\n    margin-bottom: 10px;\n    color : #fff;\n    font-family: 'Jost', sans-serif;\n    font-weight: 500;\n    line-height: 1.1;\n    font-size: 24px;\n}\n.btn{\n    background-color: #4ECDC4;\n   \n    margin-left: 28%;\n    top:80%;\n    width: 300px;\n    height: 30px;\n    border-radius: 5px 5px;\n    color:white;\n    font-family: 'Montserrat', sans-serif;\n    font-size: 15px;\n}\ninput{\n    color : black;\n    font-family: 'Jost', sans-serif;\n    font-size: 16px;\n}\nimg{\n    margin-left: 23%;\n}\n.select{\n    margin-left: 25%;\n    margin-top: 10px;\n}\n.btn-photo{\n    background-color: #4ECDC4;\n   \n    margin-left: 30%;\n    top:80%;\n    width: 100px;\n    height: 30px;\n    border-radius: 5px 5px;\n    color:white;\n    font-family: 'Montserrat', sans-serif;\n    font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91cGRhdGUtcHJvZmlsL3VwZGF0ZS1wcm9maWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EseUVBQXlFO0FBQ3pFO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsd0NBQXdDO0lBQ3hDLGtDQUFrQztBQUN0QztBQUVBO0lBQ0ksWUFBWTtJQUNaLCtCQUErQjtJQUMvQixlQUFlO0FBQ25CO0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLCtCQUErQjtJQUMvQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7QUFFQTtJQUNJLHlCQUF5Qjs7SUFFekIsZ0JBQWdCO0lBQ2hCLE9BQU87SUFDUCxZQUFZO0lBQ1osWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gscUNBQXFDO0lBQ3JDLGVBQWU7QUFDbkI7QUFFQTtJQUNJLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0IsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSx5QkFBeUI7O0lBRXpCLGdCQUFnQjtJQUNoQixPQUFPO0lBQ1AsWUFBWTtJQUNaLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLHFDQUFxQztJQUNyQyxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91cGRhdGUtcHJvZmlsL3VwZGF0ZS1wcm9maWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Sm9zdCZkaXNwbGF5PXN3YXAnKTtcbiN1aXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y0MjQ2O1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoNjQsNjQsNjQsLjcpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHggMTJweCAxMnB4IDEycHg7XG59XG5cbiN1aSBsYWJlbHtcbiAgICBjb2xvciA6ICNmZmY7XG4gICAgZm9udC1mYW1pbHk6ICdKb3N0Jywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG5cbmgzIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGNvbG9yIDogI2ZmZjtcbiAgICBmb250LWZhbWlseTogJ0pvc3QnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuMTtcbiAgICBmb250LXNpemU6IDI0cHg7XG59XG5cbi5idG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRFQ0RDNDtcbiAgIFxuICAgIG1hcmdpbi1sZWZ0OiAyOCU7XG4gICAgdG9wOjgwJTtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHg7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG5cbmlucHV0e1xuICAgIGNvbG9yIDogYmxhY2s7XG4gICAgZm9udC1mYW1pbHk6ICdKb3N0Jywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG5cbmltZ3tcbiAgICBtYXJnaW4tbGVmdDogMjMlO1xufVxuXG4uc2VsZWN0e1xuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmJ0bi1waG90b3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEVDREM0O1xuICAgXG4gICAgbWFyZ2luLWxlZnQ6IDMwJTtcbiAgICB0b3A6ODAlO1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweDtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/update-profil/update-profil.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/update-profil/update-profil.component.ts ***!
  \*********************************************************************/
/*! exports provided: UpdateProfilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateProfilComponent", function() { return UpdateProfilComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/token-storage.service */ "./src/app/services/token-storage.service.ts");
/* harmony import */ var src_app_services_employe_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/employe.service */ "./src/app/services/employe.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");







var UpdateProfilComponent = /** @class */ (function () {
    function UpdateProfilComponent(userService, employeService, tokenStorageService, router, _snackbar) {
        this.userService = userService;
        this.employeService = employeService;
        this.tokenStorageService = tokenStorageService;
        this.router = router;
        this._snackbar = _snackbar;
        this.avatar = './assets/img/avatar.jpg';
    }
    UpdateProfilComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getEmploye();
        var user = this.tokenStorageService.getUser();
        this.id = user.id;
        this.userService.getUserAvatar(this.id).subscribe(function (res) {
            _this.avatar = res;
        });
        console.log(this.id);
        this.username = user.username;
        this.email = user.email;
        this.password = user.password;
    };
    UpdateProfilComponent.prototype.getEmploye = function () {
        var _this = this;
        var user = this.tokenStorageService.getUser();
        console.log(user.id);
        this.employeService.getEmploye(user.id).subscribe(function (response) {
            _this.employe = response;
            console.log(_this.employe + "here");
        });
    };
    UpdateProfilComponent.prototype.onSelectFile = function (event) {
        if (event.target.files.length > 0) {
            var file = event.target.files[0];
            this.fileImage = file;
            // this.f['profile'].setValue(file);
            var mimeType = event.target.files[0].type;
            if (mimeType.match(/image\/*/) == null) {
                this.message = "Only images are supported.";
                return;
            }
        }
    };
    UpdateProfilComponent.prototype.processForm = function () {
        var _this = this;
        var user = this.tokenStorageService.getUser();
        this.employeService.setter(this.employe);
        this.employeService.updateEmployee(this.employe, this.fileImage)
            .subscribe(function (employe) {
            _this.userService.toastMessage('Profile has updated successfully');
            _this.userService.getUserAvatar(user.id);
            window.location.reload();
        }, function (error) {
            _this.userService.toastMessage('Please try again');
        });
    };
    UpdateProfilComponent.prototype.updatePassword = function () {
        var _this = this;
        this.userService.updatePassword(this.email, this.oldPassword, this.newPassword).subscribe(function (data) {
            _this.userService.toastMessage('Password changed successfully');
        }, function (error) {
            _this.userService.toastMessage('Failed action');
        });
    };
    UpdateProfilComponent.prototype.updatePhoto = function (employe) {
        this.employeService.setter(employe);
    };
    UpdateProfilComponent.ctorParameters = function () { return [
        { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: src_app_services_employe_service__WEBPACK_IMPORTED_MODULE_4__["EmployeService"] },
        { type: src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }
    ]; };
    UpdateProfilComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update-profil',
            template: __webpack_require__(/*! raw-loader!./update-profil.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/update-profil/update-profil.component.html"),
            styles: [__webpack_require__(/*! ./update-profil.component.css */ "./src/app/components/update-profil/update-profil.component.css")]
        })
    ], UpdateProfilComponent);
    return UpdateProfilComponent;
}());



/***/ }),

/***/ "./src/app/modals/candidate.ts":
/*!*************************************!*\
  !*** ./src/app/modals/candidate.ts ***!
  \*************************************/
/*! exports provided: Candidate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Candidate", function() { return Candidate; });
var Candidate = /** @class */ (function () {
    function Candidate() {
    }
    return Candidate;
}());



/***/ }),

/***/ "./src/app/modals/conge.ts":
/*!*********************************!*\
  !*** ./src/app/modals/conge.ts ***!
  \*********************************/
/*! exports provided: Conge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Conge", function() { return Conge; });
var Conge = /** @class */ (function () {
    function Conge() {
    }
    return Conge;
}());



/***/ }),

/***/ "./src/app/modals/employe.ts":
/*!***********************************!*\
  !*** ./src/app/modals/employe.ts ***!
  \***********************************/
/*! exports provided: Employe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Employe", function() { return Employe; });
var Employe = /** @class */ (function () {
    function Employe() {
    }
    return Employe;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn{\n    background-color: #eee;\n    top: 5%;\n}\n.logo{\n    position: fixed;\n  padding: 0px;\n  margin-left: 50px;\n  background: transparent;\n  overflow: hidden;\n  z-index: 5%;\n  width: 198px;\n\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLE9BQU87QUFDWDtBQUNBO0lBQ0ksZUFBZTtFQUNqQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVk7OztBQUdkIiwiZmlsZSI6InNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgIHRvcDogNSU7XG59XG4ubG9nb3tcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB6LWluZGV4OiA1JTtcbiAgd2lkdGg6IDE5OHB4O1xuXG5cbn0iXX0= */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/token-storage.service */ "./src/app/services/token-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(tokenStorageService, router) {
        this.tokenStorageService = tokenStorageService;
        this.router = router;
        this.isLoggedIn = false;
        this.showAdminBoard = false;
        this.showModeratorBoard = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.isLoggedIn = !!this.tokenStorageService.getToken();
        if (this.isLoggedIn) {
            var user = this.tokenStorageService.getUser();
            this.roles = user.roles;
            this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
            this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
            this.username = user.username;
        }
    };
    NavbarComponent.prototype.logout = function () {
        this.tokenStorageService.signOut();
        this.router.navigate(['/home']);
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        })
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/profil/profil.component.css":
/*!*********************************************!*\
  !*** ./src/app/profil/profil.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbC9wcm9maWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/profil/profil.component.ts":
/*!********************************************!*\
  !*** ./src/app/profil/profil.component.ts ***!
  \********************************************/
/*! exports provided: ProfilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilComponent", function() { return ProfilComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/token-storage.service */ "./src/app/services/token-storage.service.ts");



var ProfilComponent = /** @class */ (function () {
    function ProfilComponent(token) {
        this.token = token;
    }
    ProfilComponent.prototype.ngOnInit = function () {
        this.currentUser = this.token.getUser();
    };
    ProfilComponent.ctorParameters = function () { return [
        { type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"] }
    ]; };
    ProfilComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profil',
            template: __webpack_require__(/*! raw-loader!./profil.component.html */ "./node_modules/raw-loader/index.js!./src/app/profil/profil.component.html"),
            styles: [__webpack_require__(/*! ./profil.component.css */ "./src/app/profil/profil.component.css")]
        })
    ], ProfilComponent);
    return ProfilComponent;
}());



/***/ }),

/***/ "./src/app/public-layout/public-layout.component.css":
/*!***********************************************************!*\
  !*** ./src/app/public-layout/public-layout.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy1sYXlvdXQvcHVibGljLWxheW91dC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/public-layout/public-layout.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/public-layout/public-layout.component.ts ***!
  \**********************************************************/
/*! exports provided: PublicLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicLayoutComponent", function() { return PublicLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PublicLayoutComponent = /** @class */ (function () {
    function PublicLayoutComponent() {
    }
    PublicLayoutComponent.prototype.ngOnInit = function () {
    };
    PublicLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-public-layout',
            template: __webpack_require__(/*! raw-loader!./public-layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/public-layout/public-layout.component.html"),
            styles: [__webpack_require__(/*! ./public-layout.component.css */ "./src/app/public-layout/public-layout.component.css")]
        })
    ], PublicLayoutComponent);
    return PublicLayoutComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AUTH_API = '/api/auth/';
var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.islogin = false;
    }
    AuthService.prototype.getUser = function () {
        return this.id;
    };
    AuthService.prototype.getUserEmail = function () {
        return this.userEmail;
    };
    AuthService.prototype.login = function (credentials) {
        return this.http.post(AUTH_API + 'signin', {
            username: credentials.username,
            password: credentials.password
        }, httpOptions);
        this.islogin = true;
    };
    AuthService.prototype.register = function (user) {
        return this.http.post(AUTH_API + 'signup', {
            username: user.username,
            email: user.email,
            phone: user.phone,
            dateOfBirth: user.dateOfBirth,
            password: user.password
        }, httpOptions);
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/candidate.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/candidate.service.ts ***!
  \***********************************************/
/*! exports provided: CandidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidateService", function() { return CandidateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var CandidateService = /** @class */ (function () {
    function CandidateService(httpClient, _snackbar) {
        this.httpClient = httpClient;
        this._snackbar = _snackbar;
        this.baseURL = '/candidat';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
    }
    CandidateService.prototype.createCandidate = function (candidate, fileCV, fileLettre) {
        return this.httpClient.post(this.baseURL, candidate, { headers: this.headers });
    };
    CandidateService.prototype.getCandidatesList = function () {
        console.log('test');
        return this.httpClient.get("/candidats");
    };
    CandidateService.prototype.getCandidate = function (id) {
        return this.httpClient.get("/candidat" + "/" + id);
    };
    CandidateService.prototype.downloadFile = function (pathCv) {
        return this.httpClient.get("/downloadFile" + "/" + pathCv);
    };
    CandidateService.prototype.sendConfirmMessage = function (id) {
        return this.httpClient.get("/sendConfirmMessage/" + id);
    };
    CandidateService.prototype.sendDenyMessage = function (id) {
        return this.httpClient.get("/sendDenyMessage/" + id);
    };
    CandidateService.prototype.deleteCandidate = function (id) {
        return this.httpClient.delete("/candidate/" + id);
    };
    CandidateService.prototype.toastMessage = function (message) {
        this._snackbar.open(message, 'Close', {
            duration: 10000,
            horizontalPosition: 'right',
            verticalPosition: 'bottom',
        });
    };
    CandidateService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }
    ]; };
    CandidateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], CandidateService);
    return CandidateService;
}());



/***/ }),

/***/ "./src/app/services/email.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/email.service.ts ***!
  \*******************************************/
/*! exports provided: EmailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailService", function() { return EmailService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var EmailService = /** @class */ (function () {
    function EmailService(http) {
        this.http = http;
    }
    EmailService.prototype.sendEmail = function () {
        return this.http.get("localhost:8080/sendMessage");
    };
    EmailService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    EmailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], EmailService);
    return EmailService;
}());



/***/ }),

/***/ "./src/app/services/employe.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/employe.service.ts ***!
  \*********************************************/
/*! exports provided: EmployeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeService", function() { return EmployeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _modals_employe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modals/employe */ "./src/app/modals/employe.ts");




var EmployeService = /** @class */ (function () {
    function EmployeService(httpClient) {
        this.httpClient = httpClient;
        this.employe = new _modals_employe__WEBPACK_IMPORTED_MODULE_3__["Employe"]();
        this.host = "http://localhost:8080";
    }
    EmployeService.prototype.getEmployeesList = function () {
        console.log("test call");
        return this.httpClient.get("/users");
    };
    EmployeService.prototype.getEmploye = function (id) {
        console.log("this is id =" + id);
        return this.httpClient.get("/user/" + id);
    };
    EmployeService.prototype.archiveEmploye = function (id) {
        return this.httpClient.get("/archiveEmploye/" + id);
    };
    EmployeService.prototype.getActiveEmployees = function () {
        return this.httpClient.get("/activeEmployees");
    };
    EmployeService.prototype.getArchivedEmployees = function () {
        return this.httpClient.get("/archivedEmployees");
    };
    EmployeService.prototype.generateReport = function (id) {
        return this.httpClient.get("/report/pdf" + "/" + id);
    };
    EmployeService.prototype.deleteEmployeById = function (id) {
        return this.httpClient.delete("/users" + "/" + id);
    };
    EmployeService.prototype.editUser = function (employe) {
        return this.httpClient.put("/updateUser", employe);
    };
    EmployeService.prototype.editPhoto = function (fileImage, id) {
        var data = new FormData();
        data.append('id', JSON.stringify(id));
        data.append('image', fileImage);
        return this.httpClient.put("/photo?id=" + id, fileImage);
    };
    EmployeService.prototype.updateEmployee = function (employe, fileImage) {
        var data = new FormData();
        data.append('user', JSON.stringify(employe));
        data.append('image', fileImage);
        return this.httpClient.put("/user", data);
    };
    EmployeService.prototype.createEmploye = function (employe, fileImage) {
        var data = new FormData();
        data.append('user', JSON.stringify(employe));
        data.append('image', fileImage);
        return this.httpClient.post("/createEmploye", data);
    };
    EmployeService.prototype.setter = function (employe) {
        this.employe = employe;
    };
    EmployeService.prototype.getter = function () {
        return this.employe;
    };
    EmployeService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    EmployeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], EmployeService);
    return EmployeService;
}());



/***/ }),

/***/ "./src/app/services/employee.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/employee.service.ts ***!
  \**********************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__);





var EmployeeService = /** @class */ (function () {
    function EmployeeService(http) {
        this.http = http;
        this.baseURL = '/employees';
    }
    EmployeeService.prototype.postEmployee = function (emp) {
        return this.http.post(this.baseURL, emp);
    };
    EmployeeService.prototype.getEmployeeList = function () {
        return this.http.get(this.baseURL);
    };
    EmployeeService.prototype.putEmployee = function (emp) {
        return this.http.put(this.baseURL + ("/" + emp._id), emp);
    };
    EmployeeService.prototype.deleteEmployee = function (_id) {
        return this.http.delete(this.baseURL + ("/" + _id));
    };
    EmployeeService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    EmployeeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], EmployeeService);
    return EmployeeService;
}());



/***/ }),

/***/ "./src/app/services/token-storage.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/token-storage.service.ts ***!
  \***************************************************/
/*! exports provided: TokenStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenStorageService", function() { return TokenStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TOKEN_KEY = 'auth-token';
var USER_KEY = 'auth-user';
var TokenStorageService = /** @class */ (function () {
    function TokenStorageService() {
    }
    TokenStorageService.prototype.signOut = function () {
        window.sessionStorage.clear();
    };
    TokenStorageService.prototype.saveToken = function (token) {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, token);
    };
    TokenStorageService.prototype.getToken = function () {
        return sessionStorage.getItem(TOKEN_KEY);
    };
    TokenStorageService.prototype.saveUser = function (user) {
        window.sessionStorage.removeItem(USER_KEY);
        window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    };
    TokenStorageService.prototype.getUser = function () {
        return JSON.parse(sessionStorage.getItem(USER_KEY));
    };
    TokenStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], TokenStorageService);
    return TokenStorageService;
}());



/***/ }),

/***/ "./src/app/services/uploadfile.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/uploadfile.service.ts ***!
  \************************************************/
/*! exports provided: UploadfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadfileService", function() { return UploadfileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var UploadfileService = /** @class */ (function () {
    function UploadfileService(https) {
        this.https = https;
    }
    UploadfileService.prototype.pushFileToStorage = function (file) {
        var data = new FormData();
        data.append('file', file);
        var newRequest = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', '/savefile', data, {
            reportProgress: true,
            responseType: 'text'
        });
        return this.https.request(newRequest);
    };
    UploadfileService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    UploadfileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], UploadfileService);
    return UploadfileService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var API_URL = '/api/test/';
var UserService = /** @class */ (function () {
    function UserService(http, _snackbar) {
        this.http = http;
        this._snackbar = _snackbar;
    }
    UserService.prototype.getUser = function (id) {
        console.log("this is id =" + id);
        return this.http.get("/user/" + id);
    };
    UserService.prototype.getUserId = function () {
        return this.userId;
    };
    UserService.prototype.getUserEmail = function () {
        return this.userEmail;
    };
    UserService.prototype.getUserAvatar = function (id) {
        return this.http.get("/avatar/" + id);
    };
    UserService.prototype.getUserBoard = function () {
        return this.http.get(API_URL + 'user', { responseType: 'text' });
    };
    UserService.prototype.getModeratorBoard = function () {
        return this.http.get(API_URL + 'mod', { responseType: 'text' });
    };
    UserService.prototype.getAdminBoard = function () {
        return this.http.get(API_URL + 'admin', { responseType: 'text' });
    };
    /*public getUserAvatar(id: number){
      return this.http.get(`${environment.baseURL}/avatar/${id}`);
    }*/
    UserService.prototype.toastMessage = function (message) {
        this._snackbar.open(message, 'Close', {
            duration: 5000,
            horizontalPosition: 'right',
            verticalPosition: 'bottom',
        });
    };
    UserService.prototype.updatePassword = function (email, oldPass, newPass) {
        var addBody = {
            'email': email,
            'oldPass': oldPass,
            'newPass': newPass
        };
        return this.http.post("/updatePassword", addBody);
    };
    UserService.prototype.updateUsername = function (email, username) {
        var addInfo = {
            'email': email,
            'username': username
        };
        return this.http.post("/updateUsername", addInfo);
    };
    UserService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }
    ]; };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/shared/widgets/line/line.component.css":
/*!********************************************************!*\
  !*** ./src/app/shared/widgets/line/line.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC93aWRnZXRzL2xpbmUvbGluZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/widgets/line/line.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/widgets/line/line.component.ts ***!
  \*******************************************************/
/*! exports provided: LineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineComponent", function() { return LineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);




var LineComponent = /** @class */ (function () {
    function LineComponent() {
        this.highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
        this.chartOptions = {};
    }
    LineComponent.prototype.ngOnInit = function () {
        this.chartOptions = {
            chart: {
                type: "spline"
            },
            title: {
                text: "Number of Candidates per year"
            },
            xAxis: {
                title: {
                    text: "Years"
                },
                categories: ["2018", "2019", "2020", "2021"]
            },
            yAxis: {
                title: {
                    text: "Number of candidates"
                }
            },
            tooltip: {
                split: true,
                valueSuffix: ' people'
            },
            exporting: {
                split: true,
                valueSuffix: ' people'
            },
            credits: {
                enabled: false
            },
            series: [
                {
                    name: "Number of employees",
                    data: [8, 15, 20, 25]
                }
            ]
        };
        highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
        setTimeout(function () {
            window.dispatchEvent(new Event('resize'));
        }, 300);
    };
    LineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-line',
            template: __webpack_require__(/*! raw-loader!./line.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/widgets/line/line.component.html"),
            styles: [__webpack_require__(/*! ./line.component.css */ "./src/app/shared/widgets/line/line.component.css")]
        })
    ], LineComponent);
    return LineComponent;
}());



/***/ }),

/***/ "./src/app/shared/widgets/pie/pie.component.css":
/*!******************************************************!*\
  !*** ./src/app/shared/widgets/pie/pie.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC93aWRnZXRzL3BpZS9waWUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/widgets/pie/pie.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/widgets/pie/pie.component.ts ***!
  \*****************************************************/
/*! exports provided: PieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieComponent", function() { return PieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);




var PieComponent = /** @class */ (function () {
    function PieComponent() {
        this.highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
        this.chartOptions = {};
    }
    PieComponent.prototype.ngOnInit = function () {
        this.chartOptions = {
            chart: {
                plotBorderWidth: null,
                plotShadow: false,
            },
            title: {
                text: "Number of Candidates  per years"
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            exporting: {
                enabled: true
            },
            credits: {
                enabled: false
            },
        };
        highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
        setTimeout(function () {
            window.dispatchEvent(new Event('resize'));
        }, 300);
    };
    PieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-pie',
            template: __webpack_require__(/*! raw-loader!./pie.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/widgets/pie/pie.component.html"),
            styles: [__webpack_require__(/*! ./pie.component.css */ "./src/app/shared/widgets/pie/pie.component.css")]
        })
    ], PieComponent);
    return PieComponent;
}());



/***/ }),

/***/ "./src/app/shared/widgets/pie2/pie2.component.css":
/*!********************************************************!*\
  !*** ./src/app/shared/widgets/pie2/pie2.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC93aWRnZXRzL3BpZTIvcGllMi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/widgets/pie2/pie2.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/widgets/pie2/pie2.component.ts ***!
  \*******************************************************/
/*! exports provided: Pie2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pie2Component", function() { return Pie2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);




var Pie2Component = /** @class */ (function () {
    function Pie2Component() {
        this.highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
        this.chartOptions = {};
    }
    Pie2Component.prototype.ngOnInit = function () {
        this.chartOptions = {
            chart: {
                plotBorderWidth: null,
                plotShadow: false,
            },
            title: {
                text: "Number of employees per years"
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            exporting: {
                enabled: true
            },
            credits: {
                enabled: false
            },
        };
        highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
        setTimeout(function () {
            window.dispatchEvent(new Event('resize'));
        }, 300);
    };
    Pie2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-pie2',
            template: __webpack_require__(/*! raw-loader!./pie2.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/widgets/pie2/pie2.component.html"),
            styles: [__webpack_require__(/*! ./pie2.component.css */ "./src/app/shared/widgets/pie2/pie2.component.css")]
        })
    ], Pie2Component);
    return Pie2Component;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    baseURL: 'http://localhost:8080'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! zone.js/dist/zone */ "./node_modules/zone.js/dist/zone.js");
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_5__);






if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]);
//.catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /workspace/pfe/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map