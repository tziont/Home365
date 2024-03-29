const express = require('express')
const router = express.Router()
router.get('/', (req, res) => {

    setTimeout(() =>{
        res.send(mockData)
    }, 3000)
   
})

const mockData =  [
    {
      "propertyId": "9dee2532-44b8-4697-a759-ccffe7551623",
      "createdOn": "2021-08-15T07:13:59.533+00:00",
      "address": "721 W Princess Anne Rd % Norfolk, VA 23517, Unit 721 Apt K, Norfolk",
      "occupiedStats": "occupied",
      "owner": "The Residential Corporation",
      "ownerStatus": "active",
      "tenant": {
        "contactId": "A62FAC96-1E11-406C-9A99-A5E3E0B45590",
        "firstName": "Sagre",
        "lastName": "Stutzman 8",
        "tenantStatus": "active"
      },
      "plan": "On Demand"
    },
    {
      "propertyId": "40675867-576f-41f6-97ca-9f807d3ac4c9",
      "createdOn": "2021-08-15T07:13:49.607+00:00",
      "address": "721 W Princess Anne Rd % Norfolk, VA 23517, Unit 721 Apt J, Norfolk",
      "occupiedStats": "vacant",
      "owner": "The Residential Corporation",
      "ownerStatus": "active",
      "tenant": {
        "contactId": "CF645DE2-CB8B-4615-8A5C-D2E51A101311",
        "firstName": "Hope House Princess Anne Office",
        "lastName": null,
        "tenantStatus": "inactive"
      },
      "plan": "oneRate"
    },
    {
      "propertyId": "4fcc5610-c56e-49e8-b66a-04a600aa929c",
      "createdOn": "2021-08-15T07:13:45.487+00:00",
      "address": "721 W Princess Anne Rd % Norfolk, VA 23517, Unit 721 Apt I, Norfolk",
      "occupiedStats": "vacant",
      "owner": "The Residential Corporation",
      "ownerStatus": "active",
      "tenant": {
        "contactId": "C70E89E4-B23F-4EE5-9FC4-4B33A8F5A00F",
        "firstName": "Hope House",
        "lastName": "Foundation",
        "tenantStatus": "inactive"
      },
      "plan": "oneRate"
    },
    {
      "propertyId": "063ce7e1-1cb1-4562-8f8f-77ae99672a4d",
      "createdOn": "2021-08-15T07:13:41.163+00:00",
      "address": "721 W Princess Anne Rd % Norfolk, VA 23517, Unit 721 Apt H, Norfolk",
      "occupiedStats": "vacant",
      "owner": "The Residential Corporation",
      "ownerStatus": "active",
      "tenant": {
        "contactId": "EC3CF536-9F0E-4F99-A120-814D1A29F007",
        "firstName": "Xavier  D.",
        "lastName": "Chastain",
        "tenantStatus": "inactive"
      },
      "plan": "On Demand"
    },
    {
      "propertyId": "ed46bca9-d302-4309-a2f1-937504fe9ba2",
      "createdOn": "2021-08-15T07:13:36.547+00:00",
      "address": "721 W Princess Anne Rd % Norfolk, VA 23517, Unit 721 Apt G, Norfolk",
      "occupiedStats": "vacant",
      "owner": "The Residential Corporation",
      "ownerStatus": "active",
      "tenant": {
        "contactId": "E18435B4-6AEA-4EE3-80FF-932F27C0E6B5",
        "firstName": "Eunice",
        "lastName": "Stepp8",
        "tenantStatus": "inactive"
      },
      "plan": "oneRate"
    },
    {
      "propertyId": "7f8e7d83-2e6d-4455-9fac-b7191df461c6",
      "createdOn": "2021-08-15T07:13:31.690+00:00",
      "address": "721 W Princess Anne Rd % Norfolk, VA 23517, Unit 721 Apt F, Norfolk",
      "occupiedStats": "occupied",
      "owner": "The Residential Corporation",
      "ownerStatus": "active",
      "tenant": {
        "contactId": "6740505E-B5B2-44C6-897D-A1F4D93DA062",
        "firstName": "Jessica",
        "lastName": "Smith8",
        "tenantStatus": "active"
      },
      "plan": "oneRate"
    },
    {
      "propertyId": "ad34859e-033a-4ba3-b8f5-41e8a3496f38",
      "createdOn": "2021-08-15T07:13:26.157+00:00",
      "address": "721 W Princess Anne Rd % Norfolk, VA 23517, Unit 721 Apt E, Norfolk",
      "occupiedStats": "occupied",
      "owner": "The Residential Corporation",
      "ownerStatus": "active",
      "tenant": {
        "contactId": "B7971AFE-937B-458F-87D6-185910BB676C",
        "firstName": "Luanne",
        "lastName": "Snipes8",
        "tenantStatus": "active"
      },
      "plan": "oneRate"
    },
    {
      "propertyId": "1685ad1f-1f09-4a41-9b1d-f15db6ae665c",
      "createdOn": "2021-08-15T07:13:21.183+00:00",
      "address": "721 W Princess Anne Rd % Norfolk, VA 23517, Unit 721 Apt D, Norfolk",
      "occupiedStats": "occupied",
      "owner": "The Residential Corporation",
      "ownerStatus": "active",
      "tenant": {
        "contactId": "9DA2FC7F-946B-459A-88A2-D2F11A459AE3",
        "firstName": "Gail",
        "lastName": "Moore8",
        "tenantStatus": "active"
      },
      "plan": "oneRate"
    },
    {
      "propertyId": "94a58a0d-b030-4abc-ac4c-496a81767ce2",
      "createdOn": "2021-08-15T07:13:16.197+00:00",
      "address": "721 W Princess Anne Rd % Norfolk, VA 23517, Unit 721 Apt C, Norfolk",
      "occupiedStats": "vacant",
      "owner": "The Residential Corporation",
      "ownerStatus": "active",
      "tenant": {
        "contactId": "98375E30-F57C-46D8-8827-5DC85DCBA017",
        "firstName": "Carolyn",
        "lastName": "Christian8",
        "tenantStatus": "inactive"
      },
      "plan": "On Demand"
    },
    {
      "propertyId": "bd41e1f5-2653-4b12-8198-13e6761746df",
      "createdOn": "2021-08-15T07:13:11.423+00:00",
      "address": "721 W Princess Anne Rd % Norfolk, VA 23517, Unit 721 Apt B, Norfolk",
      "occupiedStats": "occupied",
      "owner": "The Residential Corporation",
      "ownerStatus": "active",
      "tenant": {
        "contactId": "D934CA32-2DE8-404E-936F-2D66D6C97D31",
        "firstName": "Catherine",
        "lastName": "Grillo8",
        "tenantStatus": "active"
      },
      "plan": "On Demand"
    },
    {
      "propertyId": "18386ac9-6390-4245-bde1-4c072ab6ae86",
      "createdOn": "2021-08-15T07:13:06.733+00:00",
      "address": "721 W Princess Anne Rd % Norfolk, VA 23517, Unit 721 Apt A, Norfolk",
      "occupiedStats": "vacant",
      "owner": "The Residential Corporation",
      "ownerStatus": "active",
      "tenant": {
        "contactId": "0479061F-AF9C-4BC2-B3BA-2B37060EAF9F",
        "firstName": "Dorothy",
        "lastName": "Peace8",
        "tenantStatus": "inactive"
      },
      "plan": "On Demand"
    },
    {
      "propertyId": "a2b9264d-f6a3-4f6b-a997-be9a65922ffb",
      "createdOn": "2021-08-15T07:14:14.337+00:00",
      "address": "815 Sandy Ct Virginia Beach, VA 23451, Unit 851, Virginia Beach",
      "occupiedStats": "vacant",
      "owner": "Sandy Court, LLC",
      "ownerStatus": "active",
      "tenant": {
        "contactId": "68CC5FC8-4320-4395-B27B-659EB05ECFE9",
        "firstName": "Eileen",
        "lastName": "Wren",
        "tenantStatus": "inactive"
      },
      "plan": "On Demand"
    },
    {
      "propertyId": "d76e1dff-f3bb-4d7d-ae26-3216441515b0",
      "createdOn": "2021-08-15T07:14:11.020+00:00",
      "address": "815 Sandy Ct Virginia Beach, VA 23451, Unit 849, Virginia Beach",
      "occupiedStats": "inactive",
      "owner": "Sandy Court, LLC",
      "ownerStatus": "active",
      "tenant": null,
      "plan": "oneRate"
    },
    {
      "propertyId": "22c5e87a-0c2c-473d-b854-335b2be8cfbb",
      "createdOn": "2021-08-15T07:14:05.677+00:00",
      "address": "815 Sandy Ct Virginia Beach, VA 23451, Unit 847, Virginia Beach",
      "occupiedStats": "occupied",
      "owner": "Sandy Court, LLC",
      "ownerStatus": "active",
      "tenant": {
        "contactId": "04EABF3A-6496-472D-AD73-5C906433914F",
        "firstName": "Zachary",
        "lastName": "Potter",
        "tenantStatus": "active"
      },
      "plan": "On Demand"
    },
    {
      "propertyId": "f331b699-af97-491d-9c18-4cb0c723650a",
      "createdOn": "2021-08-15T07:13:59.490+00:00",
      "address": "815 Sandy Ct Virginia Beach, VA 23451, Unit 845, Virginia Beach",
      "occupiedStats": "occupied",
      "owner": "Sandy Court, LLC",
      "ownerStatus": "active",
      "tenant": {
        "contactId": "DC2F6F40-4559-4F98-8400-1C16C3722006",
        "firstName": "John R",
        "lastName": "Russell 8",
        "tenantStatus": "active"
      },
      "plan": "oneRate"
    },
    {
      "propertyId": "58dd193c-e18c-4c04-b9f4-8e89f79d0817",
      "createdOn": "2021-08-15T07:13:48.747+00:00",
      "address": "815 Sandy Ct Virginia Beach, VA 23451, Unit 843, Virginia Beach",
      "occupiedStats": "vacant",
      "owner": "Sandy Court, LLC",
      "ownerStatus": "active",
      "tenant": {
        "contactId": "B0DE0F4A-48D7-4103-B558-52F4011E2D60",
        "firstName": "Kemor Wesley",
        "lastName": "Whyte",
        "tenantStatus": "inactive"
      },
      "plan": "oneRate"
    },
    {
      "propertyId": "6792c19d-4561-40aa-bb05-26eea2ed6765",
      "createdOn": "2021-08-15T07:13:43.597+00:00",
      "address": "815 Sandy Ct Virginia Beach, VA 23451, Unit 841, Virginia Beach",
      "occupiedStats": "inactive",
      "owner": "Sandy Court, LLC",
      "ownerStatus": "active",
      "tenant": null,
      "plan": "On Demand"
    },
    {
      "propertyId": "e0773780-eb90-4b1b-a557-10cf23faad9a",
      "createdOn": "2021-08-15T07:13:39.517+00:00",
      "address": "815 Sandy Ct Virginia Beach, VA 23451, Unit 839, Virginia Beach",
      "occupiedStats": "vacant",
      "owner": "Sandy Court, LLC",
      "ownerStatus": "active",
      "tenant": {
        "contactId": "C9FAACF6-6A47-40E0-B105-7A8392B83DAD",
        "firstName": "Raymond",
        "lastName": "Daniels",
        "tenantStatus": "inactive"
      },
      "plan": "On Demand"
    },
    {
      "propertyId": "028918b3-7546-468e-a376-e4ad4c5ea177",
      "createdOn": "2021-08-15T07:13:35.560+00:00",
      "address": "815 Sandy Ct Virginia Beach, VA 23451, Unit 837, Virginia Beach",
      "occupiedStats": "occupied",
      "owner": "Sandy Court, LLC",
      "ownerStatus": "active",
      "tenant": {
        "contactId": "360F557D-9A6D-4C17-BE7C-3AF350A667C7",
        "firstName": "Jordon C. ",
        "lastName": "Hinckley",
        "tenantStatus": "active"
      },
      "plan": "oneRate"
    },
    {
      "propertyId": "b7d1b3ff-afdd-4265-8060-3b8a64c068e0",
      "createdOn": "2021-08-15T07:13:31.453+00:00",
      "address": "815 Sandy Ct Virginia Beach, VA 23451, Unit 835, Virginia Beach",
      "occupiedStats": "vacant",
      "owner": "Sandy Court, LLC",
      "ownerStatus": "active",
      "tenant": {
        "contactId": "A0CAD85C-2B14-4E2B-BABE-47C2AABB8CC8",
        "firstName": "Jordan Lee",
        "lastName": "Weekley",
        "tenantStatus": "inactive"
      },
      "plan": "On Demand"
    },
    {
      "propertyId": "8d7db35d-6eb2-4ede-8a8f-e536f2e1025b",
      "createdOn": "2021-08-15T07:13:26.463+00:00",
      "address": "815 Sandy Ct Virginia Beach, VA 23451, Unit 833, Virginia Beach",
      "occupiedStats": "occupied",
      "owner": "Sandy Court, LLC",
      "ownerStatus": "active",
      "tenant": {
        "contactId": "70BE8F84-BA10-4463-B34C-14E378134F6C",
        "firstName": "Dorothy",
        "lastName": "Clark8",
        "tenantStatus": "active"
      },
      "plan": "oneRate"
    },
    {
      "propertyId": "bef52ea8-a910-44e4-b47e-0980fb6e0bad",
      "createdOn": "2021-08-15T07:13:21.393+00:00",
      "address": "815 Sandy Ct Virginia Beach, VA 23451, Unit 831, Virginia Beach",
      "occupiedStats": "vacant",
      "owner": "Sandy Court, LLC",
      "ownerStatus": "active",
      "tenant": {
        "contactId": "4ED57180-D4CE-4B61-85E9-554A6E1CD91C",
        "firstName": "Rachelle",
        "lastName": "Nagel",
        "tenantStatus": "inactive"
      },
      "plan": "On Demand"
    },
    {
      "propertyId": "f1fbd92a-5271-44d7-8d5c-dc9d77becaf1",
      "createdOn": "2021-08-15T07:13:16.253+00:00",
      "address": "815 Sandy Ct Virginia Beach, VA 23451, Unit 829, Virginia Beach",
      "occupiedStats": "vacant",
      "owner": "Sandy Court, LLC",
      "ownerStatus": "active",
      "tenant": {
        "contactId": "440C18CB-F99E-441E-87F0-DFE41789E033",
        "firstName": "Kenneth",
        "lastName": "Courtney",
        "tenantStatus": "inactive"
      },
      "plan": "On Demand"
    },
    {
      "propertyId": "b6977479-0820-4cbb-ae1d-181dd76965b8",
      "createdOn": "2021-08-15T07:13:11.460+00:00",
      "address": "815 Sandy Ct Virginia Beach, VA 23451, Unit 827, Virginia Beach",
      "occupiedStats": "vacant",
      "owner": "Sandy Court, LLC",
      "ownerStatus": "active",
      "tenant": {
        "contactId": "52C5FBF9-4060-46F6-BCC8-C5584A48E665",
        "firstName": "Rae",
        "lastName": "Daniels",
        "tenantStatus": "inactive"
      },
      "plan": "oneRate"
    },
    {
      "propertyId": "9f11fa09-3f2a-4e85-9f52-d475edfa52ff",
      "createdOn": "2021-08-15T07:13:06.737+00:00",
      "address": "815 Sandy Ct Virginia Beach, VA 23451, Unit 825, Virginia Beach",
      "occupiedStats": "occupied",
      "owner": "Sandy Court, LLC",
      "ownerStatus": "active",
      "tenant": {
        "contactId": "76418B62-D35F-4D64-A721-61934C84F6D9",
        "firstName": "Markita",
        "lastName": "Kearney",
        "tenantStatus": "active"
      },
      "plan": "oneRate"
    },
    {
      "propertyId": "54350e69-ca8d-40f2-bd59-189ca29d64ca",
      "createdOn": "2021-08-15T07:13:03.123+00:00",
      "address": "815 Sandy Ct Virginia Beach, VA 23451, Unit 823, Virginia Beach",
      "occupiedStats": "occupied",
      "owner": "Sandy Court, LLC",
      "ownerStatus": "active",
      "tenant": {
        "contactId": "63927013-1B1D-41ED-8CBB-162566D14FF6",
        "firstName": "David",
        "lastName": "Griggs 8",
        "tenantStatus": "active"
      },
      "plan": "On Demand"
    },
    {
      "propertyId": "03e3a4a2-3ea2-4835-be8a-a31b1c2821b8",
      "createdOn": "2021-08-15T07:12:58.917+00:00",
      "address": "815 Sandy Ct Virginia Beach, VA 23451, Unit 821, Virginia Beach",
      "occupiedStats": "vacant",
      "owner": "Sandy Court, LLC",
      "ownerStatus": "active",
      "tenant": {
        "contactId": "43BE0D8B-A219-457D-875A-E407EAA23A60",
        "firstName": "Helen P.",
        "lastName": "Powell8",
        "tenantStatus": "inactive"
      },
      "plan": "oneRate"
    },
    {
      "propertyId": "8fea9365-b50d-47bb-b5fa-28f0b1f4274e",
      "createdOn": "2021-08-15T07:12:56.173+00:00",
      "address": "815 Sandy Ct Virginia Beach, VA 23451, Unit 819, Virginia Beach",
      "occupiedStats": "occupied",
      "owner": "Sandy Court, LLC",
      "ownerStatus": "active",
      "tenant": {
        "contactId": "F00EDA02-A9BB-4057-9EB5-4861DD911D02",
        "firstName": "Crystal",
        "lastName": "Escobar",
        "tenantStatus": "active"
      },
      "plan": "On Demand"
    },
    {
      "propertyId": "396eb7e9-8a63-4192-b747-2b668bcf4343",
      "createdOn": "2021-08-15T07:12:51.680+00:00",
      "address": "815 Sandy Ct Virginia Beach, VA 23451, Unit 817, Virginia Beach",
      "occupiedStats": "vacant",
      "owner": "Sandy Court, LLC",
      "ownerStatus": "active",
      "tenant": {
        "contactId": "A4C74670-23B3-47A4-AB1D-981EEFDA437A",
        "firstName": "Ross",
        "lastName": "Goldman8",
        "tenantStatus": "inactive"
      },
      "plan": "On Demand"
    },
    {
      "propertyId": "e057f423-9c65-4ea9-bd71-1b47a7c912fb",
      "createdOn": "2021-08-15T07:12:48.267+00:00",
      "address": "815 Sandy Ct Virginia Beach, VA 23451, Unit 815, Virginia Beach",
      "occupiedStats": "occupied",
      "owner": "Sandy Court, LLC",
      "ownerStatus": "active",
      "tenant": {
        "contactId": "4FFD5A5A-2009-41AA-B28B-3FB8605C46F5",
        "firstName": "Dustin Charles",
        "lastName": "Crisler",
        "tenantStatus": "active"
      },
      "plan": "On Demand"
    },
    {
      "propertyId": "b7052106-8695-4812-a721-a4c934dfed2c",
      "createdOn": "2021-08-15T07:12:38.237+00:00",
      "address": "815 Sandy Ct Virginia Beach, VA 23451, Unit 813, Virginia Beach",
      "occupiedStats": "vacant",
      "owner": "Sandy Court, LLC",
      "ownerStatus": "active",
      "tenant": {
        "contactId": "9055F677-64B1-466B-A913-63D13CB5075F",
        "firstName": "Hope House Lakewood West Office",
        "lastName": null,
        "tenantStatus": "inactive"
      },
      "plan": "On Demand"
    },
    {
      "propertyId": "e04af15b-5588-489f-b84c-0f3b2a181e05",
      "createdOn": "2021-08-15T07:12:34.187+00:00",
      "address": "815 Sandy Ct Virginia Beach, VA 23451, Unit 811, Virginia Beach",
      "occupiedStats": "occupied",
      "owner": "Sandy Court, LLC",
      "ownerStatus": "active",
      "tenant": {
        "contactId": "1F6BDC32-78D9-4224-9ADA-A2989D1F7608",
        "firstName": "Blake",
        "lastName": "Thomas 8",
        "tenantStatus": "active"
      },
      "plan": "On Demand"
    },
    {
      "propertyId": "e03c6e0b-0546-4d4a-ba9a-ac3758886ee6",
      "createdOn": "2021-08-15T07:12:29.597+00:00",
      "address": "815 Sandy Ct Virginia Beach, VA 23451, Unit 809, Virginia Beach",
      "occupiedStats": "vacant",
      "owner": "Sandy Court, LLC",
      "ownerStatus": "active",
      "tenant": {
        "contactId": "B84F07BD-4B3D-47D5-B1F5-DF27D57F9AC8",
        "firstName": "Bertha",
        "lastName": "Corbin",
        "tenantStatus": "inactive"
      },
      "plan": "oneRate"
    },
    {
      "propertyId": "33fb8061-42b1-41a7-89f6-2698eb07ea9d",
      "createdOn": "2021-08-15T07:12:24.520+00:00",
      "address": "815 Sandy Ct Virginia Beach, VA 23451, Unit 807, Virginia Beach",
      "occupiedStats": "occupied",
      "owner": "Sandy Court, LLC",
      "ownerStatus": "active",
      "tenant": {
        "contactId": "53FD3F18-E869-4B36-965E-784F3AC3BB37",
        "firstName": "Orette",
        "lastName": "Grant",
        "tenantStatus": "active"
      },
      "plan": "On Demand"
    },
    {
      "propertyId": "265c2a13-b00b-4acd-8227-480d19b50c9a",
      "createdOn": "2021-08-15T07:12:18.350+00:00",
      "address": "815 Sandy Ct Virginia Beach, VA 23451, Unit 805, Virginia Beach",
      "occupiedStats": "vacant",
      "owner": "Sandy Court, LLC",
      "ownerStatus": "active",
      "tenant": {
        "contactId": "CEADA60F-DEA2-4B4A-9B08-911F809CE2A8",
        "firstName": "Michelle",
        "lastName": "Winslow8",
        "tenantStatus": "inactive"
      },
      "plan": "On Demand"
    },
    {
      "propertyId": "170a9eb9-a133-4a94-b04a-3f7dca22cd84",
      "createdOn": "2021-08-15T07:12:13.217+00:00",
      "address": "815 Sandy Ct Virginia Beach, VA 23451, Unit 803, Virginia Beach",
      "occupiedStats": "vacant",
      "owner": "Sandy Court, LLC",
      "ownerStatus": "active",
      "tenant": {
        "contactId": "3930A97C-D1A3-49D7-B5A6-4AF40D7AE336",
        "firstName": "Michael Hugh",
        "lastName": "Beckford",
        "tenantStatus": "inactive"
      },
      "plan": "oneRate"
    },
    {
      "propertyId": "c4ccd6e4-3a20-46d8-9a54-d2ce8832d230",
      "createdOn": "2021-08-15T07:12:08.797+00:00",
      "address": "815 Sandy Ct Virginia Beach, VA 23451, Unit 801, Virginia Beach",
      "occupiedStats": "vacant",
      "owner": "Sandy Court, LLC",
      "ownerStatus": "active",
      "tenant": {
        "contactId": "92CBBFA7-F5DB-447D-8CE1-E085E1DFEDFB",
        "firstName": "Amy  E.",
        "lastName": "Farrar 8",
        "tenantStatus": "inactive"
      },
      "plan": "oneRate"
    }
  ]

module.exports= router