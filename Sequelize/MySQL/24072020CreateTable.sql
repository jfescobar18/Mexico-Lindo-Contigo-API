CREATE DATABASE IF NOT EXISTS `MLC_Db`;
USE `MLC_Db`;

CREATE TABLE IF NOT EXISTS `UserGenders` (
	`UserGenderId` INT NOT NULL AUTO_INCREMENT,
    `UserGenderName` VARCHAR(16) NOT NULL,
    PRIMARY KEY ( `UserGenderId` )
);

INSERT INTO `UserGenders` (`UserGenderId`, `UserGenderName`)
SELECT NULL, "Masculino"  FROM DUAL
WHERE NOT EXISTS (SELECT `UserGenderName` 
                    FROM `UserGenders` 
                    WHERE `UserGenderName` = "Masculino" LIMIT 1);

INSERT INTO `UserGenders` (`UserGenderId`, `UserGenderName`)
SELECT NULL, "Femenino"  FROM DUAL
WHERE NOT EXISTS (SELECT `UserGenderName` 
                    FROM `UserGenders` 
                    WHERE `UserGenderName` = "Femenino" LIMIT 1);

INSERT INTO `UserGenders` (`UserGenderId`, `UserGenderName`)
SELECT NULL, "Otro"  FROM DUAL
WHERE NOT EXISTS (SELECT `UserGenderName` 
                    FROM `UserGenders` 
                    WHERE `UserGenderName` = "Otro" LIMIT 1);

CREATE TABLE IF NOT EXISTS `UserTypes` (
	`UserTypeId` INT NOT NULL AUTO_INCREMENT,
    `UserTypeName` VARCHAR(8) NOT NULL,
    PRIMARY KEY ( `UserTypeId` )
);

INSERT INTO `UserTypes` (`UserTypeId`, `UserTypeName`)
SELECT NULL, "Main" FROM DUAL
WHERE NOT EXISTS (SELECT `UserTypeName` 
                    FROM `UserTypes` 
                    WHERE `UserTypeName` = "Main" LIMIT 1);

INSERT INTO `UserTypes` (`UserTypeId`, `UserTypeName`)
SELECT NULL, "Member" FROM DUAL
WHERE NOT EXISTS (SELECT `UserTypeName` 
                    FROM `UserTypes` 
                    WHERE `UserTypeName` = "Member" LIMIT 1);

CREATE TABLE IF NOT EXISTS `States` (
  `StateId` INT NOT NULL AUTO_INCREMENT,
  `StateCode` CHAR(2) NOT NULL DEFAULT '',
  `StateName` VARCHAR(128) NOT NULL DEFAULT '',
  PRIMARY KEY (`StateId`)
);

INSERT INTO `States` (`StateId`, `StateCode`, `StateName`)
SELECT NULL, "AL", "Alabama" FROM DUAL
WHERE NOT EXISTS (SELECT `StateCode` 
                    FROM `States` 
                    WHERE `StateCode` = "AL" LIMIT 1);

INSERT INTO `States` (`StateId`, `StateCode`, `StateName`)
SELECT NULL, "AK", "Alaska" FROM DUAL
WHERE NOT EXISTS (SELECT `StateCode` 
                    FROM `States` 
                    WHERE `StateCode` = "AK" LIMIT 1);

INSERT INTO `States` (`StateId`, `StateCode`, `StateName`)
SELECT NULL, "AS", "American Samoa" FROM DUAL
WHERE NOT EXISTS (SELECT `StateCode` 
                    FROM `States` 
                    WHERE `StateCode` = "AS0" LIMIT 1);

INSERT INTO `States` (`StateId`, `StateCode`, `StateName`)
SELECT NULL, "AZ", "Arizona" FROM DUAL
WHERE NOT EXISTS (SELECT `StateCode` 
                    FROM `States` 
                    WHERE `StateCode` = "AZ" LIMIT 1);

INSERT INTO `States` (`StateId`, `StateCode`, `StateName`)
SELECT NULL, "AR", "Arkansas" FROM DUAL
WHERE NOT EXISTS (SELECT `StateCode` 
                    FROM `States` 
                    WHERE `StateCode` = "AR" LIMIT 1);

INSERT INTO `States` (`StateId`, `StateCode`, `StateName`)
SELECT NULL, "CA", "California" FROM DUAL
WHERE NOT EXISTS (SELECT `StateCode` 
                    FROM `States` 
                    WHERE `StateCode` = "CA" LIMIT 1);

INSERT INTO `States` (`StateId`, `StateCode`, `StateName`)
SELECT NULL, "CO", "Colorado" FROM DUAL
WHERE NOT EXISTS (SELECT `StateCode` 
                    FROM `States` 
                    WHERE `StateCode` = "CO" LIMIT 1);

