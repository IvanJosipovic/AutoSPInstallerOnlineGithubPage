﻿/// <reference path="../../typings/tsd.d.ts" />
(function () {
    "use strict";
    function xmlService() {
        this.config = null;
        this.context = new Jsonix.Context([ConfigModel]);
        this.LoadXml = function (xml) {
            var unmarshaller = this.context.createUnmarshaller();
            this.config = unmarshaller.unmarshalString(xml);
        };
        this.GetXml = function () {
            var marshaller = this.context.createMarshaller();
            return vkbeautify.xml(marshaller.marshalString(this.config));
        };
        // Public Functions
        this.UpgrdeXml398to399 = function (xml) {
            var context = new Jsonix.Context([ConfigModel398]);
            var unmarshaller = context.createUnmarshaller();
            this.config = unmarshaller.unmarshalString(xml);
            this.Upgrde398to399();
        };
        this.UpgrdeXml399to3995 = function (xml) {
            var context = new Jsonix.Context([ConfigModel399]);
            var unmarshaller = context.createUnmarshaller();
            this.config = unmarshaller.unmarshalString(xml);
            this.Upgrde399to3995();
        };
        this.UpgrdeXml3995to39951 = function (xml) {
            var context = new Jsonix.Context([ConfigModel3995]);
            var unmarshaller = context.createUnmarshaller();
            this.config = unmarshaller.unmarshalString(xml);
            this.Upgrde3995to39951();
        };
        this.UpgrdeXml39951to39960 = function (xml) {
            var context = new Jsonix.Context([ConfigModel39951]);
            var unmarshaller = context.createUnmarshaller();
            this.config = unmarshaller.unmarshalString(xml);
            this.Upgrde39951to39960();
        };
        this.UpgrdeXml39960to39970 = function (xml) {
            var context = new Jsonix.Context([ConfigModel39960]);
            var unmarshaller = context.createUnmarshaller();
            this.config = unmarshaller.unmarshalString(xml);
            this.Upgrde39960to39970();
        };

        // Multi version jumps
        this.UpgrdeXml398toLatest = function (xml) {
            this.UpgrdeXml398to399(xml);
            this.Upgrde399to3995();
            this.Upgrde3995to39951();
            this.Upgrde39951to39960();
            this.Upgrde39960to39970();
        };
        this.UpgrdeXml399toLatest = function (xml) {
            this.UpgrdeXml399to3995(xml);
            this.Upgrde3995to39951();
            this.Upgrde39951to39960();
            this.Upgrde39960to39970();
        };
        this.UpgrdeXml3995toLatest = function (xml) {
            this.UpgrdeXml3995to39951(xml);
            this.Upgrde3995to39951();
            this.Upgrde39951to39960();
            this.Upgrde39960to39970();
        };

        // Private Functions
        this.Upgrde398to399 = function () {
            this.config.value.version = "3.99";
            if (this.config.value.serviceApps.enterpriseSearchService.enterpriseSearchServiceApplications.enterpriseSearchServiceApplication.proxy.proxyGroup.name !== undefined) {
                this.config.value.serviceApps.enterpriseSearchService.enterpriseSearchServiceApplications.enterpriseSearchServiceApplication.proxy.proxyGroup = this.config.value.serviceApps.enterpriseSearchService.enterpriseSearchServiceApplications.enterpriseSearchServiceApplication.proxy.proxyGroup.name;
            }
        };
        this.Upgrde399to3995 = function () {
            this.config.value.version = "3.99.5";
            if (this.config.value.farm.serverRoles === undefined) {
                this.config.value.farm.serverRoles = new Object;
                this.config.value.farm.serverRoles.specialLoad = new Object;
                this.config.value.farm.serverRoles.specialLoad.provision = "false";
                this.config.value.farm.serverRoles.webFrontEnd = new Object;
                this.config.value.farm.serverRoles.webFrontEnd.provision = "false";
                this.config.value.farm.serverRoles.singleServerFarm = new Object;
                this.config.value.farm.serverRoles.singleServerFarm.provision = "false";
                this.config.value.farm.serverRoles.search = new Object;
                this.config.value.farm.serverRoles.search.provision = "false";
                this.config.value.farm.serverRoles.application = new Object;
                this.config.value.farm.serverRoles.application.provision = "false";
                this.config.value.farm.serverRoles.distributedCache = new Object;
                this.config.value.farm.serverRoles.distributedCache.provision = "false";
            }
        };
        this.Upgrde3995to39951 = function () {
            this.config.value.version = "3.99.51";
            this.config.value.farm.serverRoles.custom = new Object;
            this.config.value.farm.serverRoles.custom.provision = this.config.value.farm.serverRoles.specialLoad.provision;
        };
        this.Upgrde39951to39960 = function () {
            this.config.value.version = "3.99.60";
            this.config.value.farm.serverRoles.webFrontEndWithDistributedCache = new Object;
            this.config.value.farm.serverRoles.webFrontEndWithDistributedCache.provision = "false";
            this.config.value.farm.serverRoles.applicationWithSearch = new Object;
            this.config.value.farm.serverRoles.applicationWithSearch.provision = "false";
        };

        this.Upgrde39960to39970 = function () {
            this.config.value.version = "3.99.70";

            this.config.value.farm.database.sqlAuthentication = new Object;
            this.config.value.farm.database.sqlAuthentication.enable = false;
            this.config.value.farm.database.sqlAuthentication.sqlUserName = "";
            this.config.value.farm.database.sqlAuthentication.sqlPassword = "";           
            
            for (let webapp of this.config.value.webApplications) {
                webapp.database.database.sqlAuthentication = new SQLAuthentication();
            }

            this.config.value.serviceApps.managedMetadataServiceApp.database.sqlAuthentication = new SQLAuthentication();
            this.config.value.serviceApps.userProfileServiceApp.database.sqlAuthentication = new SQLAuthentication();
            this.config.value.serviceApps.enterpriseSearchService.enterpriseSearchServiceApplications.enterpriseSearchServiceApplication.database.sqlAuthentication = new SQLAuthentication();
            this.config.value.serviceApps.stateService.database.sqlAuthentication = new SQLAuthentication();
            this.config.value.serviceApps.webAnalyticsService.database.sqlAuthentication = new SQLAuthentication();
            this.config.value.serviceApps.spUsageService.database.sqlAuthentication = new SQLAuthentication();
            this.config.value.serviceApps.secureStoreService.database.sqlAuthentication = new SQLAuthentication();
            this.config.value.serviceApps.businessDataConnectivity.database.sqlAuthentication = new SQLAuthentication();
            this.config.value.serviceApps.wordAutomationService.database.sqlAuthentication = new SQLAuthentication();
            this.config.value.serviceApps.appManagementService.database.sqlAuthentication = new SQLAuthentication();
            this.config.value.serviceApps.subscriptionSettingsService.database.sqlAuthentication = new SQLAuthentication();
            this.config.value.serviceApps.machineTranslationService.database.sqlAuthentication = new SQLAuthentication();
            this.config.value.enterpriseServiceApps.accessServices.database.sqlAuthentication = new SQLAuthentication();
            this.config.value.enterpriseServiceApps.performancePointService.database.sqlAuthentication = new SQLAuthentication();
            this.config.value.projectServer.serviceApp.database.sqlAuthentication = new SQLAuthentication();
        };
    }
    
    angular
        .module("ASPIO")
        .service("xmlService", xmlService);
})();
