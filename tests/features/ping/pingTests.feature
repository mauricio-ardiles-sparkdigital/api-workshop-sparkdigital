# Created by mardiles at 29/6/20
Feature: Ejemplos de test E2E para una API - EndPoint Ping

  @sanity @ping
  Scenario: Verify that the server is running
    When a ping request is sent
    Then The status code is 200

