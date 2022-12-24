/**
 * This file was automatically generated by joi-to-typescript
 * Do not modify this file manually
 */

export interface User {
  /**
   * @example raja@gmail.com
   */
  email: string;
  /**
   * @example 63a71adfe4ac51511d9e918f
   */
  id: string;
  /**
   * @example Raja
   */
  name: string;
  /**
   * @example welcome@123
   */
  password: string;
  /**
   * @example welcome@123
   */
  status?: 'active' | 'inactive';
}
