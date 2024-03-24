export default function FetchData() {
  const handleGetData = async () => {
    const roles = [
      {
        title: "CEO",
        description: `We’ve transformed our vision of offering the highest-quality coffee to consumers into a tangible achievement. Fore Coffee is a coffee brand deeply committed to every aspect of serving coffee. Furthermore, Fore’s mission extends beyond simply serving outstanding coffee. `,
      },
      {
        title: "CFO",
        description:
          "Manages day-to-day operations to ensure efficiency and effectiveness in resources allocation, performance monitoring, and solving operational challenges to drive the company's success.",
      },
      {
        title: "CMO",
        description:
          "Oversees financial planning and analysis including compliance to financial regulation. Gives strategic financial guidance to the executive team and play a key role in decision-making processes.",
      },
    ];
    try {
      let res = await fetch("https://randomuser.me/api/?results=3&seed=abc", {
        method: "get",
        cache: "no-store",
      });
      res = await res.json();
      for (let i = 0; i < 3; i++) {
        res.results[i].role = roles[i];
      }
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    handleGetData,
  };
}
