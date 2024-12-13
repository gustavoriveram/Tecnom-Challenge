export interface Workshop {
  address: string
  default_address: any
  website: any
  social_facebook: any
  social_twitter: any
  social_linked_in: any
  schedules: any[]
  relationships: any[]
  type: string
  created_at: string
  group: any
  name: string
  email?: string
  email2: any
  phone?: string
  phone2: any
  phone3: any
  formatted_address: string
  active: boolean
  default_formatted_address: any
  area_code: any
  country_code: any
  zone_information: string
  make_code: any
  time_per_shift: any
  amount_per_shift: any
  maximum_per_day: any
  minimum_anticipation_days: any
  removed_at: any
  updated_at: string
  id: number
  externals: Externals
  externals_crm: ExternalsCrm
  resource_type: any
}

export interface Externals {}

export interface ExternalsCrm {}
