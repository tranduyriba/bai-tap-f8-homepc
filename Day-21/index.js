let text =
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id tempore laborum sequi ut at fugit saepe voluptas animi officia inventore. Totam non ab aperiam laboriosam eius ex, amet ullam harum sequi corrupti eum! Illum quas sint tenetur nesciunt quos maxime.";
      let words = text.split(" ");

      let currentWordIndex = 0;

      setInterval(() => {
        let result = "";

        for (let i = 0; i < words.length; i++) {
          if (i === currentWordIndex) {
            result += '<span style="color: red;">' + words[i] + "</span> ";
          } else {
            result += "<span>" + words[i] + "</span> ";
          }
        }
        document.open();
        document.write(result);
        document.close();

        currentWordIndex++;
        if (currentWordIndex >= words.length) {
          currentWordIndex = 0;
        }
      }, 500);