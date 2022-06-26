import config from "../../config";

const useGetAnswer = () => {
  const getAnswer = (question, setAnswer) => {
    (async () => {
      try {
        const payload = {
          question,
        };

        const response = await fetch(`http://3.141.196.137:5000/api/kira`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        const json = await response.json();

        setAnswer(json.answer);
      } catch (err) {
        console.log(err);
      }
    })();
  };

  return { getAnswer };
};

export default useGetAnswer;