INSERT INTO `States` (`StateId`, `StateCode`, `StateName`)
SELECT NULL, "CT", "Connecticut" FROM DUAL
WHERE NOT EXISTS (SELECT `StateCode` 
                    FROM `States` 
                    WHERE `StateCode` = "CT" LIMIT 1);

INSERT INTO `States` (`StateId`, `StateCode`, `StateName`)
SELECT NULL, "DE", "Delaware" FROM DUAL
WHERE NOT EXISTS (SELECT `StateCode` 
                    FROM `States` 
                    WHERE `StateCode` = "DE" LIMIT 1);

INSERT INTO `States` (`StateId`, `StateCode`, `StateName`)
SELECT NULL, "DC", "District of Columbia" FROM DUAL
WHERE NOT EXISTS (SELECT `StateCode` 
                    FROM `States` 
                    WHERE `StateCode` = "DC" LIMIT 1);

INSERT INTO `States` (`StateId`, `StateCode`, `StateName`)
SELECT NULL, "FM", "Federated States of Micronesia" FROM  DUAL
WHERE NOT EXISTS (SELECT `StateCode` 
                    FROM `States` 
                    WHERE `StateCode` = "FM" LIMIT 1);

INSERT INTO `States` (`StateId`, `StateCode`, `StateName`)
SELECT NULL, "FL", "Florida" FROM  DUAL
WHERE NOT EXISTS (SELECT `StateCode` 
                    FROM `States` 
                    WHERE `StateCode` = "FL" LIMIT 1);

INSERT INTO `States` (`StateId`, `StateCode`, `StateName`)
SELECT NULL, "GA", "Georgia" FROM  DUAL
WHERE NOT EXISTS (SELECT `StateCode` 
                    FROM `States` 
                    WHERE `StateCode` = "GA" LIMIT 1);

INSERT INTO `States` (`StateId`, `StateCode`, `StateName`)
SELECT NULL, "GU", "Guam" FROM  DUAL
WHERE NOT EXISTS (SELECT `StateCode` 
                    FROM `States` 
                    WHERE `StateCode` = "GU" LIMIT 1);

INSERT INTO `States` (`StateId`, `StateCode`, `StateName`)
SELECT NULL, "HI", "Hawaii" FROM  DUAL
WHERE NOT EXISTS (SELECT `StateCode` 
                    FROM `States` 
                    WHERE `StateCode` = "HI" LIMIT 1);

INSERT INTO `States` (`StateId`, `StateCode`, `StateName`)
SELECT NULL, "ID", "Idaho" FROM  DUAL
WHERE NOT EXISTS (SELECT `StateCode` 
                    FROM `States` 
                    WHERE `StateCode` = "ID" LIMIT 1);

INSERT INTO `States` (`StateId`, `StateCode`, `StateName`)
SELECT NULL, "IL", "Illinois" FROM  DUAL
WHERE NOT EXISTS (SELECT `StateCode` 
                    FROM `States` 
                    WHERE `StateCode` = "IL" LIMIT 1);

INSERT INTO `States` (`StateId`, `StateCode`, `StateName`)
SELECT NULL, "IN", "Indiana" FROM  DUAL
WHERE NOT EXISTS (SELECT `StateCode` 
                    FROM `States` 
                    WHERE `StateCode` = "IN" LIMIT 1);

INSERT INTO `States` (`StateId`, `StateCode`, `StateName`)
SELECT NULL, "IA", "Iowa" FROM  DUAL
WHERE NOT EXISTS (SELECT `StateCode` 
                    FROM `States` 
                    WHERE `StateCode` = "IA" LIMIT 1);

INSERT INTO `States` (`StateId`, `StateCode`, `StateName`)
SELECT NULL, "KS", "Kansas" FROM  DUAL
WHERE NOT EXISTS (SELECT `StateCode` 
                    FROM `States` 
                    WHERE `StateCode` = "KS" LIMIT 1);

INSERT INTO `States` (`StateId`, `StateCode`, `StateName`)
SELECT NULL, "KY", "Kentucky" FROM  DUAL
WHERE NOT EXISTS (SELECT `StateCode` 
                    FROM `States` 
                    WHERE `StateCode` = "KY" LIMIT 1);

INSERT INTO `States` (`StateId`, `StateCode`, `StateName`)
SELECT NULL, "LA", "Louisiana" FROM  DUAL
WHERE NOT EXISTS (SELECT `StateCode` 
                    FROM `States` 
                    WHERE `StateCode` = "LA" LIMIT 1);

