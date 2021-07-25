/*
This file standardizes hashing operations (particularly salting), 
and makes the hashing procedure extensible for future modifications.

Sample usage:
    import { hashString, hashCompare } from './utils/hashing'

    //Hashing a string:
    const once_hashed : Promise<string> = hashString('hblurb')
    once_hashed.then((hashed_result) => {
      console.log(hashed_result)
    })

    //Comparing an unhashed string to a hashed string:
    const password = database.get_password('some_user')
    hashCompare('jim_b0b_asswurd',password)).then((is_same) => {
      if (is_same) {
        console.log('Same password!')
      } else {
        console.log('Different password!')
      }
    })
*/

import * as bcrypt from 'bcrypt'

const NUM_SALT_ROUNDS = 10

const hashString = (original_string: string) : Promise<string> => {
  const hash_promise: Promise<string> = bcrypt.hash(original_string, NUM_SALT_ROUNDS)
  return hash_promise
};

const hashCompare = (data: string, encrypted: string) : Promise<boolean> => {
  const hash_compare_result: Promise<boolean> = bcrypt.compare(data, encrypted)
  return hash_compare_result
}

export { hashString, hashCompare }

