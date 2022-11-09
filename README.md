# Frontend service

This is the service that will connect to the backend and render the received JSON-data to a more visually pleasing format.

## Provided
* Een codebase, geschreven in ReactJS, een Javascript-framework. Je bent wellicht niet bekend met deze technologie, een situatie waar een DevOps-engineer dagelijks mee geconfronteerd wordt. Kennis van de code is echter niet vereist.

## Requirement
* Creëer je eigen repository, door de files te clonen en zelf te pushen of door een fork te nemen.
* Een Dockerfile om deze applicatie in een container te verpakken. Hiervoor zal je moeten zoeken hoe je dit best aanpakt. Dit vind je met het nodige Google-werk echter zeker terug. De info in [INSTALL.md](https://github.com/Operating-Systems-2/pe_frontend/blob/c0a147b06de5b16b027682d48fe9ece833bf69a5/INSTALL.md) kan je al opweg helpen.
* Zet een CI/CD systeem op, zoals gezien in de lessen.
* Een minimale aanpassing in de code: Er staat een URL waar verwezen wordt naar de Backend-service: deze zal je uiteraard moeten vervangen door een publiek toegankele URL voor je backend vanop je productieserver. De betreffende lijn code vind je [hier](https://github.com/Operating-Systems-2/pe_frontend/blob/c0a147b06de5b16b027682d48fe9ece833bf69a5/src/App.js#L10)

## Acceptance Criteria
* Zorg dat je een werkende container automatisch kan builden met Github Actions.