INSERT INTO `States` (`StateId`, `StateCode`, `StateName`)
SELECT NULL, "ME", "Maine" FROM  DUAL
WHERE NOT EXISTS (SELECT `StateCode` 
                    FROM `States` 
                    WHERE `StateCode` = "ME" LIMIT 1);

INSERT INTO `States` (`StateId`, `StateCode`, `StateName`)
SELECT NULL, "MH", "Marshall Islands" FROM  DUAL
WHERE NOT EXISTS (SELECT `StateCode` 
                    FROM `States` 
                    WHERE `StateCode` = "MH" LIMIT 1);

INSERT INTO `States` (`StateId`, `StateCode`, `StateName`)
SELECT NULL, "MD", "Maryland" FROM  DUAL
WHERE NOT EXISTS (SELECT `StateCode` 
                    FROM `States` 
                    WHERE `StateCode` = "MD" LIMIT 1);

INSERT INTO `States` (`StateId`, `StateCode`, `StateName`)
SELECT NULL, "MA", "Massachusetts" FROM  DUAL
WHERE NOT EXISTS (SELECT `StateCode` 
                    FROM `States` 
                    WHERE `StateCode` = "MA" LIMIT 1);

INSERT INTO `States` (`StateId`, `StateCode`, `StateName`)
SELECT NULL, "MI", "Michigan" FROM  DUAL
WHERE NOT EXISTS (SELECT `StateCode` 
                    FROM `States` 
                    WHERE `StateCode` = "MI" LIMIT 1);

INSERT INTO `States` (`StateId`, `StateCode`, `StateName`)
SELECT NULL, "MN", "Minnesota" FROM  DUAL
WHERE NOT EXISTS (SELECT `StateCode` 
                    FROM `States` 
                    WHERE `StateCode` = "MN" LIMIT 1);

INSERT INTO `States` (`StateId`, `StateCode`, `StateName`)
SELECT NULL, "MS", "Mississippi" FROM  DUAL
WHERE NOT EXISTS (SELECT `StateCode` 
                    FROM `States` 
                    WHERE `StateCode` = "MS" LIMIT 1);

INSERT INTO `States` (`StateId`, `StateCode`, `StateName`)
SELECT NULL, "MO", "Missouri" FROM  DUAL
WHERE NOT EXISTS (SELECT `StateCode` 
                    FROM `States` 
                    WHERE `StateCode` = "MO" LIMIT 1);

INSERT INTO `States` (`StateId`, `StateCode`, `StateName`)
SELECT NULL, "MT", "Montana" FROM  DUAL
WHERE NOT EXISTS (SELECT `StateCode` 
                    FROM `States` 
                    WHERE `StateCode` = "MI" LIMIT 1);

INSERT INTO `States` (`StateId`, `StateCode`, `StateName`)
SELECT NULL, "NE", "Nebraska" FROM  DUAL
WHERE NOT EXISTS (SELECT `StateCode` 
                    FROM `States` 
                    WHERE `StateCode` = "NE" LIMIT 1);

INSERT INTO `States` (`StateId`, `StateCode`, `StateName`)
SELECT NULL, "NV", "Nevada" FROM  DUAL
WHERE NOT EXISTS (SELECT `StateCode` 
                    FROM `States` 
                    WHERE `StateCode` = "NV" LIMIT 1);

INSERT INTO `States` (`StateId`, `StateCode`, `StateName`)
SELECT NULL, "NH", "New Hampshire" FROM  DUAL
WHERE NOT EXISTS (SELECT `StateCode` 
                    FROM `States` 
                    WHERE `StateCode` = "NH" LIMIT 1);

INSERT INTO `States` (`StateId`, `StateCode`, `StateName`)
SELECT NULL, "NJ", "New Jersey" FROM  DUAL
WHERE NOT EXISTS (SELECT `StateCode` 
                    FROM `States` 
                    WHERE `StateCode` = "NJ" LIMIT 1);

INSERT INTO `States` (`StateId`, `StateCode`, `StateName`)
SELECT NULL, "NM", "New Mexico" FROM  DUAL
WHERE NOT EXISTS (SELECT `StateCode` 
                    FROM `States` 
                    WHERE `StateCode` = "NM" LIMIT 1);

INSERT INTO `States` (`StateId`, `StateCode`, `StateName`)
SELECT NULL, "NY", "New York" FROM  DUAL
WHERE NOT EXISTS (SELECT `StateCode` 
                    FROM `States` 
                    WHERE `StateCode` = "NY" LIMIT 1);

INSERT INTO `States` (`StateId`, `StateCode`, `StateName`)
SELECT NULL, "NC", "North Carolina" FROM  DUAL
WHERE NOT EXISTS (SELECT `StateCode` 
                    FROM `States` 
                    WHERE `StateCode` = "NC" LIMIT 1);

