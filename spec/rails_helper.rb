
ENV["RAILS_ENV"] ||= 'test'
require 'spec_helper'
require File.expand_path("../../config/environment", __FILE__)
require 'rspec/rails'
require 'rails-controller-testing'
require 'devise'
require 'support/controller_macros'
# Dir[Rails.root.join("spec/support/**/*.rb")].each { |f| require f }


ActiveRecord::Migration.maintain_test_schema!

RSpec.configure do |config|

  config.fixture_path = "#{::Rails.root}/spec/fixtures"

  config.include FactoryGirl::Syntax::Methods
  config.use_transactional_fixtures = true
  config.infer_spec_type_from_file_location!
  config.include ControllerMacros, :type => :controller
  config.include Devise::TestHelpers, :type => :controller

  [:controller, :view, :request].each do |type|
   config.include ::Rails::Controller::Testing::TestProcess, :type => type
   config.include ::Rails::Controller::Testing::TemplateAssertions, :type => type
   config.include ::Rails::Controller::Testing::Integration, :type => type
 end
end
