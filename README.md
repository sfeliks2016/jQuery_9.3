# jQuery_9.3

Zadanie: Budujemy własną karuzelę

Rozpocznij od stworzenia folderu i nowego repozytorium w środku tego folderu. Stwórz pliki: index.html, style.css oraz script.js, aby rozpocząć swój projekt.

W pliku html stwórz &lt;div&gt; z parametrem id ustawionym na carousel. Ten element będzie kontenerem całej naszej karuzeli.

Wewnątrz niego stwórz listę elementów (&lt;ul&gt;) do wyświetlenia w karuzeli na przykład pięciu elementów (&lt;li&gt;) po 400px każdy.
Do każdego elementu dodaj obrazek. Pamiętaj, żeby odpowiednio dobrać właściwości obrazka. Musi dobrze wyglądać w pojedynczym elemencie listy.

Przejdź do pliku css i ostyluj element z id carousel tak, aby znajdował się na środku strony. Określ mu też stałą szerokość i wysokość oraz ustaw jego ramkę. Wymiary muszą być takie, jak jeden element z listy (np. 400 x 300). Jak już pewnie zauważyłeś, obrazki wylewają się poza diva. Napraw to za pomocą właściwości overflow.

Lista elementów ul w karuzeli musi być odpowiednio szeroka. Tyle, ile jest elementów w karuzeli * szerokość jednego elementu. Np. 400px * 5 = 2000px Oprócz tego należy zresetować właściwości, które dla elementu ul domyślnie dobiera przeglądarka

Ostatnim elementem do ostylowania jest element listy (li). Ustaw go tak, aby zajmował tyle miejsca, ile obrazek. Zresetuj jego domyślnie ustawioną wartość list-style na none i zmień opływanie (float) tych elementów tak, aby były jeden obok drugiego

Karuzela w ruch:
wstaw odpowiednie funkcje, zmienne. 
ustaw interwal,
uzyj metody animate()

Dla ambitnych!
Po bokach slajdu dodaj przyciski służące do jego zmiany.
Dodaj kontrolki (mogą być kółka) wskazujące, który slajd jest aktualnie wyświetlany (np aktualny slajd to pełne kółko, a pozostałe są puste).
Zrób tak, żeby kliknięcie w kontrolkę przewijało karuzelę, tak by widoczny był slajd do niej przypisany.