INSERT INTO `States` (`StateId`, `StateCode`, `StateName`)
SELECT NULL, "ND", "North Dakota" FROM  DUAL
WHERE NOT EXISTS (SELECT `StateCode` 
                    FROM `States` 
                    WHERE `StateCode` = "ND" LIMIT 1);

INSERT INTO `States` (`StateId`, `StateCode`, `StateName`)
SELECT NULL, "MP", "Northern Mariana Islands" FROM  DUAL
WHERE NOT EXISTS (SELECT `StateCode` 
                    FROM `States` 
                    WHERE `StateCode` = "MP" LIMIT 1);

INSERT INTO `States` (`StateId`, `StateCode`, `StateName`)
SELECT NULL, "OH", "Ohio" FROM  DUAL
WHERE NOT EXISTS (SELECT `StateCode` 
                    FROM `States` 
                    WHERE `StateCode` = "OH" LIMIT 1);

INSERT INTO `States` (`StateId`, `StateCode`, `StateName`)
SELECT NULL, "OK", "Oklahoma" FROM  DUAL
WHERE NOT EXISTS (SELECT `StateCode` 
                    FROM `States` 
                    WHERE `StateCode` = "OK" LIMIT 1);

INSERT INTO `States` (`StateId`, `StateCode`, `StateName`)
SELECT NULL, "OR", "Oregon" FROM  DUAL
WHERE NOT EXISTS (SELECT `StateCode` 
                    FROM `States` 
                    WHERE `StateCode` = "OR" LIMIT 1);

INSERT INTO `States` (`StateId`, `StateCode`, `StateName`)
SELECT NULL, "PW", "Palau" FROM  DUAL
WHERE NOT EXISTS (SELECT `StateCode` 
                    FROM `States` 
                    WHERE `StateCode` = "PW" LIMIT 1);

INSERT INTO `States` (`StateId`, `StateCode`, `StateName`)
SELECT NULL, "PA", "Pennsylvania" FROM  DUAL
WHERE NOT EXISTS (SELECT `StateCode` 
                    FROM `States` 
                    WHERE `StateCode` = "PA" LIMIT 1);

INSERT INTO `States` (`StateId`, `StateCode`, `StateName`)
SELECT NULL, "PR", "Puerto Rico" FROM  DUAL
WHERE NOT EXISTS (SELECT `StateCode` 
                    FROM `States` 
                    WHERE `StateCode` = "PR" LIMIT 1);

INSERT INTO `States` (`StateId`, `StateCode`, `StateName`)
SELECT NULL, "RI", "Rhode Island" FROM  DUAL
WHERE NOT EXISTS (SELECT `StateCode` 
                    FROM `States` 
                    WHERE `StateCode` = "RI" LIMIT 1);

INSERT INTO `States` (`StateId`, `StateCode`, `StateName`)
SELECT NULL, "SC", "South Carolina" FROM  DUAL
WHERE NOT EXISTS (SELECT `StateCode` 
                    FROM `States` 
                    WHERE `StateCode` = "SC" LIMIT 1);

INSERT INTO `States` (`StateId`, `StateCode`, `StateName`)
SELECT NULL, "SD", "South Dakota" FROM  DUAL
WHERE NOT EXISTS (SELECT `StateCode` 
                    FROM `States` 
                    WHERE `StateCode` = "SD" LIMIT 1);

INSERT INTO `States` (`StateId`, `StateCode`, `StateName`)
SELECT NULL, "TN", "Tennessee" FROM  DUAL
WHERE NOT EXISTS (SELECT `StateCode` 
                    FROM `States` 
                    WHERE `StateCode` = "TN" LIMIT 1);

INSERT INTO `States` (`StateId`, `StateCode`, `StateName`)
SELECT NULL, "TX", "Texas" FROM  DUAL
WHERE NOT EXISTS (SELECT `StateCode` 
                    FROM `States` 
                    WHERE `StateCode` = "TX" LIMIT 1);

INSERT INTO `States` (`StateId`, `StateCode`, `StateName`)
SELECT NULL, "UT", "Utah" FROM  DUAL
WHERE NOT EXISTS (SELECT `StateCode` 
                    FROM `States` 
                    WHERE `StateCode` = "UT" LIMIT 1);

INSERT INTO `States` (`StateId`, `StateCode`, `StateName`)
SELECT NULL, "VT", "Vermont" FROM  DUAL
WHERE NOT EXISTS (SELECT `StateCode` 
                    FROM `States` 
                    WHERE `StateCode` = "VT" LIMIT 1);

INSERT INTO `States` (`StateId`, `StateCode`, `StateName`)
SELECT NULL, "VI", "Virgin Islands" FROM  DUAL
WHERE NOT EXISTS (SELECT `StateCode` 
                    FROM `States` 
                    WHERE `StateCode` = "VI" LIMIT 1);

