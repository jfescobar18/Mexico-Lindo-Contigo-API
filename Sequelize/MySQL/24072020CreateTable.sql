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
    
CREATE TABLE IF NOT EXISTS `Users`(
	`UserId` INT NOT NULL AUTO_INCREMENT,
    `UserCURP` VARCHAR(255) NOT NULL,
    `UserFirstName` VARCHAR(255) NOT NULL,
    `UserLastName` VARCHAR(255) NOT NULL,
    `UserSurname` VARCHAR(255) NOT NULL,
    `UserBirthDate` DATETIME NOT NULL,
    `UserGenderId` INT NOT NULL,
    `UserTypeId` INT NOT NULL,
	`UserMemberAlias` VARCHAR(125) NOT NULL,
    `Username` VARCHAR(255) NULL,
    `UserEmail` VARCHAR(255) NULL,
    `UserPhone` VARCHAR(125) NULL,
    `UserPassword` VARCHAR(255) NULL,
    `UserConfirmed` BOOLEAN NULL DEFAULT 0,
    `CreationDate` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
    `LastModified` DATETIME NULL,
    PRIMARY KEY ( `UserId` ),
    FOREIGN KEY ( `UserGenderId` ) REFERENCES `UserGenders`( `UserGenderId` ),
    FOREIGN KEY ( `UserTypeId` ) REFERENCES `UserTypes`( `UserTypeId` )
);

CREATE TABLE IF NOT EXISTS `MainHasMembers` (
    `MainUserId` INT NOT NULL,
    `MemberUserId` INT NOT NULL,
    FOREIGN KEY ( `MainUserId` ) REFERENCES `Users`( `UserId` ),
    FOREIGN KEY ( `MemberUserId` ) REFERENCES `Users`( `UserId` )
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

CREATE TABLE IF NOT EXISTS `MembershipTypes` (
    `MembershipTypeId` INT NOT NULL AUTO_INCREMENT,
    `MemberShipTypeName` VARCHAR (125) NOT NULL,
    `MembershipTypeMonthlyCost` DECIMAL(12, 2) NOT NULL,
    `MembershipTypeHalfYearlyCost` DECIMAL(12, 2) NOT NULL,
    `MembershipTypeYearlyCost` DECIMAL(12, 2) NOT NULL,
    `MembershipAdministrativeCost` DECIMAL(12, 2) NOT NULL,
    PRIMARY KEY (`MembershipTypeId`)
);

INSERT INTO `MembershipTypes` (`MembershipTypeId`, `MemberShipTypeName`, `MembershipTypeMonthlyCost`, `MembershipTypeHalfYearlyCost`, `MembershipTypeYearlyCost`, `MembershipAdministrativeCost`)
SELECT NULL, "I1", 1.00, 1.00, 1.00, 5.00 FROM DUAL
WHERE NOT EXISTS (SELECT `MemberShipTypeName` 
                    FROM `MembershipTypes` 
                    WHERE `MemberShipTypeName` = "I1" LIMIT 1);

INSERT INTO `MembershipTypes` (`MembershipTypeId`, `MemberShipTypeName`, `MembershipTypeMonthlyCost`, `MembershipTypeHalfYearlyCost`, `MembershipTypeYearlyCost`, `MembershipAdministrativeCost`)
SELECT NULL, "S2", 1.00, 1.00, 1.00, 5.00 FROM DUAL
WHERE NOT EXISTS (SELECT `MemberShipTypeName` 
                    FROM `MembershipTypes` 
                    WHERE `MemberShipTypeName` = "S2" LIMIT 1);

INSERT INTO `MembershipTypes` (`MembershipTypeId`, `MemberShipTypeName`, `MembershipTypeMonthlyCost`, `MembershipTypeHalfYearlyCost`, `MembershipTypeYearlyCost`, `MembershipAdministrativeCost`)
SELECT NULL, "F3", 1.00, 1.00, 1.00, 5.00 FROM DUAL
WHERE NOT EXISTS (SELECT `MemberShipTypeName` 
                    FROM `MembershipTypes` 
                    WHERE `MemberShipTypeName` = "F3" LIMIT 1);

INSERT INTO `MembershipTypes` (`MembershipTypeId`, `MemberShipTypeName`, `MembershipTypeMonthlyCost`, `MembershipTypeHalfYearlyCost`, `MembershipTypeYearlyCost`, `MembershipAdministrativeCost`)
SELECT NULL, "P4", 1.00, 1.00, 1.00, 5.00 FROM DUAL
WHERE NOT EXISTS (SELECT `MemberShipTypeName` 
                    FROM `MembershipTypes` 
                    WHERE `MemberShipTypeName` = "P4" LIMIT 1);

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
SELECT NULL, "SUCESS" FROM DUAL
WHERE NOT EXISTS (SELECT `MembershipPaymentStatusName`
                    FROM `MembershipPaymentStatus`
                    WHERE `MembershipPaymentStatusName` = "SUCESS" LIMIT 1);

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
    `MembershipUniqueCode` VARCHAR (125) NOT NULL,
    `MembershipTypeId` INT NOT NULL,
    `MembershipPaymentTypeId` INT NOT NULL,
    `MembershipPaymentFrequency` INT NOT NULL,
    `MembershipCreationDate` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
    `MembershipPaymentStatusId` INT NOT NULL,
    `MembershipNextPaymentDate` DATETIME NULL,
    `MembershipLastPaymentDate` DATETIME NULL,
    `LastModified` DATETIME NULL,
    PRIMARY KEY (`MembershipId`)
);

CREATE TABLE IF NOT EXISTS `Sells` (
    `SellId` INT NOT NULL AUTO_INCREMENT,
    `SellerId` INT NOT NULL,
    `MembershipId` INT NOT NULL,
    `POSId` INT NOT NULL,
    `CreationDate` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`SellId`),
    FOREIGN KEY (`SellerId`) REFERENCES `Sellers`(`SellerId`),
    FOREIGN KEY (`MembershipId`) REFERENCES `Memberships`(`MembershipId`)
);