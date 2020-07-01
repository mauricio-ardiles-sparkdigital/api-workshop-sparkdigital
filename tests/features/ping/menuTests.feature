# Created by mardiles at 30/6/20
Feature: Ejemplos de test E2E para una API - EndPoint Menu

  @menu
  Scenario Outline: Verify that the user <userName> has the correct 'VOD Access Rights'
    Given User <userName> request an access code
    When User goes to the menu using its access code
    Then The status code is <statusCode>
    And Its vod access rights are <accessRights>


    Examples:
    |userName|statusCode|accessRights|
    |Anneke  | 200      |HD,fullHD,4K|