INSERT INTO `States` (`StateId`, `StateCode`, `StateName`)
SELECT NULL, "VA", "Virginia" FROM  DUAL
WHERE NOT EXISTS (SELECT `StateCode` 
                    FROM `States` 
                    WHERE `StateCode` = "VA" LIMIT 1);

INSERT INTO `States` (`StateId`, `StateCode`, `StateName`)
SELECT NULL, "WA", "Washington" FROM  DUAL
WHERE NOT EXISTS (SELECT `StateCode` 
                    FROM `States` 
                    WHERE `StateCode` = "WA" LIMIT 1);

INSERT INTO `States` (`StateId`, `StateCode`, `StateName`)
SELECT NULL, "WV", "West Virginia" FROM  DUAL
WHERE NOT EXISTS (SELECT `StateCode` 
                    FROM `States` 
                    WHERE `StateCode` = "WV" LIMIT 1);

INSERT INTO `States` (`StateId`, `StateCode`, `StateName`)
SELECT NULL, "WI", "Wisconsin" FROM  DUAL
WHERE NOT EXISTS (SELECT `StateCode` 
                    FROM `States` 
                    WHERE `StateCode` = "WI" LIMIT 1);

INSERT INTO `States` (`StateId`, `StateCode`, `StateName`)
SELECT NULL, "WY", "Wyoming" FROM  DUAL
WHERE NOT EXISTS (SELECT `StateCode` 
                    FROM `States` 
                    WHERE `StateCode` = "WY" LIMIT 1);
    
CREATE TABLE IF NOT EXISTS `Users`(
	`UserId` INT NOT NULL AUTO_INCREMENT,
    `UserCURP` VARCHAR(255) NULL,
    `UserFirstName` VARCHAR(255) NOT NULL,
    `UserLastName` VARCHAR(255) NOT NULL,
    `UserSurname` VARCHAR(255) NOT NULL,
    `UserBirthDate` DATETIME NOT NULL,
    `UserGenderId` INT NOT NULL,
    `StateId` INT NULL,
    `UserTypeId` INT NOT NULL,
	`UserMemberAlias` VARCHAR(125) NOT NULL,
    `Username` VARCHAR(255) NULL,
    `UserEmail` VARCHAR(255) NULL,
    `UserPhone` VARCHAR(125) NULL,
    `UserPassword` VARCHAR(255) NULL,
    `UserConfirmed` BOOLEAN NULL DEFAULT 0,
    `UserStripeId` VARCHAR(125) NULL,
    `CreationDate` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
    `LastModified` DATETIME NULL,
    PRIMARY KEY ( `UserId` ),
    CONSTRAINT `UserGenderId_FK`
        FOREIGN KEY ( `UserGenderId` ) 
        REFERENCES `UserGenders`( `UserGenderId` )
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    CONSTRAINT `StateId_FK`
        FOREIGN KEY ( `StateId` )
        REFERENCES `States`( `StateId` )
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    CONSTRAINT `UserTypeId_FK`
        FOREIGN KEY ( `UserTypeId` ) 
        REFERENCES `UserTypes`( `UserTypeId` )
        ON DELETE NO ACTION
        ON UPDATE NO ACTION
);

CREATE TABLE IF NOT EXISTS `MainHasMembers` (
    `MainUserId` INT NOT NULL,
    `MemberUserId` INT NOT NULL,
    CONSTRAINT `MainUserId_FK`
        FOREIGN KEY ( `MainUserId` ) 
        REFERENCES `Users`( `UserId` )
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    CONSTRAINT `MemberUserId_FK`
        FOREIGN KEY ( `MemberUserId` ) 
        REFERENCES `Users`( `UserId` )
        ON DELETE NO ACTION
        ON UPDATE NO ACTION
);

CREATE TABLE IF NOT EXISTS `Admins` (
    `AdminId` INT NOT NULL AUTO_INCREMENT,
    `AdminUsername` VARCHAR(255) NOT NULL,
    `AdminPassword` VARCHAR(255) NOT NULL,
    `CreationDate` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`AdminId`)
);

-- Se@d0gs4rena --
INSERT INTO `Admins` (`AdminId`, `AdminUsername`, `AdminPassword`)
SELECT NULL, "soundmaker", "$2b$10$pEbe5m2e6i2LqvmbLs7H7.wlgN84l5LmIWBbVbG1kXfRTIVFopqnC" FROM DUAL
WHERE NOT EXISTS (SELECT `AdminUsername`
                    FROM `Admins`
                    WHERE `AdminUsername` = "soundmaker" LIMIT 1);

