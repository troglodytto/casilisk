import { CONVERTERS } from "../dist";
import casilisk from "../lib";

const obj = {
  this_as_as: "asdad",
  testiing_form: {
    a_deeply_nested: 1,
    obj_that_is: {
      setup_in_a: {
        very_weird: 2,
        manner: {
          so_that_we_can_test_it: "asd_asdasd",
        },
      },
    },
  },
  this_is_an_array: [
    {
      this_as_as: "asdad",
      testiing_form: {
        a_deeply_nested: 1,
        obj_that_is: {
          setup_in_a: {
            very_weird: 2,
            manner: {
              so_that_we_can_test_it: "asd_asdasd",
            },
          },
        },
      },
    },
    {
      this_as_as: "asdad",
      testiing_form: {
        a_deeply_nested: 1,
        obj_that_is: {
          setup_in_a: {
            very_weird: 2,
            manner: {
              so_that_we_can_test_it: "asd_asdasd",
            },
          },
        },
      },
    },
    {
      this_as_as: "asdad",
      testiing_form: {
        a_deeply_nested: 1,
        obj_that_is: {
          setup_in_a: {
            very_weird: 2,
            manner: {
              so_that_we_can_test_it: "asd_asdasd",
            },
          },
        },
      },
    },
  ],
};

const converted = casilisk(obj, CONVERTERS.SNAKE);
