# Created by mardiles at 30/6/20
Feature: Ejemplos de test E2E para una API - EndPoint Menu

  @menu
  Scenario Outline: Verify that the user <userName> has the correct 'VOD Access Rights'
    Given User <userName> requests an access code
    When User goes to the menu using its access code
    Then The status code is <statusCode>
    And Its vod access rights are <accessRights>


    Examples:
    |userName|statusCode|accessRights|
    |Anneke  | 200      |HD,fullHD,4K|


   @menu
   Scenario: Verify that the menu is showing only VODs for the user access rights
     Given User Anneke requests an access code
     When User goes to the menu using its access code
     Then The status code is 200
     And The menu includes only VOD for the user's access right