CREATE TABLE IF NOT EXISTS `Sellers` (
    `SellerId` INT NOT NULL AUTO_INCREMENT,
    `SellerFirstName` VARCHAR(255) NOT NULL,
    `SellerLastName` VARCHAR(255) NOT NULL,
    `SellerUsername` VARCHAR(255) NOT NULL,
    `SellerPassword` VARCHAR(255) NOT NULL,
    `CreationDate` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
    `LastModified` DATETIME NULL,
    PRIMARY KEY (`SellerId`)
);

-- Se@d0gs4rena --
INSERT INTO `Sellers` (`SellerId`, `SellerFirstName`, `SellerLastName`, `SellerUsername`, `SellerPassword`)
SELECT NULL, "Seller", "Smith","flamehart", "$2b$10$pEbe5m2e6i2LqvmbLs7H7.wlgN84l5LmIWBbVbG1kXfRTIVFopqnC" FROM DUAL
WHERE NOT EXISTS (SELECT `SellerUsername`
                    FROM `Sellers`
                    WHERE `SellerUsername` = "flamehart" LIMIT 1);

-- T=10 --
-- T55=20 --
-- P=1.0 --
-- H=1.1 --
-- Pa=3.1 --

CREATE TABLE IF NOT EXISTS `MembershipTypes` (
    `MembershipTypeId` INT NOT NULL AUTO_INCREMENT,
    `MembershipTypeName` VARCHAR (125) NOT NULL,
    `MembershipFamilyMembersMin` DECIMAL(12, 2) NOT NULL,
    `MembershipFamilyMembersMax` DECIMAL(12, 2) NOT NULL,
    `MembershipTypeMonthlyCost` DECIMAL(12, 2) NOT NULL,
    `MembershipTypeHalfYearlyCost` DECIMAL(12, 2) NOT NULL,
    `MembershipTypeYearlyCost` DECIMAL(12, 2) NOT NULL,
    `MembershipAdministrativeCost` DECIMAL(12, 2) NOT NULL,
    `MembershipMathExpression` VARCHAR (125) NOT NULL,
    PRIMARY KEY (`MembershipTypeId`)
);

INSERT INTO `MembershipTypes` (`MembershipTypeId`, `MembershipTypeName`, `MembershipFamilyMembersMin`, `MembershipFamilyMembersMax`, `MembershipTypeMonthlyCost`, `MembershipTypeHalfYearlyCost`, `MembershipTypeYearlyCost`, `MembershipAdministrativeCost`, `MembershipMathExpression`)
SELECT NULL, "I1", 10.0, 10.0, 16.00, 88.00, 160.00, 5.00, "10" FROM DUAL
WHERE NOT EXISTS (SELECT `MembershipTypeName` 
                    FROM `MembershipTypes` 
                    WHERE `MembershipTypeName` = "I1" LIMIT 1);

INSERT INTO `MembershipTypes` (`MembershipTypeId`, `MembershipTypeName`, `MembershipFamilyMembersMin`, `MembershipFamilyMembersMax`, `MembershipTypeMonthlyCost`, `MembershipTypeHalfYearlyCost`, `MembershipTypeYearlyCost`, `MembershipAdministrativeCost`, `MembershipMathExpression`)
SELECT NULL, "S2", 20.0, 20.0, 30.00, 165.00, 300.00, 5.00, "20" FROM DUAL
WHERE NOT EXISTS (SELECT `MembershipTypeName` 
                    FROM `MembershipTypes` 
                    WHERE `MembershipTypeName` = "S2" LIMIT 1);

INSERT INTO `MembershipTypes` (`MembershipTypeId`, `MembershipTypeName`, `MembershipFamilyMembersMin`, `MembershipFamilyMembersMax`, `MembershipTypeMonthlyCost`, `MembershipTypeHalfYearlyCost`, `MembershipTypeYearlyCost`, `MembershipAdministrativeCost`, `MembershipMathExpression`)
SELECT NULL, "F3", 11.0, 12.1, 24.00, 132.00, 240.00, 5.00, "10 + 1 || 10 + 1.1 || 10 + 1 + 1.1" FROM DUAL
WHERE NOT EXISTS (SELECT `MembershipTypeName` 
                    FROM `MembershipTypes` 
                    WHERE `MembershipTypeName` = "F3" LIMIT 1);

