import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Membership",
      price: "$29.99",
      features: [
        "Access to cardio area",
        "Access to weightlifting area",
        "Access to locker rooms",
        "Limited group fitness classes",
        "Online workout tracker",
        "Discounts on gym merchandise",
      ],
    },
    {
      id: 2,
      name: "Standard Membership",
      price: "$49.99",
      features: [
        "Unlimited access to cardio area",
        "Unlimited access to weightlifting area",
        "Access to locker rooms with sauna",
        "Access to all group fitness classes",
        "Discounts on personal training sessions",
        "Access to swimming pool",
        "Access to basketball court",
        "Free towel service",
      ],
    },
    {
      id: 3,
      name: "Premium Membership",
      price: "$79.99",
      features: [
        "All features of Standard Membership",
        "Access to premium equipment and facilities",
        "Priority booking for group fitness classes",
        "Complimentary personal training session per month",
        "Discounts on gym merchandise",
        "Nutritional counseling sessions",
        "Access to exclusive members-only events",
        "Free smoothie bar access",
      ],
    },
  ];

  return (
    <div>
      <h1 className="text-4xl underline my-8 text-center">Best prices </h1>
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
