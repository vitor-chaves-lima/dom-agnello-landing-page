const wineSelector = document.getElementById("wine-selector");
const suggestionsList = document.getElementById("suggestions-list");

const wine1Suggestions = [
    "Bife grelhado", 
    "Queijo cheddar envelhecido", 
    "Risoto de cogumelos", 
    "Tábua de frios", 
    "Pizza de pepperoni"
];

const wine2Suggestions = [
    "Salada de frutos do mar", 
    "Frango grelhado", 
    "Ceviche", 
    "Queijo de cabra", 
    "Sushi"
];

const wine3Suggestions = [
    "Salada de verão com frutas frescas", 
    "Salmão grelhado", 
    "Bruschetta de tomate e manjericão", 
    "Tapenade de azeitonas", 
    "Queijo feta com azeitonas e pimentões"
];

const wine4Suggestions = [
    "Canapés de salmão defumado", 
    "Queijo brie com geleia de figo", 
    "Mini quiches de queijo e ervas", 
    "Frutas frescas (morangos, uvas)", 
    "Bruschetta de tomate cereja e manjericão"
];

function updateSuggestionsList(items) {
    suggestionsList.innerHTML = items.map(v => `<li>${v}</li>`).join("")
}

function selectWineType() {
    var selectedWine = wineSelector.value;
    
    switch(selectedWine) {
        case 'wine-1':
            updateSuggestionsList(wine1Suggestions);
        break;
        case 'wine-2':
            updateSuggestionsList(wine2Suggestions);
        break;
        case 'wine-3':
            updateSuggestionsList(wine3Suggestions);
        break;
        case 'wine-4':
            updateSuggestionsList(wine4Suggestions);
        break;
    }
}