INSERT INTO `MembershipTypes` (`MembershipTypeId`, `MembershipTypeName`, `MembershipFamilyMembersMin`, `MembershipFamilyMembersMax`, `MembershipTypeMonthlyCost`, `MembershipTypeHalfYearlyCost`, `MembershipTypeYearlyCost`, `MembershipAdministrativeCost`, `MembershipMathExpression`)
SELECT NULL, "P4", 13.1, 15.2, 45.00, 248.00, 450.00, 5.00, "10 + 3.1 || 10 + 3.1 + 1 || 10 + 3.1 + 1.1 || 10 + 3.1 + 1 + 1.1" FROM DUAL
WHERE NOT EXISTS (SELECT `MembershipTypeName` 
                    FROM `MembershipTypes` 
                    WHERE `MembershipTypeName` = "P4" LIMIT 1);

CREATE TABLE IF NOT EXISTS `MembershipPaymentTypes` (
    `MembershipPaymentTypeId` INT NOT NULL AUTO_INCREMENT,
    `MembershipPaymentTypeName` VARCHAR (125) NOT NULL,
    PRIMARY KEY (`MembershipPaymentTypeId`)
);

INSERT INTO `MembershipPaymentTypes` (`MembershipPaymentTypeId`, `MembershipPaymentTypeName`)
SELECT NULL, "CARD" FROM DUAL
WHERE NOT EXISTS  (SELECT `MembershipPaymentTypeName`
                    FROM `MembershipPaymentTypes`
                    WHERE `MembershipPaymentTypeName` = "CARD" LIMIT 1);

INSERT INTO `MembershipPaymentTypes` (`MembershipPaymentTypeId`, `MembershipPaymentTypeName`)
SELECT NULL, "CASH" FROM DUAL
WHERE NOT EXISTS  (SELECT `MembershipPaymentTypeName`
                    FROM `MembershipPaymentTypes`
                    WHERE `MembershipPaymentTypeName` = "CASH" LIMIT 1);

CREATE TABLE IF NOT EXISTS `MembershipPaymentStatus` (
    `MembershipPaymentStatusId` INT NOT NULL AUTO_INCREMENT,
    `MembershipPaymentStatusName` VARCHAR (125) NOT NULL,
    PRIMARY KEY (`MembershipPaymentStatusId`)
);

INSERT INTO `MembershipPaymentStatus` (`MembershipPaymentStatusId`, `MembershipPaymentStatusName`)
SELECT NULL, "SUCCESS" FROM DUAL
WHERE NOT EXISTS (SELECT `MembershipPaymentStatusName`
                    FROM `MembershipPaymentStatus`
                    WHERE `MembershipPaymentStatusName` = "SUCCESS" LIMIT 1);

INSERT INTO `MembershipPaymentStatus` (`MembershipPaymentStatusId`, `MembershipPaymentStatusName`)
SELECT NULL, "PENDING" FROM DUAL
WHERE NOT EXISTS (SELECT `MembershipPaymentStatusName`
                    FROM `MembershipPaymentStatus`
                    WHERE `MembershipPaymentStatusName` = "PENDING" LIMIT 1);                  

INSERT INTO `MembershipPaymentStatus` (`MembershipPaymentStatusId`, `MembershipPaymentStatusName`)
SELECT NULL, "DECLINED" FROM DUAL
WHERE NOT EXISTS (SELECT `MembershipPaymentStatusName`
                    FROM `MembershipPaymentStatus`
                    WHERE `MembershipPaymentStatusName` = "DECLINED" LIMIT 1);          

CREATE TABLE IF NOT EXISTS `MembershipStatus` (
    `MembershipStatusId` INT NOT NULL AUTO_INCREMENT,
    `MembershipStatusName` VARCHAR (125) NOT NULL,
    PRIMARY KEY (`MembershipStatusId`)
);

INSERT INTO `MembershipStatus` (`MembershipStatusId`, `MembershipStatusName`)
SELECT NULL, "Active" FROM DUAL
WHERE NOT EXISTS (SELECT `MembershipStatusName`
                    FROM `MembershipStatus`
                    WHERE `MembershipStatusName` = "Active" LIMIT 1);      

INSERT INTO `MembershipStatus` (`MembershipStatusId`, `MembershipStatusName`)
SELECT NULL, "Paused" FROM DUAL
WHERE NOT EXISTS (SELECT `MembershipStatusName`
                    FROM `MembershipStatus`
                    WHERE `MembershipStatusName` = "Paused" LIMIT 1);      

INSERT INTO `MembershipStatus` (`MembershipStatusId`, `MembershipStatusName`)
SELECT NULL, "Canceled" FROM DUAL
WHERE NOT EXISTS (SELECT `MembershipStatusName`
                    FROM `MembershipStatus`
                    WHERE `MembershipStatusName` = "Canceled" LIMIT 1);

CREATE TABLE IF NOT EXISTS `POS` (
    `POSId` INT NOT NULL AUTO_INCREMENT,
    `POSName` VARCHAR (125) NOT NULL,
    `POSAddress` VARCHAR (255) NOT NULL,
    PRIMARY KEY (`POSId`)
);

INSERT INTO `POS` (`POSId`, `POSName`, `POSAddress`)
SELECT NULL, "Default", "Default" FROM DUAL
WHERE NOT EXISTS (SELECT `POSName`
                    FROM `POS`
                    WHERE `POSName` = "Default" LIMIT 1);   

CREATE TABLE IF NOT EXISTS `Memberships`(
    `MembershipId` INT NOT NULL AUTO_INCREMENT,
    `UserId` INT NOT NULL,
    `MembershipStatusId` INT NOT NULL,
    `MembershipUniqueCode` VARCHAR (125) NULL,
    `MembershipTypeId` INT NOT NULL,
    `MembershipPaymentTypeId` INT NOT NULL,
    `MembershipPaymentFrequency` INT NOT NULL,
    `MembershipCreationDate` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
    `MembershipPaymentStatusId` INT NOT NULL,
    `MembershipNextPaymentDate` DATETIME NULL,
    `MembershipLastPaymentDate` DATETIME NULL,
    `LastModified` DATETIME NULL,
    PRIMARY KEY (`MembershipId`),
    CONSTRAINT `MembershipStatusId_FK`
        FOREIGN KEY (`MembershipStatusId`) 
        REFERENCES `MembershipStatus`(`MembershipStatusId`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    CONSTRAINT `MembershipTypeId_FK`
        FOREIGN KEY (`MembershipTypeId`) 
        REFERENCES `MembershipTypes`(`MembershipTypeId`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    CONSTRAINT `MembershipPaymentTypeId_FK`
        FOREIGN KEY (`MembershipPaymentTypeId`) 
        REFERENCES `MembershipPaymentTypes`(`MembershipPaymentTypeId`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    CONSTRAINT `MembershipPaymentStatusId_FK`
        FOREIGN KEY (`MembershipPaymentStatusId`) 
        REFERENCES `MembershipPaymentStatus`(`MembershipPaymentStatusId`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION
);

CREATE TABLE IF NOT EXISTS `Sells` (
    `SellId` INT NOT NULL AUTO_INCREMENT,
    `SellerId` INT NOT NULL,
    `MembershipId` INT NOT NULL,
    `POSId` INT NOT NULL,
    `CreationDate` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`SellId`),
    CONSTRAINT `SellerId_FK`
        FOREIGN KEY (`SellerId`) 
        REFERENCES `Sellers`(`SellerId`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    CONSTRAINT `MembershipId_FK`
        FOREIGN KEY (`MembershipId`) 
        REFERENCES `Memberships`(`MembershipId`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION
);

CREATE OR REPLACE VIEW `MembershipInformation`
AS
    SELECT `Users`.`UserId`,
        CONCAT(`Users`.`UserFirstName`, " ", `Users`.`UserLastName`, " ", `Users`.`UserSurname`) AS `UserFullName`,
        `Users`.`UserPhone`,
        `Memberships`.`MembershipId`,
        `Memberships`.`MembershipStatusId`,
        `Memberships`.`MembershipUniqueCode`,
        `Memberships`.`MembershipPaymentFrequency`,
        CASE 
            WHEN `Memberships`.`MembershipPaymentFrequency` = 1 THEN `MembershipTypes`.`MembershipTypeMonthlyCost`
            WHEN `Memberships`.`MembershipPaymentFrequency` = 6 THEN `MembershipTypes`.`MembershipTypeHalfYearlyCost`
            WHEN `Memberships`.`MembershipPaymentFrequency` = 12 THEN `MembershipTypes`.`MembershipTypeYearlyCost`
            ELSE NULL
        END AS `MembershipCost`,
        `MembershipTypes`.`MembershipTypeName`,
        `MembershipPaymentTypes`.`MembershipPaymentTypeName`,
        `MembershipPaymentStatus`.`MembershipPaymentStatusName`,
        DATEDIFF(`MembershipNextPaymentDate`,  `MembershipLastPaymentDate`) * 24 * 60 * 60 AS `MembershipDaysUntillNextPayment`
    FROM `Users`
    INNER JOIN `Memberships`
    ON `Users`.`UserId` = `Memberships`.`UserId`
    INNER JOIN `MembershipTypes`
    ON `Memberships`.`MembershipTypeId` = `MembershipTypes`.`MembershipTypeId`
    INNER JOIN `MembershipPaymentTypes`
    ON `Memberships`.`MembershipPaymentTypeId` = `MembershipPaymentTypes`.`MembershipPaymentTypeId`
    INNER JOIN `MembershipPaymentStatus`
    ON `Memberships`.`MembershipPaymentStatusId` = `MembershipPaymentStatus`.`MembershipPaymentStatusId`
;